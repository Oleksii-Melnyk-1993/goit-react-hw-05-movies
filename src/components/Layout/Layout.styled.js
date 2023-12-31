import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #e7eaf6;
  @media screen and (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 15px 10px 15px;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 25px;
  }
`;
export const Header = styled.header`
  margin: 0;
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  @media screen and (min-width: 768px) {
    border-radius: 8px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  background-color: #e7eaf6;
  text-decoration: none;
  padding: 5px 45px 5px 45px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
    background-color: #e8eced;
    text-decoration: none;
    /* border: 1px solid black; */
    padding: 5px 10px 5px 10px;
    border-radius: 50px;
    transition: transform 0.2s;
  }

  &.active {
    color: red;
    border: 2px solid #f38181;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
