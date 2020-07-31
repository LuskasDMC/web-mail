import { combineReducers } from 'redux'

import {IInitialValue as languageTypes} from '../types/language'
import {IInitialValue as themeTypes} from '../types/theme'
import language from './language'
import theme from './theme'

export interface IReducers {
    language: languageTypes;
    theme: themeTypes;
}

export default combineReducers({
    language,
    theme
})