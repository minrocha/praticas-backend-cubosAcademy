let min = 5;
let km = 5;

function solucao(min, km) {
  //seu codigo aqui
  let precoPorTempo = 0;
  let precoPorKm = 0;
  let precoTotal = 0;

  min > 20
    ? (precoPorTempo += 20 * 0.5 + (min - 20) * 0.3)
    : (precoPorTempo += min * 0.5);
  km > 10
    ? (precoPorKm += 10 * 0.7 + (km - 10) * 0.5)
    : (precoPorKm += km * 0.7);
  precoTotal = (precoPorTempo + precoPorKm) * 100;
  console.log(precoTotal);
}

solucao(min, km);

// function processData(input) {
//   const x = input.split(" ");
//   const min = parseFloat(x[0], 10);
//   const km = parseFloat(x[1], 10);
//   solucao(min, km);
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//   _input += input;
// });

// process.stdin.on("end", function () {
//  processData(_input);
// });
