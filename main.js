let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(3500)
  .typeString('Junior Frontend Developer || JavaScript || HTML || CSS || Node.js || React || GitHub ||')
  .pauseFor(25)
  .deleteChars(25)
  .start();
