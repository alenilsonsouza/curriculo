import * as C from './style';
import { SocialItems } from "../../data/SocialItems";
import { SocialGridItem } from '../SocialGridItem';
import { Title } from '../Title';

export const Social = () => {
    return (
        <C.Container>
            <Title color='#FFF' text='Redes Sociais' />
            <C.Grid>
                {SocialItems.map((item, index) => (
                    <SocialGridItem key={index} item={item} />
                ))}
            </C.Grid>
        </C.Container>
    )
}