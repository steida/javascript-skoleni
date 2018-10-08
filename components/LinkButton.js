// @flow
import * as React from 'react';
import { textStyle, linkButtonStyle } from '../theme';

type LinkButtonProps = {|
  children: React.Node,
  href: string,
|};

class LinkButton extends React.PureComponent<LinkButtonProps> {
  render() {
    return (
      <React.Fragment>
        <a href={this.props.href}>{this.props.children}</a>
        <style jsx>{textStyle}</style>
        <style jsx>{linkButtonStyle}</style>
      </React.Fragment>
    );
  }
}

export default LinkButton;
