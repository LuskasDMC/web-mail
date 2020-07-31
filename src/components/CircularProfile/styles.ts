import styled from 'styled-components';

interface IModal {
    open: boolean;
}

export const Container = styled.div`
    background: var(--primary);
    color: var(--principalText);
    border-radius:50px;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:1.3em;
    width:52px;
    height:52px;
    position:relative;
    cursor:pointer;
    border: 2px solid black;

    :hover {
        background: var(--tertiary);
    }

    ::after {
        content:"";
        width:15px;
        height:15px;
        border-radius: 50px;
        background-color:#00cc00;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`

export const Modal = styled.div<IModal>`
    padding: 10px 0;
    border: 1px solid var(--gray);
    background:var(--white);
    border-radius:10px;
    position:absolute;
    top:75px;
    z-index:100;
    overflow: hidden;
    ${props => props.open ? "opacity:1;" : "opacity:0;"}
    ${props => props.open ? "visibility:visible;" : "visibility:hidden;"}

    transition: opacity .5s;
`

export const List = styled.ul`
    list-style:none;
    font-size:.9em;
    > li {
        cursor: pointer;
        padding: 5px 10px;

        :hover {
            background-color:var(--lightGray);
        }

        i {
            margin-right: 5px;
        }
    }
`
