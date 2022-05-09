import "./styles.css";
let num1: number = Number(prompt(" ingrese numero"));
let num2: number = Number(prompt(" ingrese segundo numero"));

let resultado: number = 0;

for (let i = num1; i <= num2; i++) {
  resultado += i;
}
console.log("El resultado es: ", resultado);
