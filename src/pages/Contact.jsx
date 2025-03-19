import '/src/Contact.css';

const Contact = () => {
  return (
    <section id="contact"> {/* The main section with the ID "contact" for the Contact section */}
      <div className="contact-container"> {/* A container to hold the form, contact info, and websites */}

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Message Me</h2> {/* Heading for the contact form */}
          <form> {/* The form where users can input their name, email, and message */}
            <input type="text" placeholder="Name" required name="name" /> {/* Name input field */}
            <input type="email" placeholder="Email" required name="email" /> {/* Email input field */}
            <textarea placeholder="Message" required name="message" /> {/* Message textarea */}
            <button type="submit">Submit</button> {/* Submit button */}
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Info</h2> {/* Heading for contact information */}
          
          {/* Contact Info Items */}
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:bertrandstanley@gmail.com">bertrandstanley@gmail.com</a> {/* Email link */}
          </div>
          
          <div className="contact-item">
            <strong>Cellphone:</strong>
            <a href="tel:+15167763016">(516) 776-3016</a> {/* Phone number link */}
          </div>
          
          <div className="contact-item">
            <strong>GitHub:</strong>
            <p><a href="https://github.com/bertrandstanley" target="_blank" rel="noopener noreferrer">github.com/bertrandstanley</a></p> {/* GitHub link */}
          </div>
          
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <p><a href="https://linkedin.com/in/stanleybertrand" target="_blank" rel="noopener noreferrer">linkedin.com/in/stanleybertrand</a></p> {/* LinkedIn link */}
          </div>
          
          <div className="contact-item">
            <strong>Instagram:</strong>
            <p><a href="https://instagram.com/djsteezybaby" target="_blank" rel="noopener noreferrer">instagram.com/djsteezybaby</a></p> {/* Instagram link */}
          </div>
          
          <div className="contact-item">
            <strong>X (formerly Twitter):</strong>
            <p><a href="https://x.com/djsteezybaby" target="_blank" rel="noopener noreferrer">x.com/djsteezybaby</a></p> {/* X (Twitter) link */}
          </div>
          
          <div className="contact-item">
            <strong>SoundCloud:</strong>
            <p><a href="https://soundcloud.com/djsteezybaby" target="_blank" rel="noopener noreferrer">soundcloud.com/djsteezybaby</a></p> {/* SoundCloud link */}
          </div>
        </div>

        {/* Latest Clients Section */}
        <div className="my-websites">
          <h2>Latest Clients</h2> {/* Heading for the latest clients */}
          
          {/* Website Images Section */}
          <div className="website-images">
            
            {/* North Miami Soccer Academy Website */}
            <div className="website-image">
              <a href="https://northmiamisoccer.org/" target="_blank" rel="noopener noreferrer">
                <img src="/images/NMSA Website.png" alt="North Miami Soccer Academy Website" width="1200px" height="1200px" /> {/* Image for NMSA */}
              </a>
            </div>

            {/* Fondation Alfred Beliard Website */}
            <div className="website-image">
              <a href="https://fondationalfredbeliard.org/" target="_blank" rel="noopener noreferrer">
                <img src="/images/FAB Website.png" alt="Fondation Alfred Beliard Website" width="1200px" height="1200px" /> {/* Image for FAB */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
