import styled from 'styled-components';

export const CardStyles = styled.div`
    width: ${props => props.width};
    background-color: ${props => props.backgroundColor};
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    height: ${props => props.height || '100%'};
    min-height: 50px;
    box-shadow: 0 5px 10px;
`;