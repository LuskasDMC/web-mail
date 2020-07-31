import React from 'react'
import { createGlobalStyle } from 'styled-components'
import {useSelector} from 'react-redux'
import { darken, lighten} from 'polished'
import { IReducers } from '../store/reducers/index'
import {ThemeTypes} from '../store/types/theme'


interface IProps {
    theme?: string;
}

const DARK_THEME = `
    --primary: #333;
    --secondary: #333;
    --tertiary: ${lighten(0.1,'#333')};
    --quaternary: ${darken(0.1,'#333')};
    --principalText: #fff;
    --gray: #8a8c90;
    --lightGray: #DCDCDC;
    --error: #f84a4b;
    --white:#ffff;
    --black:#000;
    --contrary:#ffff;
`

const LIGHT_THEME = `
    --primary: #fff;
    --secondary: #fff;
    --tertiary:  ${darken(0.1,'#fff')};
    --quaternary: #fff;
    --principalText: #000;
    --gray: #8a8c90;
    --lightGray: #DCDCDC;
    --error: #f84a4b;
    --white:#ffff;
    --black:#000;
    --contrary:#000;
`

const GlobalStyle =  createGlobalStyle<IProps>`
    * {
        margin:0;
        padding:0;
        font-family: Roboto, sans-serif;
        box-sizing: border-box;
    }

    :root {
        ${props => props.theme ===  ThemeTypes.DARK_THEME ? DARK_THEME : LIGHT_THEME}
    }
`

export default () => {
    const store = useSelector((state:IReducers) => state)
    console.log(store.theme.theme)
    return (
        <>
            <GlobalStyle theme={store.theme.theme}/>
        </>
    )
}