import { Svg } from './Svg';

const InternalLink = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
        fill="none"
        stroke="#0f0f0f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        fill="none"
        stroke="#0f0f0f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="8"
        x2="16"
        y1="12"
        y2="12"
      />
    </Svg>
  );
};

export { InternalLink };
