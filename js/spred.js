const arrays1=[1,2,3];
const arrays2= [4,5,6];

const arraysResultante=[...arrays1, ...arrays2];
const arraysResultante2=[...arrays1, "Separación" ,...arrays2];

alert("El arreglo concatenado es igual a: " + arraysResultante);
alert("El arreglo con la separacion es igual a: " + arraysResultante2);
window.close();