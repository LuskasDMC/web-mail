import styled,{keyframes} from 'styled-components';

interface ILamp {
    on:boolean;
}

const Bounce = keyframes`
    0% {
        transform: rotate(15deg);
    }

    50% {
        transform: rotate(-15deg);
    }

    100% {
        transform: rotate(15deg);
    }
`

const FadeIn = keyframes`
    from {
        opacity:0;
    }

    to {
        opacity:1;
    }
`

export const Container = styled.div`
    height:100vh;
    width:100vw;
    overflow:hidden;
    background: var(--primary);
    display: flex;
    justify-content:center;
    align-items:center;
`;

export const Input = styled.input`
    border: 1px solid var(--black);
    background:inherit;
    outline:none;
    color: var(--principalText);
    border-radius:3px;
    padding:4px;
    font-size:1em;
    :focus {
        border: 1px solid var(--principalText);
    }

    ::placeholder {
        color: var(--gray);
        font-size: .9em;
    }
`

export const Button = styled.div`
    outline:none;
    background:var(--quaternary);
    color:var(--principalText);
    border: 1px solid var(--black);
    border-radius:5px;
    text-align: center;
    padding:5px;
    font-size:1em;
    cursor:pointer;
    position:relative;
    transition: height 1s;

    :hover {
        background:var(--tertiary);
    }

    :active {
        top:2px;
        background:var(--secondary);
    }
`

export const Form = styled.div`
    animation:${FadeIn} 2.7s;
    display:flex;
    flex-direction: column;
    border-radius: 0px 25px 0px 25px;
    padding: 50px;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.5);

    >  input {
        margin-bottom:10px;
    }
`

export const ErrorMessage = styled.span`
    text-align:center;
    color: var(--error);
    padding-top:10px;
    animation: ${FadeIn} 1s;
`

export const Lamp = styled.span<ILamp>`
    position:absolute;
    bottom: 20px;
    left:20px;

    i {
        animation: ${Bounce} infinite 2s;
        ${props => !props.on && "color:#FFD700;"}
        cursor:pointer;
        :hover {
            color: var(--gray);
        }
    }
`