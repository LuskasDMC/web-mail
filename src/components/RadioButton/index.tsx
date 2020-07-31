import React from 'react';
import 'pretty-checkbox';
import { Container } from './styles';

interface IProps {
  onClick?: () => any;
  isChecked?: boolean;
}

const RadioButton: React.FC<IProps> = ({onClick = () => {},isChecked = false}) => {

    const handleClick = () => {
      onClick()
    }

  return (
    <Container className="pretty p-icon p-round p-smooth">
        <input type="checkbox" checked={isChecked} onClick={handleClick}/>
        <div className="state p-success">
          {isChecked && <i className="fas fa-check fa-xs" onClick={handleClick}></i>}
            <label onClick={handleClick}></label>
        </div>
    </Container>
  );
}

export default RadioButton;