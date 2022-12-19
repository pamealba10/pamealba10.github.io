let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(3500)
  .typeString('Soy Programadora Web y lo aprendí en Tecnolochicas')
  .pauseFor(25)
  .deleteChars(25)
  .start();
