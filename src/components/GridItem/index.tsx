import { SkillType } from "../../types/SkillType";
import * as C from './style';

type Props = {
    item: SkillType
}

export const GridItem = ({ item }:Props) => {
    return (
        <C.Container>
            <C.Icon src={item.image} alt='' />
            <C.Legend>{item.name}</C.Legend>
        </C.Container>
    )
}