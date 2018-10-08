// @flow
import css from 'styled-jsx/css';

// All styles at one place, so we can spot constants easily.

const fontSize = 16;
const lineHeightRatio = 1.5;
const lineHeight = fontSize * lineHeightRatio;
const colors = {
  primary: '#0089eb',
  white: '#ffffff',
};

// This does not work in _app. Probably Next.js or styled-jsx bug.
// Therefore, we export constant.
// export const appStyle = css`
//   body {
//     background-color: #f7f7f7;
//   }
// `;
export const bodyBackgroundColor = '#f7f7f7';

export const containerStyle = css`
  max-width: 992px;
  margin: auto;
  padding: ${fontSize}px;
`;

export const textStyle = css`
  div {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    color: #333;
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  }
  div div {
    display: inline;
  }
`;

export const textDarkStyle = css`
  div {
    color: #fff;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const h1Style = css`
  div {
    font-size: ${fontSize * 2}px;
    line-height: ${fontSize * 2 * lineHeightRatio}px;
    font-weight: bold;
    color: #444;
    margin-top: ${fontSize * lineHeightRatio * 3}px;
    margin-bottom: ${fontSize * lineHeightRatio * 1}px;
  }
`;

export const h2Style = css`
  div {
    font-size: ${fontSize * 1.5}px;
    line-height: ${fontSize * 1.5 * lineHeightRatio}px;
    font-weight: bold;
    color: #444;
    margin-top: ${fontSize * lineHeightRatio * 2}px;
    margin-bottom: ${fontSize * lineHeightRatio * 1}px;
  }
`;

export const h3Style = css`
  div {
    font-size: ${fontSize * 1}px;
    line-height: ${fontSize * 1 * lineHeightRatio}px;
    font-weight: bold;
    color: #444;
    margin-top: ${fontSize * lineHeightRatio * 2}px;
    margin-bottom: ${fontSize * lineHeightRatio * 1}px;
  }
`;

export const paragraphStyle = css`
  div {
    max-width: 42em;
    margin-bottom: ${lineHeight}px;
  }
`;

export const headerStyle = css`
  div {
    background-color: ${colors.primary};
    display: flex;
    flex-direction: row;
  }
`;

export const headerItemStyle = css`
  div {
    margin: ${fontSize}px;
  }
`;

export const linkStyle = css`
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const linkButtonStyle = css`
  a {
    color: ${colors.white};
    background-color: ${colors.primary};
    padding-top: ${lineHeight / 4}px;
    padding-bottom: ${lineHeight / 4}px;
    padding-left: ${lineHeight / 2}px;
    padding-right: ${lineHeight / 2}px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 14px;
  }
`;
