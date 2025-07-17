import '../assets/ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <div className="vertical-line"></div>
          <h2>Demandez un appel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna.
          </p>
        </div>
        <div className="contact-form">
          <h3>En quoi pouvons-nous vous aider ?</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Entrez votre nom" />
              <input type="email" placeholder="Entrez votre Email" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Numéro de téléphone" />
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;