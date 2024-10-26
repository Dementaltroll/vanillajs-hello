/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarExcusa() {
      let who = ['Mi tía', 'El Paul', 'La Tamara', 'El Jhonny'];
      let action = ['meo', 'destruyó', 'masticó', 'desapareció'];
      let what = ['mi celular', 'a mi mejor amiga', 'a tu hermana'];
      let when = ['en clases de pilates', 'en vivo por cadena nacional', 'cuando fumaba', 'mientras lloraba', 'el día que todo se fue a la shit'];

      let randomWho = who[Math.floor(Math.random() * who.length)];
      let randomAction = action[Math.floor(Math.random() * action.length)];
      let randomWhat = what[Math.floor(Math.random() * what.length)];
      let randomWhen = when[Math.floor(Math.random() * when.length)];

      return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  document.getElementById("excuse").innerHTML = generarExcusa();
};