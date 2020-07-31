import React from 'react';

import { 
    Container
} from './styles';

interface IProps {
    onClick: () => void;
}

const Button: React.FC<IProps> = ({children, onClick}) => {
    return (
        <>
            <Container onClick={onClick}>
                {children}
            </Container>
        </>
    );
}

export default Button;