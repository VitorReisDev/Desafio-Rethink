// Exercicio
// exibindo formulario
function Entrar() {
  console.log({
    Nome: nomeid.value,
    Idade: idadeid.value,
    Profissão: profid.value,
    Email: emailid.value,
    Telefone: teleid.value,
    DatadePreenchimento: dataid.value,
  });

  // Exercicio 2
  // Manipulando dados
  const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernanda Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
  ];

  // Exercicio 3
  // Retornando dados de uma pessoa
  function buscarPessoa(nome) {
    let pessoaEncontrada = pessoas.filter((pessoa) => pessoa.name === nome)[0];
    return pessoaEncontrada ? pessoaEncontrada : "Usuario Invalido";
  }
  let busca = buscarPessoa(nomeid.value);
  console.log(busca);

  // Exercicio 4
  // Retornando um vetor com o nome das pessoas
  var mNomes = [];
  function mostrarNomes() {
    return pessoas.map((pessoa) => pessoa.name);
  }
  let apenasNomes = mostrarNomes();
  console.log(apenasNomes);

  // Exercicio 5
  // Passando um id unico para cada pessoa
  let pessoasComIds = [];
  function PassarId(pessoasComIds) {
    for (let i = 0; i < pessoas.length; i++) {
      let pessoaComId = {
        id: i + 1,
        ...pessoas[i],
      };
      pessoasComIds.push(pessoaComId);
    }
    return pessoasComIds;
  }

  console.log(PassarId(pessoasComIds));

  // Exercicio 6
  // Verificando as pessoas com idade suficiente para tirar a primeira habilitação
  function Maior18() {
    return pessoas.filter((pessoa) => pessoa.age > 18);
  }
  let pessoasDeMaior = Maior18();
  console.log(pessoasDeMaior);

  let soma;
  let media;

  // Exercicio 7
  //Tirando a media das idades
  function mediaIdades() {
    return (
      pessoas.map((item) => item.age).reduce((prev, curr) => prev + curr, 0) /
      pessoas.length
    );
  }
  let mediaDasIdades = mediaIdades();
  console.log(mediaDasIdades);
}
