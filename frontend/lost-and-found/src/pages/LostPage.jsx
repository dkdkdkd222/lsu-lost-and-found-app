import React, {useState} from 'react'
import '../styles/lostpage.css'
import supabase from '../supabase-setup/supabase-client.js'

const LostPage = () => {
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
      setErrorText('You need to be logged in to report a lost item.')
      return
    }

    const userId = userData.user.id
    let imageUrl = null

    if (imageFile) {
      const ext = imageFile.name.split('.').pop()
      const fileName = `${userId}-${Date.now()}.${ext}`
      const filePath = `lost/${fileName}`

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
      type: 'lost',
      title: title.trim(),
      description: description.trim(),
      location: location.trim(),
      image_url: imageUrl,
      status: 'open',
      email: email.trim() || null,
      category: category || null
    })

    if (error) {
      console.log('lost insert error:', error)
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
    setSuccessText('Lost item submitted.')
  }

  return (
    <div className = "lostPageWrapper">
      <div className = "lostBox">
        <h1 className = "lostTitle">Lost Items</h1>
        <p className = "lostSubtitle">
          Share what you lost so other students and staff can help you find it.
        </p>

        <form className = "lostForm" onSubmit = {handleSubmit}>
          <div className = "lostFieldRow">
            <label className = "lostLabel">
              Item title
              <input
                type = "text"
                className = "lostInput"
                placeholder = "Notebook, headphones, student ID..."
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
              />
            </label>
          </div>

          <div className = "lostFieldRow">
            <label className = "lostLabel">
              Category
              <select
                className = "lostSelect"
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}
              >
                <option value = "">Select a category</option>
                <option value = "Electronics">Electronics</option>
                <option value = "ID / Card">ID / Card</option>
                <option value = "Clothing">Clothing</option>
                <option value = "School supplies">School supplies</option>
                <option value = "Other">Other</option>
              </select>
            </label>
          </div>

          <div className = "lostFieldRow">
            <label className = "lostLabel">
              Where did you last see it?
              <input
                type = "text"
                className = "lostInput"
                placeholder = "Building, room, or general area"
                value = {location}
                onChange = {(e) => setLocation(e.target.value)}
              />
            </label>
          </div>

          <div className = "lostFieldRow">
            <label className = "lostLabel">
              Description
              <textarea
                className = "lostTextarea"
                rows = {4}
                placeholder = "Color, brand, stickers, case, anything that helps identify it."
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
              />
            </label>
          </div>

          <div className = "lostFieldRow">
            <label className = "lostLabel">
              Photo (optional)
              <input
                type = "file"
                accept = "image/*"
                className = "lostInput"
                onChange = {(e) => setImageFile(e.target.files[0] || null)}
              />
            </label>
          </div>

          <div className = "lostFieldRow">
            <label className = "lostLabel">
              Contact email (optional)
              <input
                type = "email"
                className = "lostInput"
                placeholder = "student@lsu.edu"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          {errorText && <p className = "lostError">{errorText}</p>}
          {successText && <p className = "lostSuccess">{successText}</p>}

          <button
            type = "submit"
            className = "lostSubmitBtn"
            disabled = {loading}
          >
            {loading ? 'Submitting...' : 'Submit lost item'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LostPage
