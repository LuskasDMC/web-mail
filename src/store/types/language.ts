export enum ActionTypes {
    PT_BR = 'PT_BR',
    EN_US = 'EN_US',
}

export interface IInitialValue {
    language: string;
    content: any;
}

export interface IActions {
    readonly type: string;
}   