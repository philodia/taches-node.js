const generate = requir('generate-password');

function generateRandomPassword() {
  // Options pour la génération du mot de passe
  const options = {
    length: 12, // Longueur du mot de passe
    numbers: true, // Autoriser les chiffres
    symbols: true, // Autoriser les symboles
    uppercase: true, // Autoriser les lettres majuscules
    excludeSimilarCharacters: true, // Exclure les caractères similaires (par exemple, 'i' et 'l')
  };

  // Générer le mot de passe
  const password = generate.generate(options);

  // Afficher le mot de passe dans la console
  console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour générer un mot de passe
generateRandomPassword();