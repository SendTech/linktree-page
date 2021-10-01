import React from 'react';
import { RedesList } from "./redesList";
import { Presentation } from "./Presentation";
import { RedesItem } from './redesItem';
// import { DonationModal } from './DonationModal';
import './app.css';

const appData = [
  {name: 'Donaciones', link: 'https://www.buymeacoffee.com/SendTech'},
  {name: 'Instagram', link: 'https://instagram.com/SenderoTecnologico'},
  {name: 'Twitter', link: 'https://twitter.com/_SendTech'},
  {name: 'Discord', link: 'https://discord.gg/4FUtbhatAg'},
  {name: 'YouTube', link: 'https://www.youtube.com/channel/UC9qwrWMA03Asi5H8IMrZC9A'},
  {name: 'Podcast', link: 'https://open.spotify.com/show/0jjA3KBKLovYa8kvgCYs49'},
]

function App() {
  return (
    <>
    {/* <DonationModal/> */}
    <Presentation></Presentation>
      <RedesList>
      {appData.map(redes => (
          <RedesItem key={redes.name} text={redes.name} href={redes.link}/>
      ))}
      </RedesList>
    </>
  );
}

export default App;
