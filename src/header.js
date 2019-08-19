import { h } from 'superfine';

import Logo from '../static/zifi.svg';
import Skull from '../static/header.mp4';

export default () => (
  <header>
    <div class='logo-holder'>
      <img src={Logo} />
    </div>
    <div class='video-holder'>
      <video autoplay muted loop id='myVideo'>
        <source src={Skull} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </div>
  </header>
);
