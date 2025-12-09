import React, { useState } from "react";
import "../styles/contactpage.css";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatusType("error");
      setStatusText("Please fill in your name, email, and message.");
      return;
    }

    setStatusType("success");
    setStatusText("Thanks for reaching out. We’ll get back to you soon.");

    setFullName("");
    setEmail("");
    setTopic("");
    setMessage("");
  };

  return (
    <div className="contactWrapper">
      <div className="contactBox">
        <h1 className="contactTitle">Contact LSU Lost &amp; Found</h1>
        <p className="contactText">
          Have a question about an item or the site? Send us a quick message and
          someone from the team will follow up.
        </p>

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="contactRow">
            <label className="contactLabel">
              Full name
              <input
                type="text"
                className="contactInput"
                placeholder="First and last name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          </div>

          <div className="contactRow">
            <label className="contactLabel">
              LSU email
              <input
                type="email"
                className="contactInput"
                placeholder="student@lsu.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="contactRow">
            <label className="contactLabel">
              Topic (optional)
              <input
                type="text"
                className="contactInput"
                placeholder="Question about an item, bug report, etc."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </label>
          </div>

          <div className="contactRow">
            <label className="contactLabel">
              Message
              <textarea
                className="contactTextarea"
                rows={4}
                placeholder="Tell us what’s going on."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>

          {statusText && (
            <p
              className={
                statusType === "error" ? "contactStatus error" : "contactStatus"
              }
            >
              {statusText}
            </p>
          )}

          <button type="submit" className="contactSubmitBtn">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
