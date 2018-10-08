// @flow
import * as React from 'react';
import { textStyle, textDarkStyle } from '../theme';

type TextDarkProps = {|
  children: React.Node,
|};

class TextDark extends React.PureComponent<TextDarkProps> {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{textStyle}</style>
        <style jsx>{textDarkStyle}</style>
      </div>
    );
  }
}

export default TextDark;
