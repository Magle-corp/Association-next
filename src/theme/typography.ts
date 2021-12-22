const titleFontFamily = `font-family: FjallaOne, Arial, sans-serif;`;
const fontFamily = `font-family: Roboto, Arial, sans-serif;`;

const colors = {
  primary: '#00995a',
  secondary: '#b2e0cd',
  black: '#000000',
  white: '#ffffff',
  grey: '#bfbfbf',
};

const variant: object = {
  h1: `
    ${titleFontFamily}
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 900;
    text-decoration: none;
    `,
  h2: `
    ${titleFontFamily}
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 800;
    text-decoration: none;
`,
  h3: `
    ${titleFontFamily}
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    text-decoration: none;
`,
  h4: `
    ${titleFontFamily}
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 600;
    text-decoration: none;
`,
  p: `
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
`,
  button: `
    ${fontFamily}
    padding: 5px 7px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    text-decoration: none;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    border-radius: 3px;
    color: ${colors.white};
    cursor: pointer;
    transition: 250ms ease-in-out;
    
    &:hover {
      background-color: ${colors.white};
      color: ${colors.black};
    }
`,
  inline_link: `
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
`,
  tag: `
    ${fontFamily}
    display: block;
    max-width: max-content;
    padding: 5px 7px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
    border-radius: 3px;
    background-color: ${colors.white};
    border: 2px solid ${colors.primary};
  `,
  call_action: `
    ${fontFamily}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 7px 9px;
    text-decoration: none;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    border-radius: 3px;
    color: ${colors.white};
    cursor: pointer;
    transition: 250ms ease-in-out;
    
    &:hover {
      background-color: ${colors.white};
      color: ${colors.black};
    }
    
    span {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    }
  `,
};

export default variant;
