import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerClean">
      
      {/* Left Column – Site Links */}
      <div className="footerSection">
        <h3>Site</h3>
        <a href="https://www.lsu.edu">lsu.edu</a>
        <Link to="/lost">Report Lost</Link>
        <Link to="/found">Report Found</Link>
        <Link to="/browse">Browse Items</Link>
      </div>

      {/* Middle Column – Contact Emails */}
      <div className="footerSection">
        <h3>Contact</h3>
        <div className="footerEmails">
          <a href="mailto:kagraw2@lsu.edu">kagraw2@lsu.edu</a>
          <a href="mailto:knette2@lsu.edu">knette2@lsu.edu</a>
          <a href="mailto:cjenk52@lsu.edu">cjenk52@lsu.edu</a>
          <a href="mailto:jgrady8@lsu.edu">jgrady8@lsu.edu</a>
          <a href="mailto:rchav12@lsu.edu">rchav12@lsu.edu</a>
        </div>
      </div>

      {/* Right Column – Copyright */}
      <div className="footerCopyright">
        © 2025 LSU Lost and Found  
        <br />All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;
