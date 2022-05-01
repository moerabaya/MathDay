import * as React from "react";

function CoinSad(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <style>
        {
          ".prefix__st2,.prefix__st5{fill:none;stroke:#000;stroke-width:3}.prefix__st5{fill:#fff}.prefix__st7{fill:#13c3b8}"
        }
      </style>
      <g id="prefix__racoon shell">
        <circle
          id="prefix__bg"
          cx={50}
          cy={50}
          r={48.5}
          fill="#408bfb"
          stroke="#000"
          strokeWidth={3}
        />
        <g id="prefix__base">
          <g id="prefix__ears">
            <path
              className="prefix__st7"
              d="M23.6 23.6l7.5-3.5-2.4-3.5-4.1 1-1 6"
            />
            <path
              className="prefix__st2"
              d="M19.1 26c-4-5.8-2.8-13.5 3.5-13.1 5 .3 8.5 5 9.7 6.4 0 0-5.2-5.2-8.7-1.7-2 2 0 6 0 6"
            />
            <g>
              <path
                className="prefix__st7"
                d="M76.5 23.6L69 20.1l2.4-3.5 4.1 1 1 6"
              />
              <path
                className="prefix__st2"
                d="M81 26c4-5.8 2.8-13.5-3.5-13.1-5 .3-8.5 5-9.7 6.4 0 0 5.2-5.2 8.7-1.7 2 2 0 6 0 6"
              />
            </g>
          </g>
          <path
            id="prefix__mask_00000177460046117238587460000013790332254814550405_"
            d="M50.1 48.6c-5.9.1-13.3 2.2-23.1 8.2-1.6 1-3.5 1.4-5.3 1.2-1.9-.2-3.6-1-4.9-2.3l-.1-.1c-1-.9-1.7-2.1-2.3-3.3C5.3 31.4 35 21.6 50.1 21.7c15 0 44.8 9.8 35.7 30.7-.5 1.2-1.3 2.4-2.2 3.3l-.1.1c-1.3 1.3-3.1 2.1-4.9 2.3-1.9.2-3.7-.2-5.3-1.2-10-6-17.4-8.2-23.2-8.3"
            fill="#13c3b8"
            stroke="#000"
            strokeWidth={3}
          />
        </g>
        <g id="prefix__frown">
          <g id="prefix__mouth">
            <path d="M58.2 55.8l1-1.8c1-1.7.9-3.7-.2-5.3-.9-1.3-2.5-2.1-4.1-2.1h-9.6c-1.6 0-3.2.8-4.1 2.1-1.1 1.6-1.2 3.6-.2 5.3l1 1.8c1.5 2.6 4.2 4.1 7.1 4.1h2c2.9 0 5.6-1.6 7.1-4.1z" />
            <path
              className="prefix__st2"
              d="M50.1 56.4v9.2c0 3.2-1.3 6.3-3.6 8.6M50.1 56.4v9.2c0 3.2 1.3 6.3 3.6 8.6"
            />
          </g>
          <g id="prefix__eyes">
            <path
              className="prefix__st5"
              d="M41.2 40.1c0 3.9-3.2 7.1-7.1 7.1-3.7 0-6.8-2.8-7.1-6.5 0-.4.2-.7.6-.9 1.4-.5 4.9-1.9 7.2-3.8 1.3-1.1 3.4-1.8 4.5-.5.9 1.3 1.9 2.9 1.9 4.6z"
            />
            <path d="M37.6 40.1c0 2-1.6 3.6-3.6 3.6s-3.6-1.6-3.6-3.6l4.9-3.1c1 0 2.3 1.2 2.3 3.1z" />
            <path
              className="prefix__st5"
              d="M59 40.1c0 3.9 3.2 7.1 7.1 7.1 3.7 0 6.8-2.8 7.1-6.5 0-.4-.2-.7-.6-.9-1.4-.5-4.9-1.9-7.2-3.8-1.3-1.1-3.4-1.8-4.5-.5-1 1.3-1.9 2.9-1.9 4.6z"
            />
            <path d="M62.5 40.1c0 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6l-5-3.1c-.8 0-2.2 1.2-2.2 3.1z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

// const MemoCoinSad = React.memo(CoinSad);
export default CoinSad;
