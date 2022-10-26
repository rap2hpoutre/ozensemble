import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={30} height={39} viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.436.012a24.79 24.79 0 01-.552.059C10.94.363 7.92 1.77 5.194 4.12 3.298 5.754 2.24 7.5 1.886 9.584c-.227 1.33-.172 2.723.22 5.575.097.698.13 1.065.112 1.202-.065.48-.384 1.177-1.232 2.688-.761 1.356-1.017 2.035-.983 2.606.028.467.107.589.689 1.054.856.685 1.394 1.607 1.767 3.03.184.704.303 1.388.511 2.955.283 2.122.317 2.246.716 2.623.237.225.489.352.942.478.28.078.404.086 1.218.085.765 0 1.078-.02 2.01-.13 1.408-.163 2.056-.176 2.43-.048.711.243 1.465.994 2.18 2.174.65 1.067 1.379 2.81 1.774 4.233.106.384.383.563.704.457.1-.033 1.458-1.306 5.004-4.691 4.084-3.9 4.873-4.67 4.906-4.79.032-.116.02-.224-.06-.557-.318-1.322-.114-2.615.662-4.196.424-.864.728-1.365 1.788-2.947 1.116-1.665 1.407-2.14 1.775-2.89.445-.907.742-1.902.909-3.04.096-.658.096-2.349 0-3.074-.326-2.457-1.198-4.683-2.54-6.48-.423-.568-1.578-1.73-2.254-2.27-2.49-1.987-5.231-3.188-8.097-3.547-.445-.055-2.34-.108-2.601-.072zm-1.742 5.452c-.131.08-.189.218-.285.68l-.045.22-.284.042c-.156.023-.34.054-.41.068-.123.025-.131.017-.33-.296-.257-.404-.445-.513-.68-.391-.22.114-1.239.766-1.327.849-.078.074-.098.13-.097.28 0 .154.033.235.192.48.175.268.187.301.137.378-.098.15-.39.583-.404.596a2.07 2.07 0 01-.344-.066c-.44-.105-.522-.101-.67.031-.114.101-.139.172-.295.837-.188.805-.199.899-.117 1.056.062.122.178.185.449.245.498.11.46.079.514.42.027.169.058.351.069.406.018.089-.012.12-.277.288-.348.22-.457.344-.457.517 0 .149.76 1.41.927 1.538.172.132.358.097.722-.136l.322-.207.128.113c.07.062.22.17.33.242l.203.13-.056.224c-.144.582-.11.776.155.897.069.031.444.128.832.216.968.217 1.022.197 1.178-.438.102-.418.058-.382.592-.479l.31-.056.213.33c.237.368.384.47.594.409.165-.047 1.271-.739 1.401-.876.174-.183.152-.372-.09-.752l-.198-.312.184-.243c.1-.134.201-.284.224-.333.05-.107.021-.106.477-.006.346.076.382.077.504.02a.505.505 0 00.182-.144c.077-.123.398-1.579.375-1.699-.036-.183-.187-.281-.594-.387l-.381-.098-.045-.316a4.079 4.079 0 00-.071-.398c-.023-.072.012-.108.247-.25.393-.237.476-.33.476-.534 0-.143-.059-.26-.423-.845-.452-.725-.543-.816-.78-.778-.07.012-.265.108-.434.214l-.308.193-.24-.18a8.88 8.88 0 00-.332-.24l-.094-.062.084-.383c.076-.344.079-.398.028-.518a.44.44 0 00-.17-.193c-.12-.063-1.46-.38-1.601-.38a.525.525 0 00-.21.077zm8.52 2.555c-.22.045-1.046.282-1.118.32-.145.078-.15.25-.022.734.017.063-.03.12-.22.268l-.242.188-.25-.14c-.278-.156-.406-.173-.526-.071-.045.038-.207.288-.36.555-.388.68-.38.744.14 1.029.16.088.162.09.13.252-.017.09-.032.228-.033.307l-.002.143-.266.07c-.283.075-.393.144-.445.28-.04.103.249 1.217.342 1.32.097.107.222.115.51.035.15-.041.274-.072.277-.068l.193.24.188.232-.143.265c-.167.308-.176.392-.055.528.092.104 1.034.653 1.12.653.128 0 .25-.108.387-.34l.149-.256.152.022c.507.074.463.054.509.233.108.42.187.538.36.538.12 0 1.112-.28 1.206-.34.15-.096.168-.21.086-.53-.04-.16-.07-.29-.066-.291.004-.002.115-.085.246-.185l.238-.183.235.134c.245.14.431.169.54.085.09-.07.617-.987.644-1.121.03-.152-.083-.287-.36-.43l-.22-.114.023-.177c.065-.493.034-.445.345-.532.208-.059.301-.107.362-.19l.081-.11-.15-.579c-.082-.318-.175-.618-.206-.667-.085-.131-.235-.15-.546-.07l-.275.07-.06-.092a3.594 3.594 0 00-.188-.243l-.126-.15.136-.233c.162-.277.178-.462.047-.581a5.435 5.435 0 00-.546-.342c-.636-.363-.712-.355-.976.105-.076.134-.146.214-.177.202a2.321 2.321 0 00-.303-.047l-.252-.028-.065-.24a2.196 2.196 0 00-.108-.32c-.05-.092-.222-.162-.34-.138zm-9.004.95c-.687.222-1.119.918-.987 1.588.094.476.379.846.8 1.04.21.097.295.114.58.114.281 0 .372-.017.56-.104.909-.426 1.128-1.555.44-2.264-.26-.267-.549-.386-.96-.397a2.043 2.043 0 00-.433.023zm9.13 1.713a1.063 1.063 0 00-.577.466c-.215.377-.2.754.047 1.12.27.403.8.56 1.243.369.248-.107.524-.397.591-.62a1.08 1.08 0 00-.523-1.28c-.2-.102-.581-.13-.781-.055zm-4.971 3.886c-.508.145-.548.196-.439.556l.055.181-.19.143-.192.143-.17-.097c-.169-.097-.328-.123-.409-.068-.023.016-.144.203-.268.415-.264.45-.273.55-.064.685.284.181.277.17.25.411l-.023.222-.233.064c-.33.092-.347.146-.212.661.145.556.177.6.41.572.1-.013.227-.033.281-.046.082-.019.116.002.197.123.054.08.114.166.133.191.022.029-.003.106-.069.21a.673.673 0 00-.103.283c0 .13.048.168.596.469.364.199.439.186.598-.107.105-.192.113-.198.255-.179.31.042.319.047.365.222.065.247.14.345.265.345.06 0 .29-.047.515-.106.511-.132.55-.175.463-.51a1.546 1.546 0 01-.051-.236c.004-.005.087-.07.184-.144l.177-.135.226.122c.178.097.24.113.296.08.083-.05.27-.326.447-.657.152-.285.13-.37-.14-.533-.188-.114-.202-.152-.153-.447.023-.136.034-.145.237-.19.335-.075.36-.143.232-.62-.178-.67-.2-.693-.575-.604l-.2.048-.114-.132c-.163-.19-.17-.24-.059-.433.117-.204.126-.316.031-.398a4.946 4.946 0 00-.415-.262c-.471-.276-.555-.27-.726.041-.098.18-.116.195-.221.174a1.421 1.421 0 00-.23-.023c-.12 0-.123-.004-.19-.264-.083-.324-.164-.342-.767-.17zm.47 1.926a.869.869 0 00-.491.754c0 .054.043.19.095.302.13.281.341.419.667.436.285.016.475-.074.67-.316.228-.284.18-.78-.1-1.041a.779.779 0 00-.84-.135z"
        fill="#DE285E"
      />
    </Svg>
  );
}

export default SvgComponent;
