// @flow
import * as React from 'react';
import TextDark from '../components/TextDark';
import { headerStyle, headerItemStyle } from '../theme';
import Link from '../components/Link';

const Item = ({ children }) => (
  <div>
    {children}
    <style jsx>{headerItemStyle}</style>
  </div>
);

class Header extends React.PureComponent<{}> {
  render() {
    return (
      <div>
        <Item>
          <Link href="#public">
            <TextDark>Veřejné kurzy</TextDark>
          </Link>
        </Item>
        <Item>
          <Link href="#inhouse">
            <TextDark>Pro firmy</TextDark>
          </Link>
        </Item>
        <Item>
          <Link href="#contact">
            <TextDark>Kontakt</TextDark>
          </Link>
        </Item>
        <Item>
          <Link href="#references">
            <TextDark>Reference</TextDark>
          </Link>
        </Item>
        <style jsx>{headerStyle}</style>
      </div>
    );
  }
}

export default Header;
