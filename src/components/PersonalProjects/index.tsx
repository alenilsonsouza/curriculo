import { useEffect, useState } from 'react';
import * as C from './style';
import { Title } from '../Title';
import { PersonalProject } from '../../data/PersonalProject';
import { PersonalProjectType } from '../../types/PersonalProjectType';


export const PersonalProjects = () => {

    const [personalProjectList, setPersonalProjectList] = useState<PersonalProjectType[]>([]);

    useEffect(() =>{
        setPersonalProjectList(PersonalProject);
    }, []);

    return (
        <C.Container>
            <Title color='#000' text='Projetos Pessoais' />
            <C.Content>
                {personalProjectList.length > 0 &&
                    <>
                        {personalProjectList.map((item,index)=>(
                            <C.ProjectItem key={index}>
                                <C.ProjectItemImage src={item.photo} alt={item.name} />
                                <C.ProjectItemLegend>{item.name}</C.ProjectItemLegend>
                                {item.url &&
                                    <C.ProjectItemButton href={item.url} target='_blank'>
                                        Ver
                                    </C.ProjectItemButton>
                                }
                            </C.ProjectItem>
                        ))}
                    </>
                }
            </C.Content>
        </C.Container>
    )
}