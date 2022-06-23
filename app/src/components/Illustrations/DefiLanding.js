import React from 'react';
import Svg, { Line, Circle, Path } from 'react-native-svg';
import styled from 'styled-components';

const StyledSvg = styled(Svg)`
  margin-top: -30px;
`;

const DefiLanding = ({ color, size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 179 108" {...props}>
    <Path
      d="M28.5526 31.1722L28.2079 30.9346C27.8292 30.6735 27.3108 30.7689 27.0499 31.1474C26.789 31.526 26.8842 32.0444 27.2628 32.3054L27.6076 32.5431C27.8196 32.6892 28.0752 32.7236 28.3051 32.6592C28.4859 32.6086 28.6507 32.4968 28.7655 32.3302C29.0265 31.9517 28.9313 31.4332 28.5526 31.1722Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M29.6839 29.4421C29.2322 29.5256 28.9326 29.9593 29.0156 30.4115L29.0914 30.8232C29.1745 31.2753 29.6085 31.5746 30.0607 31.4914C30.0861 31.4867 30.1112 31.4809 30.1356 31.4741C30.5454 31.3594 30.8074 30.9488 30.7289 30.5221L30.6532 30.1103C30.57 29.6581 30.1361 29.3589 29.6839 29.4421Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M27.4732 33.1704L27.0614 33.2462C26.6082 33.3285 26.3099 33.7634 26.3931 34.2154C26.4763 34.6676 26.9102 34.9669 27.3624 34.8837L27.7742 34.808C27.7997 34.8033 27.8247 34.7974 27.8492 34.7907C28.2589 34.6759 28.5209 34.2653 28.4425 33.8387C28.3593 33.3865 27.9254 33.0872 27.4732 33.1704Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M39.266 11.358C38.9008 11.1015 38.4403 11.004 38.0024 11.0904L24.6842 13.7198C24.7027 11.5168 24.2172 9.39629 24.0011 8.56755C23.8404 7.95116 23.2459 7.56948 22.6186 7.67965C21.3749 7.89803 17.3319 8.75052 15.0499 10.885C12.0456 9.55824 7.93543 9.81727 6.63306 9.94376C6.03788 10.0011 5.59015 10.497 5.59345 11.0958C5.60157 12.5652 5.80333 17.5759 8.05776 20.3615C9.63013 22.3045 11.4073 23.3574 13.34 23.4913C13.819 23.5244 14.2756 23.4974 14.7056 23.4302L24.2754 62.7642C24.4841 63.6218 25.3258 64.1597 26.1918 63.9887L45.6225 60.1526C46.4884 59.9816 47.0626 59.1641 46.9296 58.2916L39.9465 12.4559C39.8793 12.0147 39.6313 11.6145 39.266 11.358ZM22.7337 10.5608C23.0544 12.3607 23.1633 14.3544 22.7662 15.8807C22.7634 15.8917 22.7606 15.9027 22.7577 15.9136C22.7444 15.9636 22.7302 16.013 22.7157 16.062C22.7073 16.0905 22.6986 16.1187 22.6899 16.1468C22.678 16.1849 22.666 16.2227 22.6534 16.2602C22.6397 16.3007 22.6253 16.3404 22.6109 16.3798C22.6012 16.4063 22.5918 16.4332 22.5817 16.4594C22.556 16.526 22.5295 16.5914 22.5017 16.6547C22.459 16.7516 22.4152 16.8456 22.3708 16.9383C22.3595 16.9619 22.3481 16.9854 22.3368 17.0088C22.2927 17.099 22.2481 17.1878 22.2024 17.274C22.201 17.2767 22.1996 17.2793 22.1981 17.2819C22.1524 17.3678 22.1056 17.451 22.0584 17.533C22.0455 17.5551 22.0327 17.5771 22.0198 17.5989C21.9729 17.6783 21.9256 17.7563 21.8772 17.8318C21.8743 17.8364 21.8715 17.8409 21.8685 17.8454C21.8199 17.9208 21.7702 17.9938 21.7201 18.0653C21.7059 18.0857 21.6915 18.1058 21.6772 18.1258C21.6276 18.1949 21.5774 18.2627 21.5263 18.3281C21.5219 18.3337 21.5174 18.3395 21.5131 18.3451C21.4616 18.4106 21.4091 18.4734 21.356 18.5351C21.3402 18.5534 21.3245 18.5715 21.3087 18.5895C21.2563 18.6489 21.2033 18.707 21.1494 18.7629C21.1438 18.7687 21.1381 18.7746 21.1325 18.7804C21.0778 18.8364 21.0222 18.89 20.9661 18.9425C20.9491 18.9583 20.932 18.974 20.915 18.9895C20.8593 19.0398 20.8033 19.089 20.7463 19.1358C20.7399 19.141 20.7337 19.1462 20.7275 19.1512C20.6693 19.1985 20.6102 19.2434 20.5504 19.287C20.5325 19.3 20.5145 19.3129 20.4965 19.3258C20.437 19.3678 20.3771 19.4085 20.3162 19.4469C20.3105 19.4505 20.3048 19.4542 20.299 19.4577C20.2366 19.4967 20.1731 19.5332 20.1092 19.5683C20.0906 19.5785 20.072 19.5885 20.0533 19.5984C19.9895 19.6322 19.9253 19.6645 19.8601 19.6946C19.8555 19.6966 19.8511 19.6989 19.8465 19.7009C19.7794 19.7315 19.7111 19.7594 19.6425 19.786C19.6236 19.7933 19.6045 19.8005 19.5855 19.8075C19.5172 19.8328 19.4483 19.8567 19.3786 19.8781C19.3764 19.8788 19.3741 19.8797 19.3718 19.8804C19.3726 19.8784 19.3732 19.8764 19.3739 19.8745C19.4345 19.7148 19.4922 19.5461 19.5455 19.3692C19.5496 19.3556 19.5536 19.342 19.5576 19.3285C19.5822 19.2452 19.6058 19.1606 19.628 19.0739C19.6293 19.0691 19.6306 19.0645 19.6317 19.0599C19.6421 19.0194 19.6516 18.9782 19.6613 18.937L19.6932 18.9379C19.7573 18.9399 19.82 18.9345 19.8804 18.9226C20.2527 18.8491 20.5385 18.5264 20.5505 18.131C20.5633 17.7045 20.253 17.3438 19.841 17.2829C19.8403 17.2489 19.8398 17.2148 19.8386 17.1811C19.8375 17.153 19.8355 17.1244 19.8341 17.0961C19.8312 17.0397 19.8281 16.9835 19.8236 16.9278C19.8216 16.9025 19.8189 16.877 19.8165 16.8517C19.811 16.7923 19.805 16.7331 19.7978 16.6744C19.7948 16.6494 19.7912 16.6242 19.7877 16.5991C19.7796 16.5398 19.7709 16.4809 19.7612 16.4224C19.759 16.4093 19.7575 16.3964 19.7553 16.3833C19.7534 16.3727 19.7507 16.3624 19.7488 16.3518C19.7384 16.2941 19.7274 16.2369 19.7154 16.1801L20.8692 16.215C20.9334 16.2169 20.996 16.2115 21.0564 16.1996C21.4287 16.1261 21.7145 15.8034 21.7265 15.408C21.7404 14.9485 21.379 14.5646 20.9194 14.5508L20.1853 14.5286L20.7875 13.5909L21.694 13.6182C21.7581 13.6202 21.8207 13.6148 21.8812 13.6029C22.2535 13.5294 22.5393 13.2067 22.5512 12.8112C22.5642 12.382 22.2498 12.0191 21.8339 11.9616L22.7337 10.5608ZM25.1322 29.8254C23.1818 32.6545 23.6959 36.4618 26.2007 38.6895L25.9079 39.1142C23.1461 36.7082 22.6002 32.601 24.7131 29.5362C25.8321 27.9131 27.4893 26.883 29.281 26.5293C30.8723 26.2151 32.5698 26.4347 34.0897 27.2464L33.7968 27.6714C30.8239 26.1226 27.0827 26.9962 25.1322 29.8254ZM32.8431 29.0547L27.1543 37.3063C25.4003 35.6123 25.0746 32.8425 26.5031 30.7706C27.2843 29.6372 28.4468 28.9204 29.7012 28.6728C30.7406 28.4676 31.8431 28.5849 32.8431 29.0547ZM23.0636 22.9262L23.0818 26.7608L19.2472 26.779L19.229 22.9443L23.0636 22.9262ZM21.3329 9.66101L20.433 11.062C20.2079 10.7073 19.7474 10.5723 19.3618 10.7626C18.9497 10.9664 18.7807 11.4657 18.9844 11.8779L19.3865 12.6913L18.7843 13.6287L18.4589 12.9702C18.2826 12.6134 17.8851 12.4395 17.5139 12.531C17.2794 12.3173 17.0257 12.1099 16.7564 11.9077C16.6949 11.8613 16.6333 11.8154 16.5719 11.771C17.7948 10.8121 19.6059 10.1067 21.3329 9.66101ZM14.8179 12.622C14.8218 12.6241 14.8253 12.6268 14.8292 12.629C14.898 12.6664 14.961 12.702 15.0196 12.7364C15.078 12.7713 15.1362 12.8062 15.1925 12.843C15.196 12.8452 15.1992 12.8477 15.2027 12.8499C15.3143 12.9229 15.4224 12.9968 15.5278 13.0714C15.5658 13.0983 15.6021 13.1257 15.6392 13.1527C15.7087 13.2033 15.7777 13.2541 15.8444 13.3055C15.8862 13.3377 15.9269 13.3703 15.9676 13.4028C16.0268 13.4499 16.0849 13.4974 16.1416 13.5451C16.1827 13.5797 16.2235 13.6143 16.2634 13.6492C16.3174 13.6965 16.3697 13.744 16.4214 13.7919C16.4593 13.8269 16.4978 13.8618 16.5345 13.8972C16.5889 13.9495 16.6407 14.0023 16.6923 14.0552C16.7226 14.0863 16.7543 14.1171 16.7837 14.1482C16.8599 14.2293 16.9331 14.3111 17.0031 14.3937C17.0302 14.4257 17.055 14.4581 17.0812 14.4902C17.1256 14.5448 17.1698 14.5994 17.2115 14.6545C17.2395 14.6915 17.2657 14.7289 17.2924 14.7662C17.3296 14.818 17.3662 14.8699 17.4011 14.9223C17.4262 14.96 17.4504 14.9978 17.4743 15.0358C17.5084 15.09 17.5411 15.1445 17.5727 15.1993C17.5935 15.2352 17.6143 15.271 17.634 15.3071C17.6679 15.3694 17.6995 15.4322 17.7302 15.4952C17.7443 15.5242 17.7595 15.5529 17.7729 15.5819C17.8596 15.7693 17.9325 15.9599 17.9914 16.1533C17.999 16.1782 18.0051 16.2033 18.0122 16.2283C18.0326 16.3002 18.0517 16.3723 18.0684 16.4449C18.0759 16.4777 18.0824 16.5108 18.0892 16.5437C18.1051 16.6217 18.12 16.6998 18.1316 16.7786C18.133 16.7887 18.1349 16.7988 18.1363 16.8088C18.149 16.9 18.158 16.992 18.1649 17.0844C18.1665 17.1054 18.1683 17.1266 18.1695 17.1476C18.1745 17.2316 18.1766 17.3162 18.1769 17.4012C18.177 17.4342 18.177 17.4672 18.1764 17.5C18.1758 17.5316 18.1743 17.5628 18.1731 17.594C18.1699 17.6756 18.165 17.7565 18.1577 17.8363C18.1572 17.8421 18.1566 17.848 18.1561 17.854C18.0836 18.6179 17.8378 19.2877 17.6066 19.7716L16.5464 18.8147L17.0359 16.3164C17.1243 15.8652 16.8301 15.4277 16.379 15.3393C15.9278 15.2509 15.4903 15.5451 15.4019 15.9962L15.1047 17.5133L13.9441 16.4659L14.3158 14.5691C14.4044 14.1181 14.1103 13.6807 13.659 13.5923C13.2079 13.5039 12.7705 13.7981 12.6819 14.2492L12.5025 15.1648L11.4709 14.2338L11.6691 13.2219C11.7575 12.7707 11.4634 12.3332 11.0123 12.2448C10.5609 12.1564 10.1236 12.4506 10.0352 12.9017L10.0291 12.9324L8.45126 11.5082C10.237 11.4715 12.9555 11.6134 14.8179 12.622ZM15.0504 21.6531C14.57 21.7904 14.0314 21.8699 13.4548 21.8299C12.0021 21.7295 10.6218 20.8831 9.35203 19.314C7.95873 17.5924 7.49153 14.6478 7.33561 12.7443L8.91362 14.1687L8.88333 14.1779C8.44356 14.312 8.19562 14.7772 8.32962 15.217C8.45528 15.6295 8.87221 15.8731 9.28634 15.7913C9.31388 15.7859 9.34137 15.779 9.36868 15.7706L10.3554 15.47L11.3868 16.4008L10.4942 16.6728C10.0544 16.8069 9.8065 17.2721 9.94049 17.7119C10.0662 18.1244 10.4831 18.368 10.8971 18.2862C10.9247 18.2808 10.9521 18.2739 10.9796 18.2655L12.8285 17.702L13.9702 18.7324L12.5386 19.1688C12.0989 19.3029 11.8509 19.7681 11.9849 20.2079C12.1106 20.6203 12.5275 20.8639 12.9416 20.7821C12.9692 20.7767 12.9967 20.7698 13.024 20.7615L15.4119 20.0337L16.4914 21.008C16.1266 21.2313 15.646 21.4755 15.0856 21.6408C15.0735 21.6444 15.0622 21.6491 15.0504 21.6531ZM45.2803 58.5228L25.8885 62.3513L25.3048 59.9523C27.9931 59.7048 31.5246 59.1675 35.1909 58.4437C38.8572 57.7198 42.3279 56.8747 44.9085 56.082L45.2803 58.5228ZM38.5976 14.6572L29.4095 16.4712C28.9584 16.5603 28.6649 16.9981 28.754 17.4493C28.8431 17.9003 29.2809 18.1938 29.732 18.1048L38.8486 16.3049L44.6549 54.4174C42.1096 55.2139 38.5968 56.074 34.8683 56.8101C31.1399 57.5462 27.5637 58.0857 24.9067 58.3163L24.2747 55.7184C24.4877 55.9631 24.8013 56.1181 25.1505 56.1164L29.6864 56.0949C29.7611 56.0947 29.8341 56.0871 29.9049 56.0732C30.4368 55.9681 30.838 55.4969 30.8353 54.9351L30.8137 50.3995C30.8125 50.0911 30.691 49.8017 30.4718 49.5846C30.2527 49.3675 29.9623 49.2489 29.6538 49.2503L25.1179 49.2718C24.4813 49.2745 23.966 49.7952 23.969 50.4317L23.9884 54.542L16.3071 22.9701C16.8116 22.7582 17.2397 22.5135 17.5739 22.2944C17.5663 22.3492 17.5611 22.4046 17.5614 22.4614L17.5842 27.2773C17.5856 27.591 17.7093 27.8855 17.9321 28.1063C18.155 28.3271 18.4505 28.4478 18.7641 28.4463L23.4633 28.4241C23.423 28.4799 23.3812 28.5343 23.3419 28.5912C20.6224 32.5359 21.4856 37.8853 25.3068 40.7696C25.5599 40.9607 25.8848 41.0412 26.1981 40.9905C26.2112 40.9884 26.2243 40.986 26.2374 40.9834C26.5351 40.9247 26.8023 40.7499 26.9749 40.4995L31.0306 34.6167L34.7251 29.2577C34.7252 29.2576 34.7253 29.2574 34.7253 29.2573L35.7636 27.7512C35.9438 27.4899 36.0103 27.1616 35.9462 26.8506C35.8821 26.5397 35.6913 26.2648 35.4227 26.0961C31.9837 23.9372 27.6453 24.3986 24.7475 26.9943L24.7259 22.4275C24.7244 22.1138 24.6008 21.8194 24.378 21.5986C24.1551 21.3779 23.8597 21.2571 23.546 21.2586L20.4195 21.2735C20.4446 21.2629 20.4696 21.2515 20.4946 21.2404C20.5131 21.2323 20.5315 21.2244 20.55 21.216C20.6082 21.1895 20.6666 21.162 20.7247 21.1329C20.7294 21.1306 20.7339 21.128 20.7385 21.1258C20.7922 21.0988 20.8459 21.0706 20.8996 21.0414C20.9184 21.0311 20.9371 21.0204 20.9559 21.0099C20.9958 20.9875 21.0357 20.9648 21.0754 20.9413C21.0966 20.9287 21.1178 20.9158 21.139 20.9029C21.1773 20.8795 21.2154 20.8556 21.2535 20.831C21.2742 20.8176 21.295 20.8044 21.3156 20.7907C21.3578 20.7627 21.3999 20.7337 21.4421 20.7042C21.4579 20.6932 21.4736 20.6825 21.4895 20.6712C21.5472 20.6298 21.6047 20.5871 21.662 20.5429C21.672 20.5352 21.6818 20.5269 21.6918 20.5192C21.739 20.4821 21.7861 20.4443 21.8331 20.4052C21.852 20.3894 21.8708 20.373 21.8898 20.3569C21.9282 20.3241 21.9664 20.2909 22.0045 20.2567C22.0249 20.2384 22.0452 20.2199 22.0655 20.2012C22.1032 20.1665 22.1408 20.1309 22.1782 20.0947C22.1973 20.0762 22.2163 20.0581 22.2353 20.0393C22.279 19.996 22.3223 19.9516 22.3655 19.9063C22.3776 19.8937 22.3898 19.8816 22.4018 19.8688C22.4568 19.8102 22.5116 19.7499 22.5658 19.6879C22.5789 19.6729 22.5918 19.6572 22.6048 19.642C22.646 19.5942 22.6871 19.5457 22.7278 19.4958C22.7305 19.4925 22.7333 19.4893 22.7361 19.4859L25.9313 18.8551C26.3824 18.7661 26.6759 18.3282 26.5868 17.8771C26.4978 17.4261 26.0599 17.1325 25.6088 17.2216L23.9214 17.5547C23.9564 17.4795 23.9913 17.4036 24.0255 17.3258C24.0625 17.2419 24.0973 17.1555 24.1313 17.068C24.1402 17.0447 24.1489 17.0211 24.1577 16.9977C24.1843 16.9267 24.2098 16.8546 24.2344 16.7813C24.2401 16.7644 24.2459 16.7475 24.2515 16.7305C24.3819 16.3323 24.4841 15.9025 24.5564 15.4422L38.3037 12.7281L38.5976 14.6572ZM25.6531 54.449L25.6364 50.9344L29.1511 50.9177L29.1678 54.4323L25.6531 54.449Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M40.6998 33.8328C40.4636 33.5989 40.1505 33.4709 39.8183 33.4725L34.0171 33.4999C33.6844 33.5015 33.3726 33.6325 33.1387 33.8687C32.9048 34.1048 32.7769 34.4179 32.7784 34.7503L32.8059 40.5516C32.8059 40.5516 32.8059 40.5516 32.8059 40.5517C32.8093 41.2378 33.3702 41.7933 34.0562 41.79L39.8576 41.7625C39.9382 41.7621 40.0168 41.754 40.0931 41.7389C40.6664 41.6258 41.0988 41.1177 41.0959 40.5122L41.0684 34.7109C41.0668 34.3786 40.9359 34.0667 40.6998 33.8328ZM39.4288 40.0995L34.4691 40.1229L34.4456 35.1631L39.4054 35.1396L39.4288 40.0995Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M40.158 44.4325C37.4316 42.654 32.8757 42.9154 31.5445 43.038C30.9216 43.0956 30.438 43.6304 30.4448 44.2562C30.459 45.5932 30.6644 50.1521 32.7119 52.6823C34.1618 54.4739 35.8028 55.4451 37.5896 55.5687C38.1198 55.6054 38.6213 55.5632 39.0853 55.4716C40.9336 55.1067 42.182 53.958 42.2467 53.8974C42.2809 53.8655 42.3124 53.8306 42.3407 53.7932C42.4078 53.705 43.9794 51.6005 43.5275 48.9898C43.222 47.2249 42.0883 45.6917 40.158 44.4325ZM37.7045 53.9075C36.3977 53.817 35.1534 53.0525 34.0062 51.6348C32.9283 50.3029 32.3835 47.9857 32.1914 45.8487L33.4127 46.9509C33.0292 47.1169 32.823 47.5478 32.9478 47.957C33.0735 48.3694 33.4904 48.613 33.9044 48.5313C33.9319 48.5258 33.9594 48.5189 33.9868 48.5106L34.8494 48.2477L35.6676 48.9861L34.9733 49.1978C34.5335 49.3319 34.2856 49.797 34.4196 50.2368C34.5454 50.6493 34.9622 50.8929 35.3762 50.8111C35.4038 50.8057 35.4312 50.7988 35.4587 50.7904L37.1094 50.2873L38.0283 51.1167L36.8415 51.4784C36.4018 51.6125 36.1538 52.0777 36.2878 52.5175C36.4135 52.93 36.8304 53.1735 37.2444 53.0918C37.272 53.0863 37.2994 53.0794 37.3269 53.0711L39.4701 52.4179L40.3573 53.2186C39.7426 53.5825 38.7989 53.9834 37.7045 53.9075ZM41.4695 51.9801L40.6029 51.1979L41.0424 48.9549C41.1308 48.5036 40.8367 48.0662 40.3856 47.9778C39.9343 47.8894 39.497 48.1835 39.4085 48.6347L39.1613 49.8966L38.2251 49.0515L38.557 47.3581C38.6454 46.9069 38.3512 46.4694 37.9001 46.381C37.4489 46.2926 37.0115 46.5868 36.923 47.0379L36.7835 47.7502L35.9652 47.0116L36.1386 46.1269C36.227 45.6757 35.9329 45.2382 35.4817 45.1498C35.062 45.0677 34.6546 45.3166 34.5285 45.7149L33.3073 44.6126C35.4526 44.5854 37.8133 44.8906 39.2486 45.8269C40.7698 46.8193 41.6567 47.9738 41.8844 49.2583C42.0748 50.3347 41.7695 51.3245 41.4695 51.9801Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M83.7386 25.6292C84.2571 25.6292 84.6774 25.2089 84.6774 24.6904C84.6774 24.1719 84.2571 23.7516 83.7386 23.7516C83.2201 23.7516 82.7998 24.1719 82.7998 24.6904C82.7998 25.2089 83.2201 25.6292 83.7386 25.6292Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M99.7191 28.7584C100.238 28.7584 100.658 28.3382 100.658 27.8197C100.658 27.3011 100.238 26.8809 99.7191 26.8809C99.2006 26.8809 98.7803 27.3011 98.7803 27.8197C98.7803 28.3382 99.2007 28.7584 99.7191 28.7584Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M80.7864 21.7208C81.3049 21.7208 81.7252 21.3004 81.7252 20.782C81.7252 20.2635 81.3049 19.8432 80.7864 19.8432C80.268 19.8432 79.8477 20.2635 79.8477 20.782C79.8477 21.3004 80.268 21.7208 80.7864 21.7208Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M92.4481 36.066C92.9665 36.066 93.3869 35.6457 93.3869 35.1272C93.3869 34.6087 92.9665 34.1884 92.4481 34.1884C91.9296 34.1884 91.5093 34.6087 91.5093 35.1272C91.5093 35.6457 91.9296 36.066 92.4481 36.066Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M93.3872 23.7516C93.3872 24.2701 93.8075 24.6904 94.326 24.6904C94.8445 24.6904 95.2648 24.2701 95.2648 23.7516C95.2648 23.2331 94.8445 22.8128 94.326 22.8128C93.8075 22.8128 93.3872 23.2331 93.3872 23.7516Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M90.3387 28.6775C90.8572 28.6775 91.2775 28.2572 91.2775 27.7387C91.2775 27.2202 90.8572 26.7999 90.3387 26.7999C89.8202 26.7999 89.3999 27.2202 89.3999 27.7387C89.3999 28.2572 89.8202 28.6775 90.3387 28.6775Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M98.7801 21.0792C99.2986 21.0792 99.7189 20.6589 99.7189 20.1404C99.7189 19.6219 99.2986 19.2016 98.7801 19.2016C98.2616 19.2016 97.8413 19.6219 97.8413 20.1404C97.8413 20.6589 98.2616 21.0792 98.7801 21.0792Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M101.495 23.7944C102.014 23.7944 102.434 23.3741 102.434 22.8556C102.434 22.3371 102.014 21.9168 101.495 21.9168C100.977 21.9168 100.557 22.3371 100.557 22.8556C100.557 23.3741 100.977 23.7944 101.495 23.7944Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M81.7254 30.6359C82.2439 30.6359 82.6642 30.2156 82.6642 29.6971C82.6642 29.1786 82.2439 28.7583 81.7254 28.7583C81.2069 28.7583 80.7866 29.1786 80.7866 29.6971C80.7866 30.2156 81.2069 30.6359 81.7254 30.6359Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M103.992 1.48216C103.012 0.512383 101.728 -0.0141788 100.377 0.000374396C99.216 0.0125021 98.0841 0.424292 97.1872 1.16C96.2752 0.411833 95.1238 4.36416e-05 93.9432 4.36416e-05C92.7629 4.36416e-05 91.6116 0.411613 90.6993 1.15989C89.7874 0.411833 88.6362 4.36416e-05 87.4555 4.36416e-05C86.2752 4.36416e-05 85.1241 0.411723 84.2117 1.15989C83.3147 0.424071 82.1827 0.0123918 81.0222 0.000264145C79.6693 -0.0135173 78.3867 0.512383 77.4067 1.48216C76.4159 2.46273 75.8477 3.81784 75.8477 5.20006V20.9483C75.8477 27.2997 76.5063 33.6725 77.8054 39.8898L77.853 40.1178C78.4682 43.0621 78.9379 46.072 79.2489 49.064L79.7292 53.6826C79.8931 55.2596 81.2124 56.4488 82.7979 56.4488H98.6009C100.187 56.4488 101.506 55.2596 101.67 53.6826L102.15 49.064C102.447 46.2071 102.895 43.3032 103.483 40.4329C103.575 39.9853 103.286 39.5483 102.839 39.4565C102.391 39.3647 101.954 39.6535 101.863 40.101C101.264 43.0242 100.807 45.9822 100.504 48.8929L100.024 53.5115C99.948 54.2429 99.3362 54.7945 98.6008 54.7945H82.7979C82.0625 54.7945 81.4508 54.2429 81.3747 53.5115L80.8944 48.893C80.5774 45.845 80.0991 42.7788 79.4724 39.7795L79.4248 39.5514C78.1489 33.4452 77.5021 27.1862 77.5021 20.9483V18.115C77.5697 18.1163 77.6369 18.1176 77.7067 18.1176C79.5033 18.1176 80.45 17.7051 81.2854 17.3413C82.0718 16.9986 82.7509 16.7028 84.2021 16.7028C84.4133 16.7028 84.6071 16.7096 84.7883 16.7213V17.5536C84.7883 18.0105 85.1586 18.3809 85.6155 18.3809C86.0724 18.3809 86.4427 18.0105 86.4427 17.5536V13.4527C86.4427 12.4941 85.6628 11.7141 84.7041 11.7141H77.5021V10.2404H103.897V11.7141H98.8871C97.9284 11.7141 97.1485 12.494 97.1485 13.4527V15.7887C97.1485 16.5156 96.5571 17.1071 95.8301 17.1071C95.1032 17.1071 94.5117 16.5157 94.5117 15.7887V13.4527C94.5117 12.4941 93.7318 11.7141 92.773 11.7141H90.8178C89.8592 11.7141 89.0792 12.494 89.0792 13.4527V20.144C89.0792 20.8709 88.4878 21.4624 87.7608 21.4624C87.3221 21.4624 86.9132 21.2449 86.667 20.8806C86.4113 20.5021 85.8972 20.4025 85.5185 20.6583C85.14 20.9141 85.0404 21.4283 85.2962 21.8068C85.8505 22.6271 86.7718 23.1168 87.7608 23.1168C89.3999 23.1168 90.7335 21.7832 90.7335 20.1441V18.1171C91.9975 18.1132 92.838 17.9042 93.5171 17.6535C94.0625 18.3287 94.8965 18.7616 95.83 18.7616C97.1035 18.7616 98.1921 17.9565 98.6147 16.8287C99.2028 16.9466 99.6391 17.1352 100.113 17.3415C100.948 17.7053 101.895 18.1177 103.691 18.1177C103.761 18.1177 103.829 18.1163 103.897 18.1152V20.9484C103.897 26.095 103.455 31.2769 102.583 36.3497C102.506 36.7999 102.808 37.2276 103.259 37.305C103.709 37.3824 104.137 37.0801 104.214 36.6298C105.101 31.4647 105.551 26.1887 105.551 20.9484V5.20006C105.551 3.81784 104.983 2.46273 103.992 1.48216ZM84.7039 13.3684C84.7504 13.3684 84.7882 13.4062 84.7882 13.4526V15.0643C84.6032 15.054 84.4085 15.0483 84.202 15.0483C82.4062 15.0483 81.4597 15.4606 80.6245 15.8245C79.8379 16.1671 79.1585 16.4631 77.7066 16.4631C77.6373 16.4631 77.5695 16.4619 77.502 16.4606V13.3684H84.7039ZM90.7337 16.4627V13.4526C90.7337 13.4062 90.7715 13.3684 90.8179 13.3684H92.7731C92.8196 13.3684 92.8574 13.4062 92.8574 13.4526V15.7886C92.8574 15.903 92.8645 16.0155 92.8771 16.1265C92.3315 16.3218 91.7072 16.4594 90.7337 16.4627ZM103.897 16.4606C103.829 16.462 103.761 16.4631 103.691 16.4631C102.239 16.4631 101.56 16.1672 100.773 15.8246C100.231 15.5884 99.6413 15.3318 98.8029 15.1809V13.4526C98.8029 13.4062 98.8407 13.3684 98.8871 13.3684H103.897V16.4606ZM103.897 8.586H77.502V5.20006C77.502 4.25664 77.8914 3.33008 78.5704 2.65821C79.2339 2.00166 80.1026 1.64599 81.0048 1.65459C81.8053 1.66297 82.5547 1.93694 83.1718 2.44675C83.7739 2.94431 84.6493 2.94376 85.2533 2.4452C85.8714 1.93529 86.6534 1.65437 87.4555 1.65437C88.2576 1.65437 89.0397 1.93518 89.6577 2.4452C90.2615 2.94343 91.1377 2.94332 91.7411 2.4452C92.3592 1.93529 93.1412 1.65437 93.9432 1.65437C94.7453 1.65437 95.5275 1.93518 96.1454 2.4452C96.7495 2.94376 97.6251 2.94442 98.227 2.44675C98.8439 1.93694 99.5932 1.66297 100.394 1.65459C100.406 1.65448 100.417 1.65448 100.429 1.65448C101.323 1.65448 102.173 2.01004 102.828 2.65821C103.507 3.33019 103.897 4.25675 103.897 5.20017V8.586H103.897Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M136.611 28.8131C135.322 35.5282 138.926 42.1174 145.044 44.7434L142.736 56.7576L134.511 59.0738C134.053 59.2028 133.743 59.6306 133.763 60.1064C133.783 60.5827 134.127 60.9824 134.594 61.0722L154.746 64.9427C155.213 65.0324 155.681 64.7888 155.876 64.3536C156.07 63.919 155.941 63.4074 155.563 63.1173L148.782 57.9187L151.089 45.9045C157.93 45.7265 163.703 40.7092 164.865 34.0105C165.32 31.4121 164.981 31.0016 164.493 14.0546C164.477 13.5757 164.132 13.1718 163.662 13.0816L158.725 12.1333C158.168 12.0264 157.631 12.3915 157.524 12.9489C157.416 13.5063 157.781 14.0446 158.337 14.1515L162.471 14.9455C162.471 14.9455 163.034 31.5987 163.026 31.8593C161.108 30.4093 158.752 28.9481 156.56 28.4597C154.247 27.9425 151.893 28.7053 149.62 29.4421C147.465 30.1403 145.43 30.7999 143.823 30.2118C142.496 29.7264 141.018 28.4031 139.528 26.3732L145.942 11.7707L150.277 12.6033C150.833 12.7102 151.371 12.3451 151.478 11.7877C151.585 11.2303 151.221 10.692 150.664 10.5851L145.526 9.59809C145.056 9.50783 144.585 9.75511 144.393 10.1938C136.982 27.0728 137.051 26.5232 136.611 28.8131V28.8131ZM150.865 62.1046L139.25 59.8737L143.901 58.564C144.275 58.4584 144.558 58.1502 144.632 57.7682L147.003 45.4197C147.334 45.5077 147.668 45.5858 148.004 45.6503C148.34 45.7149 148.679 45.7661 149.019 45.8068L146.647 58.1553C146.573 58.5376 146.722 58.9283 147.03 59.1649L150.865 62.1046ZM150.25 31.3972C152.263 30.7455 154.343 30.071 156.113 30.4658C157.875 30.8581 160.209 32.1908 162.726 34.2349C161.3 40.5358 155 44.9569 148.291 43.6115C141.425 42.2351 137.165 35.3644 138.735 28.695C140.202 30.4564 141.672 31.6129 143.118 32.1421C145.405 32.9794 147.91 32.1556 150.25 31.3972Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Path
      d="M155.588 12.5883C155.48 13.1516 154.936 13.5204 154.373 13.4122C153.809 13.304 153.441 12.7598 153.549 12.1966C153.657 11.6333 154.201 11.2645 154.764 11.3727C155.328 11.4809 155.696 12.025 155.588 12.5883Z"
      fill={color}
      fillOpacity="0.5"
    />
    <Line x1="7.51388" y1="100.107" x2="64.0129" y2="72.2924" stroke="#AFAFD3" strokeWidth="2" />
    <Line x1="64.7792" y1="73.0149" x2="113.308" y2="90.5171" stroke="#AFAFD3" strokeWidth="2" />
    <Line x1="114.369" y1="90.4761" x2="171.649" y2="79.3384" stroke="#AFAFD3" strokeWidth="2" />
    <Circle cx="7.16" cy="100.209" r="6.16" fill="#F1F1F5" stroke="#AFAFD3" strokeWidth="2" />
    <Circle cx="64.4398" cy="73.16" r="6.16" fill="#F1F1F5" stroke="#AFAFD3" strokeWidth="2" />
    <Circle cx="112.969" cy="91.4578" r="6.16" fill="#F1F1F5" stroke="#AFAFD3" strokeWidth="2" />
    <Circle cx="171.84" cy="80.32" r="6.16" fill="#F1F1F5" stroke="#AFAFD3" strokeWidth="2" />
  </StyledSvg>
);

export default DefiLanding;
