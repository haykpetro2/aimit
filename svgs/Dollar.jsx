import React from 'react';

const Dollar = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1813_749)">
        <circle cx="24" cy="20" r="20" fill="white" />
      </g>
      <path
        d="M22.5839 7.64619C18.3771 8.06687 14.404 9.9833 14.2171 14.564C14.0301 19.7524 18.3304 21.2482 22.5839 22.2765V28.0258C20.4805 27.0909 20.4338 24.6604 20.4338 24.6604L13.2822 25.5017C13.8431 30.5031 18.1434 32.3728 22.5839 32.6533V34.5697H24.0797V5.82324H22.5839V7.64619ZM22.5839 16.0598C22.4437 16.013 22.3035 15.9196 22.1632 15.8728C20.2936 14.938 20.574 12.9748 22.5839 12.2737V16.0598Z"
        fill="url(#paint0_linear_1813_749)"
      />
      <path
        d="M33.4743 20.3601C31.3242 18.4904 28.4262 17.649 25.9956 16.9946V12.3672C27.4446 13.0683 27.7718 14.5173 27.7718 14.5173L34.6896 13.3487C33.895 10.1703 30.5296 8.02013 25.9956 7.64619V5.82324H24.7803V34.523H25.9956V32.5598C28.4729 32.3261 30.6231 31.6717 31.7916 30.9706C35.4842 28.7737 36.98 23.4451 33.4743 20.3601ZM25.9956 28.2128V23.2113C27.6783 23.819 28.2859 24.3799 28.5664 25.3147C28.8936 26.4833 28.0522 27.7921 25.9956 28.2128Z"
        fill="url(#paint1_linear_1813_749)"
      />
      <defs>
        <filter
          id="filter0_d_1813_749"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.12549 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1813_749" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1813_749"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1813_749"
          x1="18.681"
          y1="5.82324"
          x2="18.681"
          y2="34.5697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F8EFE" />
          <stop offset="1" stopColor="#06A5FF" stopOpacity="0.74" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1813_749"
          x1="30.1203"
          y1="5.82324"
          x2="30.1203"
          y2="34.523"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F8EFE" />
          <stop offset="1" stopColor="#06A5FF" stopOpacity="0.74" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Dollar;
