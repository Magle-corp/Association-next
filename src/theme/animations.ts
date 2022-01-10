import { keyframes } from 'styled-components';

const animations: object = {
  fadeIn: keyframes`
      from {
        opacity: 0;
      to {
        opacity: 100%;
      }
    `,
  appearTop: keyframes`
    from {
      transform: translateY(-10px);
      opacity: 0;
      to {
        transform: translateY(0px);
        opacity: 100%;
      }
  `,
};

export default animations;
