// @flow
import * as React from 'react';
import { textStyle, h1Style } from '../theme';

type H1Props = {|
  children: React.Node,
|};

class H1 extends React.PureComponent<H1Props> {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{textStyle}</style>
        <style jsx>{h1Style}</style>
      </div>
    );
  }
}

export default H1;
