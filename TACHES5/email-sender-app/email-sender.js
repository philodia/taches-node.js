const nodemailer = requir('nodemailer');

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
  service: 'service-de-messagerie', // Par exemple, 'gmail' pour Gmail
  auth: {
    user: 'votre-adresse-email@gmail.com',
    pass: 'votre-mot-de-passe-email',
  },
});

// Options pour l'e-mail
const mailOptions = {
  from: 'votre-adresse-email@gmail.com',
  to: 'adresse-email-du-destinataire@example.com',
  subject: 'Sujet de l\'e-mail',
  text: 'Contenu du message en texte brut',
  html: '<p>Contenu du message en HTML</p>',
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
  } else {
    console.log('E-mail envoyé avec succès:', info.response);
  }
});