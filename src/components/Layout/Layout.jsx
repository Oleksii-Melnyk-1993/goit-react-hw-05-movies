import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
