import * as C from './style';

type Props = {
    text:string;
    color:string;
}

export const Title = ({text , color}:Props) => {
    return (
        <C.Title color={color}>{text}</C.Title>
    )
}