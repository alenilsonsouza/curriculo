
import * as C from './style';
import { SocialType } from "../../types/SocialType";

type Props = {
    item: SocialType;
}

export const SocialGridItem = ({ item }: Props) => {
    return (
        <C.Container>
            <C.Link href={item.url} target="_blank">
                <C.Img src={item.img} alt={item.name} />
            </C.Link>
        </C.Container>
    )
}