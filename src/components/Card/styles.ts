import styled from 'styled-components';

interface IAvatar {
    size?: string;
}

export const Container = styled.div`
    display:flex;
    padding: 10px 10px;
    flex-flow: row nowrap;
    align-items:center;
    border-bottom: 1px solid var(--contrary);
    cursor:pointer;
    
`;

export const Avatar = styled.div<IAvatar>`
    padding: 0px 10px;
    border-radius: 50px;
    border: 1px solid var(--contrary);
    color: var(--principalText);
    width: ${props => props.size === 'small' ? "35px" : "50px"};
    height:${props => props.size === 'small' ? "35px" : "50px"};
    font-size:${props => props.size === 'small' ? ".8em" : "1.5em"};
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`

export const Infos = styled.div`
    display:flex;
    flex-direction: column;
    flex:1;
    padding-left:20px;
    color: var(--principalText);

    strong {
        font-size:1.3em;
    }

    span {
        font-size:1.1em;
        display:flex;
        align-items:center;
        justify-content: space-between;
    }

    ${Avatar}{
        margin-left:2px;
    }
`

export const RadioButtonWraper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:45px;
    height:45px;
    padding: 0px 10px;

`
