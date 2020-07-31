import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    background: var(--primary);
    height:40px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--principalText);
    cursor: pointer;
    padding: 0 10px;

    :hover {
        color:var(--contrary);
        background: var(--tertiary);
    }
`;

