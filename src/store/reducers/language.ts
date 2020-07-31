import { Reducer } from 'redux'
import {IInitialValue, ActionTypes, IActions} from '../types/language'

import PT_BR from '../../lang/PT_BR.json'
import EN_US from '../../lang/EN_US.json'

const handleContent = (lang?:string) : any => {
    if(!lang){
        const previousLanguage = localStorage.getItem('language')
        
        if(ActionTypes.PT_BR === previousLanguage) return PT_BR
        if(ActionTypes.EN_US === previousLanguage) return EN_US
    }

    if(lang === ActionTypes.PT_BR) return PT_BR
    if(lang === ActionTypes.EN_US) return EN_US

    return PT_BR
}


const INITIAL_VALUE: IInitialValue = {
    language: localStorage.getItem('language') || ActionTypes.PT_BR,
    content: handleContent()
}


const reducer:Reducer = (initial_value: IInitialValue = INITIAL_VALUE, action:IActions) : IInitialValue => {
    switch (action.type) {
        case ActionTypes.PT_BR:
            return {language:ActionTypes.PT_BR,content:handleContent(ActionTypes.PT_BR)} 
        case ActionTypes.EN_US:
            return {language:ActionTypes.EN_US,content:handleContent(ActionTypes.EN_US)} 
        default:
            return {...initial_value}
    }

}

export default reducer