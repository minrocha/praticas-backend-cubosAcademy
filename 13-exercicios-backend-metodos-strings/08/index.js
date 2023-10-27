const cpf = '011.022.033-44';
const cnpj = '12.345.678/0001-99';
const removerPontuacaoCpfOuCnpj = numeroDocumento => console.log(numeroDocumento.replaceAll('-', '').replaceAll('.', '').replaceAll('/', ''));
removerPontuacaoCpfOuCnpj(cpf);
removerPontuacaoCpfOuCnpj(cnpj);
