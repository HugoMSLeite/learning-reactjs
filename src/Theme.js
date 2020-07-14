import {
    createContext
} from 'react'

export const themes = {
    primary: {
        backgroundColor: '#fff',
        color: '#000'
    },
    secondery: {
        background: '#efefef',
        color: '#000'
    }
}

export const ThemeContext = createContext(themes.primary)