import React, {useState} from 'react';

import { Container } from './styles';
import SideMenu from '../../components/SideMenu/index'
import Content from '../../components/Content/index'

interface IItem {
    id:string;
    name: string;
    subject: string;
    owner: string;
    users: string[];
}
  
interface IMessages {
    id: number;
    subMenuItems: IItem[];
}

const Home: React.FC = () => {
    const [messages,setMessages] = useState<IMessages>({} as IMessages)

    const handleFetchMessage = async(id:number) => {
        const response = await fetch(`http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items/${id}`)
        const result = await response.json()
        setMessages(result)
    }

    const handleArchiveMessages = (ids:string[]) => {
        const newMessages = messages.subMenuItems.filter(el => {
            if(ids.some(id => id === el.id)) return false
            else return true
        })

        setMessages({...messages, subMenuItems:newMessages})
    }

    return (
        <Container>
            <SideMenu handleFetchMessage={handleFetchMessage}/>
            <Content messages={messages} handleArchiveMessages={handleArchiveMessages}/>
        </Container>
    );
}

export default Home;