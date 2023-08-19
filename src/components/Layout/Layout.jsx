import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container, Header, Navigation, StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 5,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
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
