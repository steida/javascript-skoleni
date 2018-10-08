// @flow
import * as React from 'react';
import { textStyle, linkStyle } from '../theme';

type LinkProps = {|
  children: React.Node,
  href: string,
|};

class Link extends React.PureComponent<LinkProps> {
  render() {
    return (
      <React.Fragment>
        <a href={this.props.href}>{this.props.children}</a>
        <style jsx>{textStyle}</style>
        <style jsx>{linkStyle}</style>
      </React.Fragment>
    );
  }
}

export default Link;
