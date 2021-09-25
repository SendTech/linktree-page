import React from 'react';
// import { IoLogoDiscord, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
// import { FaSpotify } from "react-icons/fa";
import { RedesList } from "./redesList";
import { Presentation } from "./Presentation";
import { RedesItem } from './redesItem';
import './app.css';

// const appData = [
//   {name: 'Instagram', link: 'https://instagram.com/SenderoTecnologico', icon: <IoLogoInstagram />},
//   {name: 'Twitter', link: 'https://twitter.com/_SendTech', icon: <IoLogoTwitter />},
//   {name: 'Discord', link: 'https://discord.gg/4FUtbhatAg', icon: <IoLogoDiscord />},
//   {name: 'Youtube', link: 'https://www.youtube.com/channel/UC9qwrWMA03Asi5H8IMrZC9A', icon: <IoLogoYoutube />},
//   {name: 'Podcast', link: 'https://open.spotify.com/show/0jjA3KBKLovYa8kvgCYs49', icon: <FaSpotify />},
// ]

const appData = [
  {name: 'Instagram', link: 'https://instagram.com/SenderoTecnologico'},
  {name: 'Twitter', link: 'https://twitter.com/_SendTech'},
  {name: 'Discord', link: 'https://discord.gg/4FUtbhatAg'},
  {name: 'YouTube', link: 'https://www.youtube.com/channel/UC9qwrWMA03Asi5H8IMrZC9A'},
  {name: 'Podcast', link: 'https://open.spotify.com/show/0jjA3KBKLovYa8kvgCYs49'},
]

function App() {
  return (
    <React.Fragment>
    <Presentation></Presentation>
      <RedesList>
      {appData.map(redes => (
          <RedesItem key={redes.name} text={redes.name} href={redes.link} text1={redes.icon}/>
      ))}
      </RedesList>
    </React.Fragment>
  );
}

export default App;
