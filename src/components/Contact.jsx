import React from 'react'; 
import emailjs from 'emailjs-com';

const ContactFooter = ({ form }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xgfuj9h', 'template_ow2qo09', form.current, '4wvtijxKyw5MMIpq9')
      .then(() => {
        alert('Message envoyé avec succès !');
      })
      .catch(() => {
        alert("Une erreur est survenue lors de l'envoi du message.");
      });

    e.target.reset();
  };

  return (
    <footer className="bg-dark text-white py-5 px-3">
      <div className="container">
        <div className="row gy-4">
          {/* Formulaire de contact */}
          <div className="col-md-6">
            <h4 className="mb-4">Contact-Moi</h4>
            <form ref={form} onSubmit={sendEmail}>
              {[
                { type: 'text', name: 'from_name', placeholder: 'Votre nom' },
                { type: 'email', name: 'from_email', placeholder: 'Votre email' }
              ].map(({ type, name, placeholder }) => (
                <div className="mb-3" key={name}>
                  <input
                    type={type}
                    name={name}
                    className="form-control bg-transparent text-white border-light"
                    placeholder={placeholder}
                    required
                  />
                </div>
              ))}
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  className="form-control bg-transparent text-white border-light"
                  placeholder="Votre message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-outline-light w-100 py-2 fw-bold contact">
                Envoyer
              </button>
            </form>
          </div>

          {/* Infos et réseaux sociaux */}
          <div className="col-md-6 text-center text-md-start">
            <h4 className="mb-4">Réseaux & Contact</h4>

            {/* Email */}
            <p className="mb-2">
              <i className="fas fa-envelope me-2" />
              <a href="mailto:rachdos76@gmail.com" className="text-white text-decoration-none">
                rachdos76@gmail.com
              </a>
            </p>

            {/* Téléphone */}
            <p className="mb-2">
              <i className="fas fa-phone me-2" />
              <a href="tel:+212710680612" className="text-white text-decoration-none">
                +212 710 680 612
              </a>
            </p>

            {/* Adresse */}
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2" />
              N° 49 Bloc 08 Qu Riad Safi, Maroc
            </p>

            {/* Réseaux sociaux */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              {[
                {
                  href: 'https://www.linkedin.com/in/elrhilani-rachad-78bb35294/',
                  icon: 'linkedin'
                },
                {
                  href: 'https://web.facebook.com/profile.php?id=100009091812224',
                  icon: 'facebook'
                },
                {
                  href: 'https://www.instagram.com/rachadelrhilani/',
                  icon: 'instagram'
                },
                {
                  href: 'https://wa.me/+212710680612',
                  icon: 'whatsapp'
                }
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white social-icon"
                >
                  <i className={`fab fa-${icon} fa-2x`} />
                </a>
              ))}
            </div>
            <a href="./Mon_CV.pdf" download className="mt-3 btn btn-primary">📄 Télécharger mon CV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
