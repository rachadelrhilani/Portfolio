import React from 'react';
import emailjs from 'emailjs-com';

const ContactFooter = ({form}) => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xgfuj9h', 'template_ow2qo09', form.current, '4wvtijxKyw5MMIpq9')
      .then((result) => {
          console.log('Email envoyé:', result.text);
          alert('Message envoyé avec succès !');
      }, (error) => {
          console.error('Erreur:', error.text);
          alert('Une erreur est survenue lors de l’envoi du message.');
      });
      
    e.target.reset(); // Réinitialise le formulaire après l'envoi
  };

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Formulaire de Contact */}
          <div className="col-md-6 mb-3">
            <h5>Contactez-Moi</h5>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-2">
                <label htmlFor="name">Nom</label>
                <input type="text" className="form-control" id="from_name" name="from_name" placeholder="Votre nom" required />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="from_email" name="from_email" placeholder="Votre email" required />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Envoyer</button>
            </form>
          </div>

          {/* Informations de contact et réseaux sociaux */}
          <div className="col-md-6 mb-3 text-center">
            <h5>Contact et Réseaux Sociaux</h5>
            <p>Email : <a href="mailto:rachdos76@gmail.com" className="text-white">rachdos76@gmail.com</a></p>
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/elrhilani-rachad-78bb35294/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100009091812224" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/rachadelrhilani/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://wa.me/+212710680612" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
