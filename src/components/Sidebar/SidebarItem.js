import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
    padding: 10px;
    margin: 0;
    width: 100px;
    background-color: ${({ theme }) => theme.colors.blue};

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

  .sidebar_menu ul li a{
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
  }
`;

const SidebarItem = ({ data }) => (
    <StyledWrapper>
        <div>
            <ul className="sidebar_menu">
                <a href={"http://localhost:3000/results/" + data.id} key={data.id}>{data.title}</a>
            </ul>
        </div>        
    </StyledWrapper>
);

export default SidebarItem;