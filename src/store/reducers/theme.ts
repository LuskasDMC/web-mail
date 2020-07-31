import { Reducer } from 'redux'
import { 
    IAction,
    IInitialValue,
    ThemeTypes
} from '../types/theme'


const handleGetTheme = (theme?:string) => {
    if(!theme){
        const previousTheme = localStorage.getItem('theme')
        console.log(previousTheme)
        
        if(ThemeTypes.DARK_THEME === previousTheme) return ThemeTypes.DARK_THEME
        if(ThemeTypes.LIGHT_THEME === previousTheme) return ThemeTypes.LIGHT_THEME
    }

    if(theme === ThemeTypes.DARK_THEME) return ThemeTypes.DARK_THEME
    if(theme === ThemeTypes.LIGHT_THEME) return ThemeTypes.LIGHT_THEME
    return ThemeTypes.DARK_THEME
}

const INITIAL_VALUE:IInitialValue = {
    theme: handleGetTheme()
}

const reducer:Reducer = (initial_value = INITIAL_VALUE, action:IAction):IInitialValue => {
    switch (action.type) {
        case ThemeTypes.DARK_THEME:
            return {theme:ThemeTypes.DARK_THEME}
        case ThemeTypes.LIGHT_THEME:
            return {theme:ThemeTypes.LIGHT_THEME}
        default:
            return {...initial_value}
    }
}

export default reducer