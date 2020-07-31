import React, { useState } from 'react';

import { Container, Avatar, Infos, RadioButtonWraper } from './styles';
import RadioButton from '../RadioButton/index'

interface IItem {
    handleClickCard: (id:string) => void;
    isChecked: boolean;
    show:boolean;
    id:string;
    name: string;
    subject: string;
    owner: string;
    users: string[];
}

const Card: React.FC<IItem> = (props) => {
    const [radioButtonIsShow, setRadioButton] = useState(false)

    const handleClickCard = () => {
        props.handleClickCard(props.id)
    }

  return (
      <Container onMouseEnter={() => setRadioButton(true)} onMouseLeave={() => setRadioButton(false)}>
            {!radioButtonIsShow && !props.show ?
                <Avatar>
                    {props.owner}
                </Avatar>
                :
                <RadioButtonWraper>
                    <RadioButton onClick={handleClickCard} isChecked={props.isChecked}/>
                </RadioButtonWraper>
            }
            <Infos>
                <strong>{props.name}</strong>
                <span>
                    {props.subject} 
                    <span>
                        {props.users.map(el => (
                            <Avatar size="small">
                                {el}
                            </Avatar>
                        ))}
                    </span>
                </span>
            </Infos>
      </Container>
  );
}

export default Card;