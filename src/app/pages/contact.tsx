'use client';
import '../styles/contact.css';
import { sendEmail } from '@/app/services/contact';
import React from 'react';

function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };
  console.log(data);
  sendEmail(data).then((response) => {
    if (response.success) {
      alert('Message envoyé avec succès !');
      form.reset();
    } else {
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  });
}

export default function Contact() {
  return (
    <div className="contact-wrapper glass">
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-header">
            <h1>Contact</h1>
            <p>
              Nhésitez pas à me contacter pour discuter de vos projets ou pour
              tout autre question.
            </p>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="info-text">
              <p>votre.email@example.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div className="info-text">
              <p>+33 1 23 45 67 89</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div className="info-text">
              <p>Montpellier, France</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
