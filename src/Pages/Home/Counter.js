import React, { useState, useEffect } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
    }, [])

    function incremente() {
        setCount(count + 1)
    }

    function decremente() {
        setCount(count - 1)
    }

    const { render } = props

    return (
        <>{render({
            incremente: incremente,
            decremente: decremente,
            count: count
        })}</>
    )
}

export default Counter;