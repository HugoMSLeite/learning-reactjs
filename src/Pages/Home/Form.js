import React from 'react'
import Button from '../../Components/Button'
import Counter from './Counter'

const Buttons = ({ incremente, decremente, count }) => (
    <div>
        <h1>Valor atual {count}</h1>
        <div>
            <Button onClick={incremente}>Adicionar 1</Button>
            <Button onClick={decremente}>Remover 1</Button>
        </div>
    </div>
)

function Form(props) {
    return (
        <Counter render={({ incremente, decremente, count }) => (
            <Buttons incremente={incremente} decremente={decremente} count={count}></Buttons>
        )}></Counter>
    )
}

export default Form;