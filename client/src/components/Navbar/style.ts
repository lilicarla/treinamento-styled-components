import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f2f3fc;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
  padding: 0 5vw;
  font-family: 'Barlow', sans-serif;
`;

export const NavLogo = styled.div`
  width: auto;
  height: 50%;
  cursor: pointer;

  img{
    width: auto;
    height: 100%;
  }
`;

export const NavLinks = styled.div`
  width: 40vw;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const LinkContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #f2f3fc;
  cursor: pointer;

  a{
    text-decoration: none;
    color: #292929;
    font-size: 1.2rem;
    font-weight: 500;
  }

  a:hover{
    color: #969dff;
  }
`;