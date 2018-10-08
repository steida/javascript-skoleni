// @flow
import * as React from 'react';
import { textStyle, h2Style } from '../theme';

type H2Props = {|
  children: React.Node,
  id?: string,
|};

class H2 extends React.PureComponent<H2Props> {
  render() {
    const { children, ...props } = this.props;
    return (
      <div {...props}>
        {children}
        <style jsx>{textStyle}</style>
        <style jsx>{h2Style}</style>
      </div>
    );
  }
}

export default H2;
