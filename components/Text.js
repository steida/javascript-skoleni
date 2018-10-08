// @flow
import * as React from 'react';
import { textStyle } from '../theme';

type TextProps = {|
  children: React.Node,
|};

class Text extends React.PureComponent<TextProps> {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{textStyle}</style>
      </div>
    );
  }
}

export default Text;
