import { FunctionComponent } from 'react';
import Container from '../containers/container';

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <header className="display-title">Awesome Gallery</header>
    </Container>
  );
};

export default Header;
