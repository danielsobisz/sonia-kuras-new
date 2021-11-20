import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1;
  font-size: 1.8rem;
  font-family: 'Raleway', sans-serif;
}

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

  li {
    list-style: none;
  }

a {
  text-decoration: none;
  color: black;

}

a, p, li, span {
  color: ${(props) => props.theme.black};
}

blockquote {
  &:before, &:after {
    content: '';
    content: none; } }

q {
  &:before, &:after {
    content: '';
    content: none; } }

table {
  border-collapse: collapse;
  border-spacing: 0; }

`;

export default GlobalStyle;