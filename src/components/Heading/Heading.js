import styled, { css } from 'styled-components';

const Heading = styled.h1`
  padding: 0;
  margin: 0 0 0 20px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-family: ${({theme}) => theme.fontfamily.poppins}, sans-serif;
  font-weight: ${({theme}) => theme.fontsize.ultrathin};
  line-height: 1;
  font-size: 17px;

  ${({h2}) => 
    h2 && css`
        padding: 10px 0 20px 0;
        font-size: 14px;
        font-weight: ${({theme}) => theme.fontsize.ultrathin};
        color: ${({theme}) => theme.colors.gray};
    `
  }
`;

export default Heading;
