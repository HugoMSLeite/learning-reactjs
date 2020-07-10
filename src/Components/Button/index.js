import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const { children, onClick } = props;

    useEffect(() => {

    }, [])

    return (
        <button onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;