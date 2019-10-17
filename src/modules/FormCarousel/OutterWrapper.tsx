import styled from 'styled-components';

export const OutterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  min-height: 100vh;
  padding:  0 25px;
    
  > div {
    overflow: hidden;
    width: 100%;
  }
`;

export default OutterWrapper;