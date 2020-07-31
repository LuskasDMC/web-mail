import styled from 'styled-components';

export const Container = styled.div`
    margin-right:0;
    label {
        position:relative;
        cursor:pointer;
        :before, :after {
            top: 0 !important;
        }
    }

    input {
        display:none;
    }

    i {
        color: var(--white);
        position:absolute;
        z-index:100;
        top:3px;
        left:3px;
        cursor:pointer;
    }
`;
