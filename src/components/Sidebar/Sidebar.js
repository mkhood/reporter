import React from 'react';
import styled from 'styled-components';
import logoPng from '../../layout/icons/react-logo.png';
// import jmeterPng from '../../layout/icons/jmeter_icon.png';

const StyledWrapper = styled.nav`
    background-color: ${({ theme }) => theme.colors.bluesidebar};    
    border-radius: 5px;
    color: ${({theme}) => theme.colors.white};
    padding: 12px;
    margin: 60px 0 0 10px;
    width: 80px;
    height: 70vh;    

  .sidebar_menu {
    padding: 0;
    margin: 0;
  }

  .sidebar_menu ul {
    padding: 0;
    margin: 0;
  }

  .sidebar_menu ul li {
    padding: 0;
    margin: 0;
  }

  .sidebar_menu ul li a {
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  .menuicon {
    marging: 0 0 0 12px
    padding: 0 0 0 0;
  }
`;

const StyledLogoLink = styled.nav`
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(${logoPng});
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
  border-radius: 100%;
  margin: 12px
`;

const StyledLogoTekst = styled.nav`
  display: block;  
  border: none;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const StyledLine = styled.nav`
  height: 0px;
  width: 100%;
  border-top: 1px solid ${({theme}) => theme.colors.gray};
`;

const HomeMark = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-size: 28px;
    font-weight: bold;
    marging: 0;
    padding: 0 0 0 15px;
`;
const CronMark = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-weight: normal;
    font-size: 26px;
    marging: 0;
    padding: 0 0 0 12px;
    width: 10px;
    hight: 10px;
`;
// const PerformanceLink = styled.div`
//   background-image: url(${jmeterPng});
//   background-repeat: no-repeat;
//   background-size: 100%;
//   display: block;
//   width: 20px;
//   height: 39px;
//   marging: 0 0 0 12px;
//   padding: 0 0 0 12px;
// `;


const Sidebar = () => (
    <StyledWrapper>
        <div>
          <StyledLogoLink to="/" />
          <StyledLogoTekst>Reporter</StyledLogoTekst>
          <StyledLine></StyledLine>
          <HomeMark><a href="/">&#8962;</a></HomeMark>
          <CronMark><a href="/cron">&#9716;</a></CronMark>
          {/* <PerformanceLink><a href="/performance"></a></PerformanceLink> */}
        </div>
    </StyledWrapper>
);

export default Sidebar;
