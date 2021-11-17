const titleFontFamily = `font-family: FjallaOne, Arial, sans-serif;`;
const fontFamily = `font-family: Roboto, Arial, sans-serif;`;

const grey = '#bfbfbf';

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
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 3px;
    cursor: pointer;
`,
  inline_link: `
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
`,
  decorate_link: `
    ${fontFamily}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-decoration: underline;
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
    background-color: ${grey};
    text-decoration: underline;
  `,
};

export default variant;
