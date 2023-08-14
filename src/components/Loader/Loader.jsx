import PropTypes from 'prop-types';
import { ContainerLoader } from './Loader.styled';

export const Loader = ({ children }) => {
  return <ContainerLoader>{children}</ContainerLoader>;
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
