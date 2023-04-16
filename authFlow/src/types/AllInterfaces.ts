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
    route : string;
    text : string
    path : string
    call : boolean
    route1 : string;
    text1 : string
    path1 : string


    tex?: boolean;
    reg?: boolean;
    textTitle?: string;
    message?: string;
    remake?: string;

    email?: string;
    password?: string;
    userName?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;


  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
} 
export interface Iinput{
    title1 : string;
    title2? : string;
    title3? : string;
    sign : boolean;
    reset : boolean;

    email?: string;
    password?: string;
    userName?: string;
  
    onChange?: React.ChangeEventHandler<HTMLInputElement>;

    setEmail?: React.Dispatch<React.SetStateAction<string>>;
    setPassword?: React.Dispatch<React.SetStateAction<string>>;
    setUserName?: React.Dispatch<React.SetStateAction<string>>;
} 

export interface iGlobal {
    email?: string;
    password?: string;
    userName?: string;
    setUserName?: React.Dispatch<React.SetStateAction<string>>;
    setPassword?: React.Dispatch<React.SetStateAction<string>>;
    setEmail?: React.Dispatch<React.SetStateAction<string>>;
  }

  export interface iText {
    textTitle?: string;
    message?: string;
    remake?: string;
  }
  