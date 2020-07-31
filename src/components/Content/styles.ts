import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    background:var(--secondary);
`;

export const Input = styled.input`
    outline:none;
    background: inherit;
    height:30px;
    border-radius:4px;
    width:100%;
    padding-left:10px;
    border:1px solid var(--black);
    color:var(--principalText);
    ::placeholder {
        color: var(--gray);
    }
`

export const Header = styled.div`
    padding:7px 7px;
`

export const Divider = styled.div`
    height:2px;
    margin: 10px 0;
    background: var(--gray);
`

export const Options = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items:center;

    span {
        div:nth-child(1) {
            margin-right: 15px !important;
            margin-left:-3px;
        } 

        display:flex;
        align-items:center;
        > div {
            margin-right: 10px;
        }
    }

    i {
        color: var(--contrary);
        cursor:pointer;
    }
`