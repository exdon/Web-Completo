// a const NomeContext serve para transportar um componente para outro, sem ter que passar pelos filhos. 
// ex. passar do 1 pro 4. sem ter que passar pelo 2 e 3.
// Isso tbm cria um componente.
const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  //const meuNome = 'Ayrton Teixeira';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, " ", /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncrementar: props.onClickIncrementar
  }), " "), " ");
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), " ", /*#__PURE__*/React.createElement("footer", null)), /*#__PURE__*/React.createElement(MeuComponente3, null));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState("21 99999-9999");
  setTimeout(function () {
    setTelefone("11 99999-8888");
  }, 1500); // depois de 1,5 seg., muda otelefone (estado atual) para 11 99999-8888 , ao invez de 21 99999-9999.

  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar
  }), " "); //faz com o que um componente seja pai do outro
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28); // useState usado para mudar o estado atual do elemento. Nesse caso idade. (28) é setado em idade, dentro do destructuring [ ], o setIdade é usado logo abaixo para mudar o estado (o valor 28).
  //const [telefone, setTelefone] = React.useState("21 99999-9999") 

  setTimeout(function () {
    setIdade(29); //setTelefone("11 99999-8888")
  }, 1000); // depois de 1 seg., muda a idade (estado atual) para 29, ao invez de 28. 

  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 ", " ", idade, " - ", props.telefone), " ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar")); //   return ( // Consumer -  quem consome a informação{ value: nome}
  //        <NomeContext.Consumer> {/* isso é o mesmo que React.createElement(NomeContext.Consumer) */}
  //            {(nomeContext) => (
  //                <div className="componentes-4">
  //                    <p>{nomeContext}</p> 
  //                </div>
  //            )}  {/* para conseguir usar uma função js, ela precisa estar entre chaves */}
  //        </NomeContext.Consumer>
  //    ) // retorna esse conteúdo após um chamar o outro componente. //faz com o que um componente seja pai do outro
}

function MeuComponente(props) {
  // componente principal, que chama os outros.
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador, " ");
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(0);

  const clickIncrementa = function () {
    incrementaContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, "  ", /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: clickIncrementa
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), // é o mesmo que React.createElement(AppComponente)  
document.querySelector('#app')); // informo qual componente que quero injetar e onde quero injetar.
//React.createElement - serve para criar os componentes do React
// ele recebe 3 parametros. 1º o componente, 2º propriedades que quero passar pro componente, 3º são os filhos do componente.
