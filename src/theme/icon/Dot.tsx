import { Svg } from './Svg';

const Dot = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <circle cx="8" cy="8" r="8" />
    </Svg>
  );
};

export { Dot };
