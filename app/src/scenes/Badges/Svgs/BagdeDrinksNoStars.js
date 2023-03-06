import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components';

export const BagdeDrinksNoStars = () => {
  return (
    <Svg className="w-16 h-16 m-auto" viewBox="0 0 60 60">
      <Path // large yellow bg
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.5516 1.0624C27.6359 1.40704 26.8423 1.95439 25.133 3.47482C23.3017 5.0966 22.8744 5.19796 20.1477 4.67088C18.9268 4.42762 17.5634 4.24516 17.0954 4.24516C14.8774 4.26544 13.1275 6.0494 12.2728 9.15107C11.642 11.5635 10.8891 12.273 8.12175 13.165C6.10726 13.8137 5.35436 14.2394 4.52008 15.1517C3.48231 16.2869 3.25848 17.5033 3.66544 19.6927C4.41834 23.7877 4.37764 23.9702 2.3021 26.2812C-0.668773 29.5856 -0.750166 31.7547 1.97652 34.7753C4.2759 37.3094 4.43868 37.7959 3.82823 40.5732C3.31952 42.9045 3.38057 44.5669 4.01137 45.6413C4.66252 46.7766 5.65959 47.4253 7.83687 48.1956C10.1769 49.0268 10.2583 49.0673 10.2583 49.2701L12.1507 52.0879L12.7002 53.4664C13.0054 54.2368 13.4937 55.1896 13.799 55.595C14.9385 57.0749 16.9937 57.5209 19.7204 56.8519C21.511 56.4262 23.0372 56.4667 23.8511 56.9533C24.2377 57.1763 24.5022 57.4601 24.4615 57.5615L27.1272 59.6698C28.4702 60.8861 31.5225 60.8861 32.8654 59.6698L35.5311 57.5615C35.4904 57.4601 35.7549 57.1763 36.1415 56.9533C36.9555 
        56.4667 38.4816 56.4262 40.2723 56.8519C44.0367 57.7642 46.1326 56.7303 47.3332 53.3853C47.5774 52.6758 47.8012 52.1285 47.8419 52.1487L49.7343 49.2701C49.7916 49.0876 49.8157 49.0268 52.1558 48.1956C54.3331 47.4253 55.3301 46.7766 55.9813 45.6413C56.6121 44.5669 56.6731 42.9045 56.1644 40.5732C55.554 37.7959 55.7167 37.3094 58.0161 34.7753C60.7428 31.7345 60.6818 29.6059 57.6905 26.2812C56.9987 25.5311 56.3069 24.6392 56.1441 24.3148C55.7981 23.6458 55.7574 22.5511 56.0423 21.3753C56.8156 18.1925 56.6528 16.4694 55.4726 15.1517C54.6383 14.2394 53.8854 13.8137 51.8709 13.165C49.0221 12.2325 48.371 11.6243 47.6995 9.11053C46.8652 5.98859 45.0745 4.24516 42.6937 4.24516C42.3275 4.24516 41.0659 4.42762 39.845 4.67088C37.0979 5.21824 36.7113 5.11688 34.6765 3.31264C33.8422 2.58284 32.7637 1.75166 32.2957 1.46785C31.2579 0.85968 29.5894 0.677231 28.5516 1.0624ZM32.6213 5.3196C31.787 4.58979 30.912 3.92081 30.6475 3.81945C30.3829 3.71808 30.0574 3.63699 29.9353 3.63699C29.5283 3.63699 28.3277 4.44789 27.1068 5.56287C25.2755 7.20493 24.1156 7.75228 22.386 7.77255C21.5924 7.77255 20.107 7.61037 19.1099 7.40765C16.2204 6.79948 16.0576 6.92112 14.8978 10.3269C13.7786 13.6515 12.6391 14.726 8.91534 15.8815C7.26712 16.4086 6.51423 16.8951 6.31074 17.5844C6.22935 17.8074 6.37179 
        18.9223 6.59562 20.0779C6.81945 21.2334 7.00259 22.6322 7.00259 23.1998C7.00259 24.5986 6.14795 26.3218 4.60147 28.0044C2.9329 29.8491 2.62767 30.4573 2.95325 31.2682C3.09569 31.5926 3.84858 32.6062 4.62182 33.5184C7.10433 36.3768 7.38921 37.5526 6.57527 41.4449C5.96482 44.425 6.1683 44.729 9.54614 45.7832C12.8222 46.8374 13.8397 47.9118 15.0606 51.6419C15.3454 52.4731 15.7524 53.4259 15.9762 53.7502C16.3425 54.2368 16.5257 54.3179 17.3396 54.3179C17.8687 54.2976 18.8861 54.176 19.6186 54.0138C20.3512 53.8516 21.5721 53.73 22.325 53.7097C24.0749 53.7097 25.1534 54.2165 27.3917 56.1627C29.8539 58.271 30.0981 58.271 32.6416 56.1221C35.0224 54.1354 35.9177 53.7097 37.7694 53.7097C38.5834 53.73 39.8043 53.8516 40.4758 54.0138C41.1473 54.176 42.124 54.3179 42.653 54.3179C43.8129 54.3179 44.1995 53.8922 44.9321 51.6419C46.153 47.9118 47.1704 46.8374 50.4465 45.7832C52.4406 45.1548 53.3767 44.648 53.6005 44.0803C53.7836 43.5938 53.6616 42.418 53.2139 40.5327C53.0918 40.0259 52.9901 39.0731 52.9901 38.4041C52.9901 36.8026 53.5802 35.5457 55.2691 33.6198C57.0801 31.552 57.3446 31.0047 56.9783 30.133C56.8359 29.7478 56.1237 28.8153 55.4319 28.0449C53.8447 26.3218 52.9901 24.5986 52.9901 23.1998C52.9901 22.6322 53.1732 21.2334 53.397 20.0779C53.6209 18.9223 53.7633 17.8074 53.6819 17.5844C53.4784 16.8951 52.7459 16.4288 51.0773 15.8815C47.2721 14.6449 46.214 13.6515 45.0949 10.3269C43.935 6.92112 43.7722 6.79948 40.8827 7.40765C39.8857 7.61037 38.4002 7.77255 37.6066 7.77255C35.8363 7.75228 34.7985 7.24547 32.6213 5.3196Z"
        fill="#FBD361"
      />

      <Path // calendar
        d="M21.625 41.9549C21.0063 41.9549 20.4764 41.7399 20.0354 41.3099C19.5951 40.8791 19.375 40.3616 19.375 39.7572V24.3738C19.375 23.7694 19.5951 23.2523 20.0354 22.8223C20.4764 22.3915 21.0063 22.1761 21.625 22.1761H22.75V21.0499C22.75 20.7385 22.8576 20.4821 23.0729 20.2807C23.2889 20.0792 23.5563 19.9785 23.875 19.9785C24.1937 19.9785 24.4611 20.0836 24.6771 20.2939C24.8924 20.5048 25 20.766 25 21.0773V22.1761H34V21.0499C34 20.7385 34.108 20.4821 34.324 20.2807C34.5393 20.0792 34.8062 19.9785 35.125 19.9785C35.4438 19.9785 35.7108 20.0836 35.926 20.2939C36.142 20.5048 36.25 20.766 36.25 21.0773V22.1761H37.375C37.9937 22.1761 38.5236 22.3915 38.9646 22.8223C39.4049 23.2523 39.625 23.7694 39.625 24.3738V39.7572C39.625 40.3616 39.4049 40.8791 38.9646 41.3099C38.5236 41.7399 37.9937 41.9549 37.375 41.9549H21.625ZM21.625 39.7572H37.375V28.7691H21.625V39.7572ZM21.625 26.5714H37.375V24.3738H21.625V26.5714Z"
        fill="#4030A5"
      />
    </Svg>
  );
};
