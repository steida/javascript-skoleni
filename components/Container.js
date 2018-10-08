// @flow
import * as React from 'react';
import { containerStyle } from '../theme';

type ContainerProps = {|
  children: React.Node,
|};

class Container extends React.PureComponent<ContainerProps> {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{containerStyle}</style>
      </div>
    );
  }
}

export default Container;
