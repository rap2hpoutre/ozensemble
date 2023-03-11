import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BadgeGoals = ({ stars, size = 96 }) => {
  const star2 = stars >= 2 ? '#4030A5' : '#E8E8F3';
  const star3 = stars >= 3 ? '#4030A5' : '#E8E8F3';
  const star4 = stars >= 4 ? '#4030A5' : '#E8E8F3';
  const star5 = stars >= 5 ? '#4030A5' : '#E8E8F3';
  return (
    <Svg width={size} height={size} className="m-auto shrink-0" viewBox="0 0 90 90">
      <Path // large Tail bg
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.8274 0.304346C41.4539 0.823701 40.2635 1.64856 37.6996 3.93983C34.9525 6.38385 34.3116 6.53661 30.2215 5.7423C28.3902 5.37569 26.3451 5.10074 25.6431 5.10074C22.3161 5.13129 19.6912 7.81972 18.4092 12.4939C17.463 16.1294 16.3337 17.1987 12.1826 18.5429C9.16088 19.5205 8.03155 20.162 6.78012 21.5368C5.22346 23.2476 4.88771 25.0806 5.49817 28.3801C6.6275 34.5512 6.56646 34.8262 3.45315 38.3089C-1.00316 43.2886 -1.12525 46.5575 2.96479 51.1095C6.41385 54.9283 6.65803 55.6615 5.74235 59.8469C4.97928 63.3601 5.07085 65.8653 6.01705 67.4844C6.99378 69.1952 8.48939 70.1729 11.7553 71.3338C15.2654 72.5863 15.3875 72.6474 15.3875 72.9529L18.2261 77.1994L19.0502 79.2768C19.5081 80.4378 20.2406 81.8736 20.6984 82.4846C22.4077 84.7148 25.4905 85.3869 29.5805 84.3787C32.2665 83.7372 34.5557 83.7983 35.7766 84.5315C36.3566 84.8676 36.7534 85.2953 36.6923 85.448L40.6908 88.6252C42.7053 90.4583 47.2837 90.4583 49.2982 88.6252L53.2966 85.448C53.2356 85.2953 53.6324 84.8676 54.2123 84.5315C55.4332 83.7983 57.7224 83.7372 60.4084 84.3787C66.0551 85.7535 69.1989 84.1954 70.9998 79.1546C71.3661 78.0854 71.7018 77.2605 71.7628 77.2911L74.6015 72.9529C74.6874 72.678 74.7235 72.5863 78.2337 71.3338C81.4996 70.1729 82.9952 69.1952 83.9719 67.4844C84.9181 65.8653 85.0097 63.3601 84.2466 59.8469C83.3309 55.6615 83.5751 54.9283 87.0242 51.1095C91.1142 46.5269 91.0226 43.3192 86.5358 38.3089C85.498 37.1785 84.4603 35.8343 84.2161 35.3455C83.6972 34.3374 83.6362 32.6877 84.0635 30.9157C85.2233 26.1193 84.9792 23.5226 83.2088 21.5368C81.9574 20.162 80.8281 19.5205 77.8063 18.5429C73.5332 17.1376 72.5564 16.221 71.5492 12.4328C70.2978 7.72807 67.6118 5.10074 64.0406 5.10074C63.4912 5.10074 61.5988 5.37569 59.7674 5.7423C55.6469 6.56716 55.067 6.41441 52.0147 3.69543C50.7633 2.59562
              49.1456 1.34306 48.4435 0.915352C46.8869 -0.00115679 44.384 -0.276109 42.8274 0.304346ZM48.9319 6.71991C47.6805 5.6201 46.368 4.61194 45.9712 4.45919C45.5744 4.30643 45.086 4.18423 44.9029 4.18423C44.2925 4.18423 42.4916 5.40624 40.6603 7.08651C37.9132 9.56108 36.1734 10.3859 33.579 10.4165C32.3886 10.4165 30.1605 10.1721 28.6649 9.86659C24.3306 8.95008 24.0865 9.13338 22.3467 14.2658C20.6679 19.2761 18.9587 20.8952 13.373 22.6366C10.9007 23.4309 9.77134 24.1641 9.46611 25.2028C9.34402 25.5389 9.55768 27.2192 9.89343 28.9605C10.2292 30.7019 10.5039 32.8099 10.5039 33.6653C10.5039 35.7732 9.22193 38.37 6.90221 40.9057C4.39935 43.6858 3.94151 44.6023 4.42987 45.8243C4.64353 46.3131 5.77287 47.8406 6.93273 49.2154C10.6565 53.5229 11.0838 55.2949 9.86291 61.1605C8.94723 65.6514 9.25245 66.1097 14.3192 67.6983C19.2334 69.2869 20.7595 70.9061 22.5909 76.5273C23.0182 77.7799 23.6286 79.2157 23.9644 79.7045C24.5138 80.4378 24.7885 80.56 26.0094 80.56C26.803 80.5294 28.3291 80.3461 29.4279 80.1017C30.5267 79.8573 32.3581 79.674 33.4874 79.6434C36.1124 79.6434 37.7301 80.4072 41.0876 83.34C44.7808 86.5173 45.1471 86.5173 48.9624 83.2789C52.5336 80.285 53.8766 79.6434 56.6541 79.6434C57.875 79.674 59.7064 79.8573 60.7136 80.1017C61.7209 80.3461 63.186 80.56 63.9796 80.56C65.7194 80.56 66.2993 79.9184 67.3981 76.5273C69.2295 70.9061 70.7556 69.2869 75.6697 67.6983C78.661 66.7512 80.065 65.9875 80.4008 65.1321C80.6755 64.3989 80.4923 62.6269 79.8208 59.7858C79.6377 59.022 79.4851 57.5861 79.4851 56.578C79.4851 54.1645 80.3702 52.2704 82.9036 49.3681C85.6201 46.252 86.0169 45.4271 85.4675 44.1135C85.2539 43.533 84.1856 42.1277 83.1478 40.9668C80.767 38.37 79.4851 35.7732 79.4851 33.6653C79.4851 32.8099 79.7598 30.7019 80.0955 28.9605C80.4313 27.2192 80.6449 25.5389 80.5229 25.2028C80.2176 24.1641 79.1188 23.4615 76.616 22.6366C70.9082 20.773 69.321 19.2761 67.6423 14.2658C65.9025 9.13338 65.6583 8.95008 61.3241 9.86659C59.8285 10.1721 57.6003 10.4165 56.41 10.4165C53.7545 10.3859 52.1978 9.62218 48.9319 6.71991Z"
        fill="#39CEC1"
      />
      <Path // arrow
        d="M57.613 20.1825C57.4652 20.2749 56.0609 21.6423 54.5087 23.2036C51.9403 25.7905 51.6724 26.0954 51.617 26.428C51.58 26.6313 51.3952 28.4144 51.192 30.3915L50.8317 33.9946L46.4524 38.3831C44.0411 40.8037 42.0178 42.8732 41.9623 42.9841C41.9069 43.0949 41.8607 43.409 41.8607 43.677C41.8607 44.5731 42.4243 45.1367 43.3205 45.1367C43.5884 45.1367 43.9025 45.0905 44.0134 45.0351C44.1242 44.9797 46.1938 42.9563 48.6143 40.545L53.0028 36.1658L56.606 35.8055C58.5831 35.6022 60.3662 35.4174 60.5694 35.3805C60.902 35.325 61.2162 35.0479 63.8308 32.4425C65.4291 30.8627 66.7872 29.4583 66.8611 29.3198C67.0644 28.9225 67.0274 28.1279 66.778 27.7676C66.3807 27.1671 66.2606 27.1394 63.2025 26.8992C61.6689 26.7698 60.3939 26.6497 60.3662 26.6313C60.3477 26.6035 60.2276 25.3286 60.0983 23.7949C59.858 20.7368 59.8303 20.6167 59.2298 20.2195C58.8325 19.9423 58.0195 19.9238 57.613 20.1825ZM57.2804 26.8437C57.4744 29.5138 57.5206 29.56 60.708 29.754C61.2901 29.7909 61.8259 29.8464 61.8814 29.8833C61.9553 29.9203 61.558 30.3915 60.7542 31.186L59.507 32.4333L56.7538 32.7104L54.0098 32.9876L54.287 30.2437L54.5642 27.4905L55.8114 26.2432C56.5967 25.4487 57.0771 25.0422 57.1141 25.1161C57.1418 25.1715 57.225 25.9568 57.2804 26.8437Z"
        fill="#4030A5"
      />

      <Path //target small
        d="M41.4911 34.9286C38.2021 35.6492 35.6706 38.0421 34.7282 41.3126C34.5435 41.9501 34.5157 42.2457 34.5157 43.6593C34.5157 45.0728 34.5435 45.3685 34.7282 46.006C35.6244 49.0918 37.9064 51.3738 40.9922 52.2699C41.6297 52.4547 41.9253 52.4824 43.3389 52.4824C44.7524 52.4824 45.0481 52.4547 45.6855 52.2699C48.7529 51.383 51.0626 49.0918 51.931 46.0522C52.0696 45.5995 52.1435 44.9989 52.1805 44.2598C52.2174 43.2528 52.199 43.1234 52.0327 42.8463C51.4506 41.9316 49.9631 41.9409 49.4273 42.874C49.3257 43.0403 49.224 43.5115 49.1686 44.0288C48.9746 45.9321 48.1616 47.3826 46.6926 48.4358C43.3758 50.8009 38.6732 49.0363 37.6477 45.0359C37.5369 44.6017 37.5091 44.1767 37.5369 43.3821C37.5738 42.4675 37.62 42.218 37.8695 41.5805C38.5624 39.8344 40.1237 38.4393 41.9253 37.9774C42.221 37.9035 42.9693 37.8296 43.5883 37.8111C44.5584 37.7926 44.7432 37.7649 44.9742 37.5986C45.8888 36.9149 45.8888 35.7139 44.9742 35.0302C44.7432 34.8546 44.5676 34.8362 43.4035 34.8177C42.5443 34.8085 41.8884 34.8454 41.4911 34.9286Z"
        fill="#4030A5"
      />

      <Path // target large
        d="M41.4928 27.407C37.5108 27.8689 33.6305 29.8922 31.0528 32.8672C24.5487 40.3599 26.0546 51.7607 34.268 57.2485C39.0537 60.4544 45.2068 60.8887 50.4175 58.3942C55.5081 55.9551 58.9727 51.04 59.5917 45.3951C59.7857 43.6766 59.6933 42.0136 59.3145 40.1659C59.0374 38.8447 58.6586 38.3458 57.864 38.2349C57.3559 38.1703 56.7092 38.4105 56.4505 38.7708C56.0717 39.2974 56.0625 39.5838 56.3304 40.868C56.5521 41.8751 56.5891 42.2631 56.5891 43.612C56.5891 44.7668 56.5521 45.4043 56.4228 46.0141C55.4619 50.846 52.1821 54.6524 47.6274 56.2323C46.1861 56.7312 45.1144 56.9067 43.3867 56.9067C41.1232 56.9159 39.414 56.5279 37.5016 55.5763C33.6859 53.6731 31.099 50.264 30.2583 46.0141C30.0273 44.8685 30.0273 42.4479 30.2583 41.3022C31.3577 35.7589 35.4413 31.6753 40.9846 30.5759C41.5851 30.4558 42.2411 30.4096 43.3867 30.4096C44.7448 30.4096 45.1144 30.4466 46.1307 30.6591C47.4149 30.9362 47.7013 30.927 48.2279 30.5482C48.5882 30.2895 48.8284 29.6428 48.7638 29.1346C48.6529 28.3401 48.154 27.9613 46.8328 27.6841C45.0312 27.3146 43.165 27.213 41.4928 27.407Z"
        fill="#4030A5"
      />

      <Path // 1st star
        d="M24.7501 69.5021L22.9345 70.5968C22.8543 70.6479 22.7704 70.6698 22.6829 70.6625C22.5954 70.6552 22.5189 70.626 22.4532 70.575C22.3876 70.5239 22.3366 70.4601 22.3001 70.3836C22.2636 70.3068 22.2564 70.221 22.2782 70.1261L22.7595 68.057L21.1517 66.6667C21.0788 66.601 21.0333 66.5262 21.0152 66.4421C20.9968 66.3583 21.0022 66.2763 21.0314 66.196C21.0605 66.1157 21.1043 66.05 21.1626 65.9989C21.2209 65.9478 21.3011 65.915 21.4032 65.9004L23.5251 65.7143L24.3454 63.7657C24.3819 63.6781 24.4385 63.6124 24.5152 63.5686C24.5916 63.5248 24.6699 63.5029 24.7501 63.5029C24.8303 63.5029 24.9088 63.5248 24.9855 63.5686C25.0619 63.6124 25.1183 63.6781 25.1548 63.7657L25.9751 65.7143L28.097 65.9004C28.1991 65.915 28.2793 65.9478 28.3376 65.9989C28.3959 66.05 28.4397 66.1157 28.4689 66.196C28.498 66.2763 28.5036 66.3583 28.4855 66.4421C28.4671 66.5262 28.4215 66.601 28.3485 66.6667L26.7407 68.057L27.222 70.1261C27.2439 70.221 27.2366 70.3068 27.2001 70.3836C27.1637 70.4601 27.1126 70.5239 27.047 70.575C26.9814 70.626 26.9048 70.6552 26.8173 70.6625C26.7298 70.6698 26.6459 70.6479 26.5657 70.5968L24.7501 69.5021Z"
        fill="#4030A5"
      />

      <Path //2nd star
        d="M33.75 74.0031L31.9344 75.0978C31.8542 75.1489 31.7703 75.1708 31.6828 75.1635C31.5953 75.1562 31.5187 75.127 31.4531 75.0759C31.3875 75.0248 31.3364 74.9611 31.3 74.8846C31.2635 74.8078 31.2562 74.722 31.2781 74.6271L31.7594 72.558L30.1515 71.1677C30.0786 71.102 30.0331 71.0271 30.015 70.9431C29.9967 70.8593 30.0021 70.7772 30.0312 70.697C30.0604 70.6167 30.1042 70.551 30.1625 70.4999C30.2208 70.4488 30.301 70.416 30.4031 70.4014L32.525 70.2153L33.3453 68.2666C33.3818 68.1791 33.4383 68.1134 33.515 68.0696C33.5915 68.0258 33.6698 68.0039 33.75 68.0039C33.8302 68.0039 33.9087 68.0258 33.9854 68.0696C34.0618 68.1134 34.1182 68.1791 34.1547 68.2666L34.975 70.2153L37.0969 70.4014C37.1989 70.416 37.2792 70.4488 37.3375 70.4999C37.3958 70.551 37.4396 70.6167 37.4687 70.697C37.4979 70.7772 37.5034 70.8593 37.4854 70.9431C37.467 71.0271 37.4213 71.102 37.3484 71.1677L35.7406 72.558L36.2219 74.6271C36.2437 74.722 36.2364 74.8078 36.2 74.8846C36.1635 74.9611 36.1125 75.0248 36.0469 75.0759C35.9812 75.127 35.9047 75.1562 35.8172 75.1635C35.7297 75.1708 35.6458 75.1489 35.5656 75.0978L33.75 74.0031Z"
        fill={star2}
      />

      <Path //3rd star
        d="M44.25 75.5021L42.4344 76.5968C42.3542 76.6479 42.2703 76.6698 42.1828 76.6625C42.0953 76.6552 42.0187 76.626 41.9531 76.575C41.8875 76.5239 41.8364 76.4601 41.8 76.3836C41.7635 76.3068 41.7562 76.221 41.7781 76.1261L42.2594 74.057L40.6515 72.6667C40.5786 72.601 40.5331 72.5262 40.515 72.4421C40.4967 72.3583 40.5021 72.2763 40.5312 72.196C40.5604 72.1157 40.6042 72.05 40.6625 71.9989C40.7208 71.9478 40.801 71.915 40.9031 71.9004L43.025 71.7143L43.8453 69.7657C43.8818 69.6781 43.9383 69.6124 44.015 69.5686C44.0915 69.5248 44.1698 69.5029 44.25 69.5029C44.3302 69.5029 44.4087 69.5248 44.4854 69.5686C44.5618 69.6124 44.6182 69.6781 44.6547 69.7657L45.475 71.7143L47.5969 71.9004C47.6989 71.915 47.7792 71.9478 47.8375 71.9989C47.8958 72.05 47.9396 72.1157 47.9687 72.196C47.9979 72.2763 48.0034 72.3583 47.9854 72.4421C47.967 72.5262 47.9213 72.601 47.8484 72.6667L46.2406 74.057L46.7219 76.1261C46.7437 76.221 46.7364 76.3068 46.7 76.3836C46.6635 76.4601 46.6125 76.5239 46.5469 76.575C46.4812 76.626 46.4047 76.6552 46.3172 76.6625C46.2297 76.6698 46.1458 76.6479 46.0656 76.5968L44.25 75.5021Z"
        fill={star3}
      />
      <Path // 4th start
        d="M54.75 74.0031L52.9344 75.0978C52.8542 75.1489 52.7703 75.1708 52.6828 75.1635C52.5953 75.1562 52.5187 75.127 52.4531 75.0759C52.3875 75.0248 52.3364 74.9611 52.3 74.8846C52.2635 74.8078 52.2562 74.722 52.2781 74.6271L52.7594 72.558L51.1515 71.1677C51.0786 71.102 51.0331 71.0271 51.015 70.9431C50.9967 70.8593 51.0021 70.7772 51.0312 70.697C51.0604 70.6167 51.1042 70.551 51.1625 70.4999C51.2208 70.4488 51.301 70.416 51.4031 70.4014L53.525 70.2153L54.3453 68.2666C54.3818 68.1791 54.4383 68.1134 54.515 68.0696C54.5915 68.0258 54.6698 68.0039 54.75 68.0039C54.8302 68.0039 54.9087 68.0258 54.9854 68.0696C55.0618 68.1134 55.1182 68.1791 55.1547 68.2666L55.975 70.2153L58.0969 70.4014C58.1989 70.416 58.2792 70.4488 58.3375 70.4999C58.3958 70.551 58.4396 70.6167 58.4687 70.697C58.4979 70.7772 58.5034 70.8593 58.4854 70.9431C58.467 71.0271 58.4213 71.102 58.3484 71.1677L56.7406 72.558L57.2219 74.6271C57.2437 74.722 57.2364 74.8078 57.2 74.8846C57.1635 74.9611 57.1125 75.0248 57.0469 75.0759C56.9812 75.127 56.9047 75.1562 56.8172 75.1635C56.7297 75.1708 56.6458 75.1489 56.5656 75.0978L54.75 74.0031Z"
        fill={star4}
      />
      <Path // 5th start
        d="M63.7501 69.5021L61.9345 70.5968C61.8543 70.6479 61.7704 70.6698 61.6829 70.6625C61.5954 70.6552 61.5189 70.626 61.4532 70.575C61.3876 70.5239 61.3366 70.4601 61.3001 70.3836C61.2636 70.3068 61.2564 70.221 61.2782 70.1261L61.7595 68.057L60.1517 66.6667C60.0788 66.601 60.0333 66.5262 60.0152 66.4421C59.9968 66.3583 60.0022 66.2763 60.0314 66.196C60.0605 66.1157 60.1043 66.05 60.1626 65.9989C60.2209 65.9478 60.3011 65.915 60.4032 65.9004L62.5251 65.7143L63.3454 63.7657C63.3819 63.6781 63.4385 63.6124 63.5152 63.5686C63.5916 63.5248 63.6699 63.5029 63.7501 63.5029C63.8303 63.5029 63.9088 63.5248 63.9855 63.5686C64.0619 63.6124 64.1183 63.6781 64.1548 63.7657L64.9751 65.7143L67.097 65.9004C67.1991 65.915 67.2793 65.9478 67.3376 65.9989C67.3959 66.05 67.4397 66.1157 67.4689 66.196C67.498 66.2763 67.5036 66.3583 67.4855 66.4421C67.4671 66.5262 67.4215 66.601 67.3485 66.6667L65.7407 68.057L66.222 70.1261C66.2439 70.221 66.2366 70.3068 66.2001 70.3836C66.1637 70.4601 66.1126 70.5239 66.047 70.575C65.9814 70.626 65.9048 70.6552 65.8173 70.6625C65.7298 70.6698 65.6459 70.6479 65.5657 70.5968L63.7501 69.5021Z"
        fill={star5}
      />
    </Svg>
  );
};
