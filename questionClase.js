//---------creo la clase y las propiedades que tendrá.

//--------------------------------------------creo la clase (el MODELO/MOLDE) de un objeto.
class Question {
//----------------------------------------------------------------------------------constructor
    constructor(text, choices, answer) {      
    this.text = text;   
    this.choices = choices;                        //Estas son las propiedades
    this.answer = answer;  
  }
/*---------------------------------------------------------------------método (es una función dentro del objeto)*/
  correctAnswer(choice) {
    return choice === this.answer;  //me devuelve si la rta. es true o false.
  }
}



export { Question }; //exporto la clase Question

