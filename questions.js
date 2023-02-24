//p/recorrer y convertir cada uno de los objetos definidos en el array preguntas (preguntas.js) en un objeto Question (questionClase.js)

import { questionClase } from "/questionClase.js";
import { preguntas } from "/preguntas.js";


//recorro el array definido en preguntas.js llamado preguntas[] con la función map() y me retorna un nuevo array procesado.
export const questions = preguntas.map(
  (preguntas) =>
    new Question(preguntas.question, preguntas.choices, preguntas.answer)
);

//rever. 