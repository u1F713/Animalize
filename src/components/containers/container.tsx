import { FunctionComponent } from 'react';

const Container: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
};

export default Container;
