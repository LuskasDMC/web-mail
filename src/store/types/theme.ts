export enum ThemeTypes {
    DARK_THEME = "DARK_THEME",
    LIGHT_THEME = "LIGHT_THEME",
}
export interface IInitialValue {
    theme: string;
}

export interface IAction {
    readonly type:string;
}