export interface buttonProps{
    buttonTitle : string;
    bg:string;
    col : string
    onClick :()=> void;
}

export interface ICard {
    title : string;
    buttonTitle : string
    onClick :()=> void;
    title1 : string;
    title2? : string;
    title3? : string;
    sign : boolean;
    reset : boolean;
} 
export interface Iinput{
    title1 : string;
    title2? : string;
    title3? : string;
    sign : boolean;
    reset : boolean;
} 