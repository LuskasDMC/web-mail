import React,{useState, useRef, memo} from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Container, Modal, List } from './styles';
import { IReducers } from '../../store/reducers';

interface IProps {
    userName: string;
}

const CircularProfile: React.FC<IProps> = ({userName}) => {
    const [modalIsOpen, setModal] = useState(false)

    const {language} = useSelector((state:IReducers) => state)
    const modalRef = useRef<HTMLDivElement>(null)
    const history = useHistory()

    const handleClickProfile = () => {
        setModal(!modalIsOpen)
    }

    const handleLogout = () => {
        localStorage.setItem('auth',JSON.stringify({isLogged:false}))
        history.push('/')
    }

    return (
        <>
            <Container onClick={handleClickProfile}>
                {userName}
            </Container>
            
            <Modal open={modalIsOpen} ref={modalRef}>
                <List>
                    <li><i className="fas fa-user"/>{language.content.myData}</li>
                    <li><i className="fas fa-cog"/>{language.content.configurations}</li>
                    <li onClick={handleLogout}><i className="fas fa-sign-out-alt"/>{language.content.logout}</li>
                </List>
            </Modal>
        </>
    );
}

export default memo(CircularProfile);