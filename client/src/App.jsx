import axios from 'axios';
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [founder, setFounder] = useState("");
  const [claimie, setClaimie] = useState("");
  const [claimEmail, setClaimEmail] = useState("");
  const [item, setItem] = useState("");
  const [shortMessage, setShMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState(" ");

  const sendEmail = async (e) => {
    e.preventDefault();
    setEmailStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:4000/send", {
        to: String(email), 
        name: String(name),
        founder: founder,
        claimie: claimie,
        claimEmail: claimEmail,
        item: item,
        shortMessage: shortMessage 
      });
      console.log(res.data);
      setEmailStatus("Email sent successfully");
    } catch (err) {
      console.error(err);
      setEmailStatus(err.response?.data?.error || err.message);
    }
  };    
     

  return (
      <form onSubmit={sendEmail}>
        <input 
          type="email" 
          placeholder="Recipient email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} required
        />

        <input 
          type="text" 
          placeholder="Recipient name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} required
        />

        <input 
          type="text" 
          placeholder="Founder" 
          value={founder} 
          onChange={(e) => setFounder(e.target.value)} required
        />

        <input 
          type="text" 
          placeholder="Claimie" 
          value={claimie} 
          onChange={(e) => setClaimie(e.target.value)} required
        />

        <input 
          type="text" 
          placeholder="claimEmail" 
          value={claimEmail} 
          onChange={(e) => setClaimEmail(e.target.value)} required
        />

        <input 
          type="text" 
          placeholder="Item" 
          value={item} 
          onChange={(e) => setItem(e.target.value)} required
        />

        <input 
          type="text" 
          placeholder="shortMessage" 
          value={shortMessage} 
          onChange={(e) => setShMessage(e.target.value)} required
        />
        <button type="submit">Send Email</button>
        <p>{emailStatus}</p>
      </form>
  );
};

export default App;
