// @flow
import * as React from 'react';
import { textStyle, h3Style } from '../theme';

type H3Props = {|
  children: React.Node,
  id?: string,
|};

class H2 extends React.PureComponent<H3Props> {
  render() {
    const { children, ...props } = this.props;
    return (
      <div {...props}>
        {children}
        <style jsx>{textStyle}</style>
        <style jsx>{h3Style}</style>
      </div>
    );
  }
}

export default H2;
