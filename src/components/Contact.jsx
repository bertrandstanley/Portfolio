import '/src/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">

        <div className="contact-form">
          <h2>Message Me</h2>
          <form>
            <input type="text" placeholder="Name" required name="name" />
            <input type="email" placeholder="Email" required name="email" />
            <textarea placeholder="Message" required name="message" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:bertrandstanley@gmail.com">bertrandstanley@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Cellphone:</strong>
            <a href="tel:+15167763016">(516) 776-3016</a>
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong>
            <p><a href="https://github.com/bertrandstanley" target="_blank" rel="noopener noreferrer">github.com/bertrandstanley</a></p>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <p><a href="https://linkedin.com/in/stanleybertrand" target="_blank" rel="noopener noreferrer">linkedin.com/in/stanleybertrand</a></p>
          </div>
          <div className="contact-item">
            <strong>Instagram:</strong>
            <p><a href="https://instagram.com/djsteezybaby" target="_blank" rel="noopener noreferrer">instagram.com/djsteezybaby</a></p>
          </div>
          <div className="contact-item">
            <strong>X (formerly Twitter):</strong>
            <p><a href="https://x.com/djsteezybaby" target="_blank" rel="noopener noreferrer">x.com/djsteezybaby</a></p>
          </div>
          <div className="contact-item">
            <strong>SoundCloud:</strong>
            <p><a href="https://soundcloud.com/djsteezybaby" target="_blank" rel="noopener noreferrer">soundcloud.com/djsteezybaby</a></p>
          </div>
        </div>

        <div className="my-websites">
          <h2>Latest Clients</h2>
          <div className="website-images">
            <div className="website-image">
              <a href="https://northmiamisoccer.org/" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/NMSA Website.png" alt="North Miami Soccer Academy Website" width="1200px" height="1200px" />
              </a>
            </div>


            <div className="website-image">
              <a href="https://fondationalfredbeliard.org/" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/FAB Website.png" alt="Fondation Alfred Beliard Website" width="1200px" height="1200px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
