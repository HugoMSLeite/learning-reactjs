import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './Theme'
import Form from './Form'

function Card() {
    const theme = useContext(ThemeContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [])

    return (
        <div style={{ padding: '50px' }}>
            <Form loading={loading} />
            <button style={{ backgroundColor: theme.background, color: theme.color }}>Card button</button>
        </div>
    )
}

export default Card;