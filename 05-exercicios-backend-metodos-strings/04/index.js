const usuario = {
  identificador: '123',
  nome: 'José silva costa',
  email: '      jose@email.com  ',
  formataIdentificador() {
    this.identificador = this.identificador.padStart(6, '0');
    console.log(this.identificador);
  },
  formataNome() {
    let arrayNome = this.nome.split(' ');
    for (let indice in arrayNome) {
      arrayNome[indice] =
        arrayNome[indice][0].toUpperCase() + arrayNome[indice].substr(1);
    }
    this.nome = arrayNome.join(' ');
    console.log(this.nome);
  },
  formataEmail() {
    this.email = this.email.trim();
    console.log(this.email);
  },
};

usuario.formataIdentificador();
usuario.formataNome();
usuario.formataEmail();
