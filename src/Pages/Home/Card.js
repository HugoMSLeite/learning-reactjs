import React, { useContext } from 'react'
import { ThemeContext } from '../../Theme'
import { CardStyles } from './styles'
import PropTypes from 'prop-types'

function Card(props) {
    const theme = useContext(ThemeContext)

    return (
        <CardStyles backgroundColor={theme.backgroundColor} width={'30%'}>
            <h2>{props.titulo}</h2>
            <h4>{props.descricao}</h4>
            {props.children}
        </CardStyles>
    )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Card;