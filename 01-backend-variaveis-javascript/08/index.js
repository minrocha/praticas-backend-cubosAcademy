let raioCirculo = 1;
let comprimentoCirculo;
let areaCirculo;

comprimentoCirculo = 2 * Math.PI * raioCirculo;
areaCirculo = Math.PI * Math.pow(raioCirculo, 2);

console.log(
  `Para um círculo com R = ${raioCirculo}, os valores de C e A são respectivamente ${comprimentoCirculo.toFixed(
    1
  )} e ${areaCirculo.toFixed(2)}.`
);
