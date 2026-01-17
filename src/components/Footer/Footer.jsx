import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h4>Time Capsule</h4>
        <p>
          Preserve memories. Connect with your future self.
          Create meaningful moments that last.
        </p>
      </div>

      <div className="footer-col">
        <h5>Product</h5>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>

      <div className="footer-col">
        <h5>Legal</h5>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
