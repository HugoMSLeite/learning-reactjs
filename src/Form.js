import React, { useContext, useEffect, memo, useRef } from 'react'
import { ThemeContext } from './Theme'
import Button from './Components/Button'
import Counter from './Counter'

//Validação para atualizar ou não o component
const areEqual = (prevProps, nextProps) => {
    console.log('areEqual')
    return prevProps.loading === nextProps.loading;
}

const Buttons = ({ incremente, decremente, count }) => (
    <div>
        <h1>Valor atual {count}</h1>
        <div>
            <Button onClick={incremente}>Adicionar 1</Button>
        </div>
        <div>
            <Button onClick={decremente}>Remover 1</Button>
        </div>
    </div>
)

function Form(props) {
    const context = useContext(ThemeContext);
    const { loading } = props;
    const inputRef = useRef();

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
    }, [])

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            {!context.token ? (<h1>Necessário realizar login</h1>) : (
                <>
                    Focu: <input ref={inputRef} />
                    <br />
                    <br />
                    <Button onClick={handleClick}>Focar input</Button>
                    <Counter render={({ incremente, decremente, count }) => (
                        <Buttons incremente={incremente} decremente={decremente} count={count}></Buttons>
                    )}></Counter>
                </>
            )}
        </div>
    )
}

//memo permite exporta o component com uma função pra validar as props
export default memo(Form, areEqual);