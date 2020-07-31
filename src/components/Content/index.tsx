import React,{useState} from 'react';

import { 
    Container, 
    Input, 
    Header,
    Divider,
    Options
} from './styles';
import { useSelector } from 'react-redux'
import RadioButton from '../RadioButton/index'
import Button from '../Button/index'
import Card from '../Card/index'
import { IReducers } from '../../store/reducers';

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

interface IProps {
  handleArchiveMessages: (ids:string[]) => void
  messages:IMessages;
}

const Content: React.FC<IProps> = ({messages, handleArchiveMessages}) => {
  const [cardsSelected, setCardsSelected] = useState<Array<string>>([])
  const {language} = useSelector((state:IReducers) => state)

  const handleClickCard = (id:string) => {
    if(cardsSelected.some(el => el === id)){
        const newCardsSelected = cardsSelected.filter(el => el !== id)
        setCardsSelected(newCardsSelected)
    }else{
      setCardsSelected([...cardsSelected,id])
    }
  }

  const handleSelectAllCards = (allIsChecked:boolean) => {
    if(!allIsChecked){
      setCardsSelected(messages.subMenuItems?.map(el => el.id))
    }else {
      setCardsSelected([])
    }
  }
    

  return (
    <Container >
        <Header>
          <Input placeholder={language.content.search}/>
          <Divider/>
          <Options>
            <span>
              <RadioButton 
                onClick={() =>handleSelectAllCards(cardsSelected.length === messages.subMenuItems?.length)} 
                isChecked={cardsSelected.length === messages.subMenuItems?.length}
              /> 
              <Button onClick={()=>{}}>{language.content.assign}</Button>
              <Button onClick={()=>handleArchiveMessages(cardsSelected)}>{language.content.archive}</Button>
              <Button onClick={()=>{}}>{language.content.schedule}</Button>
            </span>
            <i className="fas fa-filter fa-lg"/>
          </Options>
        </Header>
        {messages.subMenuItems?.map((el) => (
            <Card 
              {...el} 
              handleClickCard={handleClickCard} 
              isChecked={cardsSelected.some(id => id === el.id)}
              show={cardsSelected.length !== 0}
            />
        ))}
    </Container>
  );
}

export default Content;