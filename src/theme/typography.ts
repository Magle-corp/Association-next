const titleFontFamily = `font-family: FjallaOne, Arial, sans-serif;`;
const fontFamily = `font-family: Roboto, Arial, sans-serif;`;

const colors = {
  primary: '#00995a',
  secondary: '#b2e0cd',
  black: '#222222',
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
    color: ${colors.black};
    `,
  h2: `
    ${titleFontFamily}
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 800;
    text-decoration: none;
    color: ${colors.black};
`,
  h3: `
    ${titleFontFamily}
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    text-decoration: none;
    color: ${colors.black};
`,
  h4: `
    ${titleFontFamily}
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.black};
`,
  p: `
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: none;
    color: ${colors.black};
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
    color: ${colors.black};
    border-radius: 3px;
    background-color: ${colors.white};
    border: 2px solid ${colors.primary};
  `,
  button_action: `
    ${fontFamily}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: max-content;
    padding: 5px 7px;
    margin: 7px 7px 0 0;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    border-radius: 3px;
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 700;
    text-align: center;
    text-decoration: none;
    color: ${colors.white};
    cursor: pointer;
    transition: 250ms ease-in-out;
    
    &:hover {
      background-color: ${colors.white};
      color: ${colors.black};
    
      span {
        color: ${colors.black};
      }
    }
    
    span {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 700;
      color: ${colors.white};
      transition: 250ms ease-in-out;
    }
  `,
  link_action: `
    ${fontFamily}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: max-content;
    padding: 5px 7px;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    color: ${colors.white};
    cursor: pointer;
    transition: 250ms ease-in-out;
    
    &:hover {
      background-color: ${colors.white};
      color: ${colors.black};
    
      span {
        color: ${colors.black};
      }
    }
    
    span {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 700;
      color: ${colors.white};
      transition: 250ms ease-in-out;
    }
  `,
};

export default variant;
