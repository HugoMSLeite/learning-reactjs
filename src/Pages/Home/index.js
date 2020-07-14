import React, { useContext, useRef, useEffect, memo, useState } from 'react';
import Card from './Card';
import Form from './Form';
import Navbar from '../../Components/Navbar'
import { ThemeContext } from '../../Theme'

//Validação para atualizar ou não o component
const areEqual = (prevProps, nextProps) => {
    console.log('areEqual')
    return prevProps.loading === nextProps.loading;
}

function TesteError(props) {
    useEffect(() => {

    }, [])
    //Essa linha força o erro
    let forceError = props.error.error
    return <h1>Sistema rodando</h1>
}

function Home(props) {
    const { loading } = props;
    const context = useContext(ThemeContext);
    const inputRef = useRef();
    const [exibirErro, setExibirErro] = useState(false);

    //Todos os ciclos passam por ele
    //Recebe function como argumento, e um array
    //Parametros pra falar quando atualizar
    //[] igual a componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
    }, [])

    // [loading] igual a componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate')
    }, [loading])

    //componentWillUnmount
    //a diferença é que retorna uma função
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount')
        }
    }, []);

    const descricaoCard1 = `Nesse exemplo vemos um simples exemplo de como passar propriedades
        utilizando o Context API. Nesse caso foi utilizado a variável token, onde dentro desse Card
        o texto indica se tem token ou não.
        Ao carregar a página não tem token, o mesmo é inserido após 5 seg. `;

    const descricaoCard2 = `Nesse exeplo vemos como utilizar o render props. Nesse caso, temos 
    o componente Counter, que tem a função de incremento, decremento e o contador. Os botões ficam
    em outro componente chamado Buttons, esse componente tem apenas o laytou, e recebe por parametro
    as funções do componente Counter. Resumindo, a funcionalidade fica no Counter, e quem chama as
    funções é o Button. 
    Analisar código para mais detalhes.`;

    const descricaoCard3 = `Nesse exemplo vemos como usar o inputRef. Uma forma simples de mostrar foi
    usar o focus(), quando clicar no botão, o focu vai para o input.`;

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            {exibirErro && (<TesteError></TesteError>)}
            <Navbar></Navbar>
            <h2>Analisando o código do projeto, podemos ver o uso de hooks, useEffecr e o ciclo de
            vida do component, como usar memo, styled-components, ErrorBoundary, dentre outras coisas.
            </h2>
            <button type='button' onClick={() => { setExibirErro(true) }}>Forçar erro</button>
            <div style={{ display: 'flex', padding: '15px' }}>
                <Card titulo={'Validação de token utilizando Context'} descricao={descricaoCard1}>
                    {context.token ? 'Token inserido com sucesso!' : 'Token não validado'}
                </Card>
                <Card titulo={'Exemplo de uso de render props'} descricao={descricaoCard2}>
                    <Form />
                </Card>
                <Card titulo={'Usando inputRef'} descricao={descricaoCard3}>
                    Focu: <input ref={inputRef} />
                    <br />
                    <br />
                    <button type='button' onClick={handleClick}>Focar input</button>
                </Card>
            </div>
        </>
    )
}

//memo permite exporta o component com uma função pra validar as props
export default memo(Home, areEqual);