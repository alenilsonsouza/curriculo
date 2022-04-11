import * as C from './style';
import { Title } from '../Title';

export const AboutMe = () => {
    return (
        <C.Container>
            <Title text='Sobre Mim' color='#000' />
            <C.Text>
            Gosto de desafios e conquistas. É uma grande satisfação ver o resultado da aplicação em produção.
            </C.Text>
            
        </C.Container>
    )
}