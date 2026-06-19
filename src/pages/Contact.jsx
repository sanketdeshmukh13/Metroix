import "../styles/contact.css";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <textarea placeholder="Enter Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
