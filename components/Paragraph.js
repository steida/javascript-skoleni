// @flow
import * as React from 'react';
import { textStyle, paragraphStyle } from '../theme';

type ParagraphProps = {|
  children: React.Node,
|};

class Paragraph extends React.PureComponent<ParagraphProps> {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{textStyle}</style>
        <style jsx>{paragraphStyle}</style>
      </div>
    );
  }
}

export default Paragraph;
