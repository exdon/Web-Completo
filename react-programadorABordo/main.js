// a const NomeContext serve para transportar um componente para outro, sem ter que passar pelos filhos. 
// ex. passar do 1 pro 4. sem ter que passar pelo 2 e 3.
// Isso tbm cria um componente.
        const NomeContext = React.createContext('nome');

        function MeuComponente1(props) {
            //const meuNome = 'Ayrton Teixeira';
            return (
                <div className="componente-1">
                    <MeuComponente2 > 
                        {/* <MeuComponente4 nome={meuNome} />*/} {/* Recebe o componente 4 como filho, sendo passado como props.children no componente 4*/}
                        <MeuComponente3 onClickIncrementar={props.onClickIncrementar} /> {/* Recebe o componente 3 como filho */}
                    </MeuComponente2> {/* componente 1 chama o componente 2 */}
                </div>
            )
        }

        function MeuComponente2(props) {
            return (
                <div className="componente-2"> {/* componente 2 chama o componente 3 */}
                    <div>
                        <header>{props.children}</header> {/* o que está no componente 4 */}
                        <footer></footer>
                    </div>
                    <MeuComponente3 />
                </div>
            )
        }

        function MeuComponente3(props) {
            const [telefone, setTelefone] = React.useState("21 99999-9999") 
            setTimeout(function() {
                setTelefone("11 99999-8888")
            }, 1500) // depois de 1,5 seg., muda otelefone (estado atual) para 11 99999-8888 , ao invez de 21 99999-9999.
            return (
                <div className="component-3">
                    <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar} /> {/* passa o estado de telefone como props para ser usado no componente4 */}{/* componente 3 chama o componente 4 */} 
                </div>
            ) //faz com o que um componente seja pai do outro
        }

        function MeuComponente4(props) {
            const [idade, setIdade] = React.useState(28); // useState usado para mudar o estado atual do elemento. Nesse caso idade. (28) é setado em idade, dentro do destructuring [ ], o setIdade é usado logo abaixo para mudar o estado (o valor 28).
            //const [telefone, setTelefone] = React.useState("21 99999-9999") 

            setTimeout(function () {
                setIdade(29)
                //setTelefone("11 99999-8888")
            }, 1000) // depois de 1 seg., muda a idade (estado atual) para 29, ao invez de 28. 

            return (
                <div className="componentes-4">
                    <p>Componente 4 {/*props.nome*/} {idade} - {props.telefone}</p> {/* aqui recebe a const meuNome definido lá no componente 1 */}{/* idade e telefone recebidos na const destructuring [ ] */}
                    <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>  
                </div>
            )
         //   return ( // Consumer -  quem consome a informação{ value: nome}
        //        <NomeContext.Consumer> {/* isso é o mesmo que React.createElement(NomeContext.Consumer) */}
        //            {(nomeContext) => (
        //                <div className="componentes-4">
        //                    <p>{nomeContext}</p> 
        //                </div>
        //            )}  {/* para conseguir usar uma função js, ela precisa estar entre chaves */}
        //        </NomeContext.Consumer>
        //    ) // retorna esse conteúdo após um chamar o outro componente. //faz com o que um componente seja pai do outro
        }

        function MeuComponente (props) { // componente principal, que chama os outros.
            return (
                <div id="componentes">
                    <MeuComponente1 onClickIncrementar={props.onClickIncrementar} />
                </div>  
            )
        }

        function MeuComponenteIrmao (props) {
            return (
                <div id="componente-irmao">
                    <MeuComponenteIrmao2 contador={props.contador} />
                </div>
            )
        }

        function MeuComponenteIrmao2 (props) {
            React.useEffect(function() {
                localStorage.setItem('contador', props.contador)
            })

            return (
                <h2>Contador: { props.contador } </h2>
            )
        }

        function AppComponente () {
            const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0); // se existir um valor no contador, ele retorna o contador, caso contrário ele retorna 0.

            const clickIncrementa = function () {
                incrementaContador(contador + 1)
            }

            return (
                <React.Fragment>  {/* usado para chamar mais de um componente sem ter que usar um elemento pai, por exemplo uma div, o que pode quebrar a página */}
                    <MeuComponente onClickIncrementar={clickIncrementa} />
                    <MeuComponenteIrmao contador={contador} />
                </React.Fragment>
            )
        }

        ReactDOM.render(
            <AppComponente />, // é o mesmo que React.createElement(AppComponente)  
            document.querySelector('#app')
        ) // informo qual componente que quero injetar e onde quero injetar.

//React.createElement - serve para criar os componentes do React
// ele recebe 3 parametros. 1º o componente, 2º propriedades que quero passar pro componente, 3º são os filhos do componente.