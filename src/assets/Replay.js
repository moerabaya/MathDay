import * as React from "react";

function Replay(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 140 144" {...props}>
      <path
        d="M128.5 82.513L88.53 93.22c-6.73 1.81-8.99 10.22-4.06 15.15l4.32 4.32c-3.85 1.9-8.22 3.44-13.22 4.07-9.49 1.19-17.28-1.18-21.07-2.71-2.64-1.07-11.83-5.31-19.05-15.23-2.44-3.34-8.16-12.513-8.86-25.592-.63-11.98 3.28-20.955 4.99-24.253 2.18-4.217 7.31-14.086 18.89-19.171 9.62-4.213 18.7-3.001 23.26-1.891 12.32 2.975 19.49 11.466 22 14.98 4.23 5.918 12.43 7.279 18.35 3.057 5.91-4.223 7.28-12.433 3.05-18.345-4.22-5.913-16.3-20.21-37.22-25.259-7.78-1.886-23.3-3.951-40 3.369-20.1 8.821-28.82 25.624-31.683 31.157C4.872 43.345-.614 56.856.326 74.62 1.395 94.73 10.38 109.08 14.19 114.3c11.02 15.15 24.99 21.94 30.5 24.15 5 2.01 14.25 4.93 25.77 4.93 2.69 0 5.49-.16 8.39-.52 11.8-1.49 21.54-5.87 29.21-10.9l5.67 5.66c4.93 4.93 13.34 2.68 15.14-4.05l10.71-39.97c1.8-6.73-4.35-12.887-11.08-11.087"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

const MemoReplay = React.memo(Replay);
export default MemoReplay;
