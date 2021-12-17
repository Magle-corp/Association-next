import { Svg } from './Svg';

const Circle = ({ ...props }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    >
      <circle cx="12" cy="12" r="10" />
    </Svg>
  );
};

export { Circle };
