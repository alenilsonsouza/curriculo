
import * as C from './style';
import { PersonalInfo } from "../../data/PersonalInfo";
import whatsapp from '../../assets/whatsapp_top.png';

import { CalcAge } from '../../helpers/CalcAge';

export const Profile = () => {
    return (
        <C.Container>
            <C.Content>
                <C.ContentLeft>
                    <C.Photo src={PersonalInfo.photo} alt="" />
                </C.ContentLeft>
                <C.ContentRight>
                    <C.Name><C.Bold>{PersonalInfo.name}</C.Bold></C.Name>
                    <C.Tech>{PersonalInfo.tech}</C.Tech>
                    <C.Description>
                        <C.Bold>Idade:</C.Bold> <CalcAge day={15} month={4} year={1985} /> anos<br />
                        <C.Bold>E-mail:</C.Bold> {PersonalInfo.email}<br />
                        <C.Bold>Celular:</C.Bold> {PersonalInfo.tel}
                    </C.Description>

                </C.ContentRight>
                <C.WhatsappArea>
                    <C.WhatsappLink href="https://api.whatsapp.com/send?phone=5527998125006" target="_blank">
                        <C.WhatsappImg src={whatsapp} alt="" />
                    </C.WhatsappLink>
                </C.WhatsappArea>
                
            </C.Content>
        </C.Container>
    )
}