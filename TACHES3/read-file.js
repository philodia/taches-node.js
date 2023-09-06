const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Une erreur s\'est produite lors de la lecture du fichier :', err);
  } else {
    console.log('Contenu du fichier "welcome.txt" :');
    console.log(data);
  }
});
