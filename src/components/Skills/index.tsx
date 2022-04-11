import { useEffect, useState } from 'react';

import * as C from './style';
import { SkillsItems } from '../../data/SkillsItems';
import { SkillType } from '../../types/SkillType';
import { GridItem } from '../GridItem';
import { Title } from '../Title';

export const Skills = () => {

    const [skill, setSkill] = useState<SkillType[]>([]);

    useEffect(() => {
        setSkill(SkillsItems);
    },[skill])

    return (
        <C.Container>
            <Title text='SKILLS' color='#fff' />
            <C.Grid>
                {skill.length > 0 &&
                    skill.map((item, index) => (
                        <GridItem 
                            key={index}
                            item={item} 
                        />
                    ))
                }
            </C.Grid>
        </C.Container>
    )
}