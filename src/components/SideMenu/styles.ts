import styled, {keyframes} from 'styled-components';

interface ICollapseList {
    open: boolean;
    qtySubMenu:number;
}

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

export const Container = styled.div`
    flex:1;
    height: 100vh;
    background: var(--quaternary);
    padding: 15px;
    display:flex;
    flex-direction:column;
    border: 1px solid black;
    position:relative;
    overflow: auto;
`;

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding-bottom: 10px;

    i > {
        margin-right:10px;
    }
`

export const Divider = styled.div`
    height:2px;
    background: var(--gray);
    margin: 10px 0;
`

export const Favorites = styled.div`
    display:flex;
    justify-content:space-between;
    color: var(--principalText);
    cursor:pointer;
    padding: 10px 10px;
    border-radius:5px;
    :hover {
        background: var(--tertiary);
    }

    > i {
        margin-right: 10px;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
`

export const List = styled.ul`
    font-size: 1.2em;
    list-style:none;
    cursor:pointer;
    color: var(--principalText);
    ul {
        list-style: none;
    }

    li{
        div {
            display:flex;
            justify-content:space-between;
        }
        border-radius: 5px;
        padding: 5px 10px;
        i {
            margin-right: 7px;
        }

        :hover {
            /* background: var(--tertiary); */
        }
    }

    li ul li {
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 13px 10px 13px 30px;
        white-space: nowrap; 
        height: 20px;
        z-index:120;
        :hover {
            background: var(--tertiary);
        }
    }
`

export const CollapseList = styled.ul<ICollapseList>`
    overflow:hidden;
    list-style:none;
    transition: height .8s;
    ${props => props.open ? `height:calc(25px * ${props.qtySubMenu});` : "height:0px;"}
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

export const SelectLanguage = styled.span`
    display:flex;
    position:absolute;
    bottom: 25px;
    right: 20px;

    img {
        width: 20px;
        height:15px;
        cursor:pointer;
        margin-left:10px;
        :hover {
            border: 1px solid var(--contrary);
        }
    }
`
