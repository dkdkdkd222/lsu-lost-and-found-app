import React, {useState} from 'react'
import '../styles/foundpage.css'
import supabase from '../supabase-setup/supabase-client.js'

const FoundPage = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [successText, setSuccessText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorText('')
    setSuccessText('')

    if (!title.trim() || !location.trim() || !description.trim()) {
      setErrorText('Please fill in the title, location, and description.')
      return
    }

    setLoading(true)

    const {data: userData, error: userError} = await supabase.auth.getUser()

    if (userError || !userData || !userData.user) {
      setLoading(false)
      setErrorText('You need to be logged in to report a found item.')
      return
    }

    const userId = userData.user.id
    let imageUrl = null

    if (imageFile) {
      const ext = imageFile.name.split('.').pop()
      const fileName = `${userId}-${Date.now()}.${ext}`
      const filePath = `found/${fileName}`

      const {error: uploadError} = await supabase.storage
        .from('item-images')
        .upload(filePath, imageFile)

      if (uploadError) {
        console.log('upload error:', uploadError)
        setLoading(false)
        setErrorText('Image upload failed. Try again.')
        return
      }

      const {data: urlData} = supabase.storage
        .from('item-images')
        .getPublicUrl(filePath)

      imageUrl = urlData?.publicUrl || null
    }

    const {error} = await supabase.from('items').insert({
      user_id: userId,
      type: 'found',
      title: title.trim(),
      description: description.trim(),
      location: location.trim(),
      image_url: imageUrl,
      status: 'open',
      email: email.trim() || null,
      category: category || null
    })

    if (error) {
      console.log('found insert error:', error)
      setErrorText('Something went wrong. Try again.')
      setLoading(false)
      return
    }

    setTitle('')
    setCategory('')
    setLocation('')
    setDescription('')
    setEmail('')
    setImageFile(null)
    setLoading(false)
    setSuccessText('Found item submitted.')
  }

  return (
    <div className="foundPageWrapper">
      <div className="foundBox">
        <h1 className="foundTitle">Found Items</h1>
        <p className="foundSubtitle">
          Let other students know what you found and where it can be picked up.
        </p>

        <form className="foundForm" onSubmit={handleSubmit}>
          <div className="foundFieldRow">
            <label className="foundLabel">
              Item title
              <input
                type="text"
                className="foundInput"
                placeholder="Backpack, water bottle, headphones..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>

          <div className="foundFieldRow">
            <label className="foundLabel">
              Category
              <select
                className="foundSelect"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="ID / Card">ID / Card</option>
                <option value="Clothing">Clothing</option>
                <option value="School supplies">School supplies</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div className="foundFieldRow">
            <label className="foundLabel">
              Where is the item now?
              <input
                type="text"
                className="foundInput"
                placeholder="Front desk, specific building, room number, etc."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
          </div>

          <div className="foundFieldRow">
            <label className="foundLabel">
              Description
              <textarea
                className="foundTextarea"
                rows={4}
                placeholder="Color, brand, any unique details so the owner can identify it."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>

          <div className="foundFieldRow">
            <label className="foundLabel">
              Photo (optional)
              <input
                type="file"
                accept="image/*"
                className="foundInput"
                onChange={(e) => setImageFile(e.target.files[0] || null)}
              />
            </label>
          </div>

          <div className="foundFieldRow">
            <label className="foundLabel">
              Contact email (optional)
              <input
                type="email"
                className="foundInput"
                placeholder="student@lsu.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          {errorText && <p className="foundError">{errorText}</p>}
          {successText && <p className="foundSuccess">{successText}</p>}

          <button
            type="submit"
            className="foundSubmitBtn"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit found item'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default FoundPage
