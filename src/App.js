import React from 'react';
import { RedesList } from "./redesList";
import { Presentation } from "./Presentation";
import { RedesItem } from './redesItem';
import './App.css';

const appData = [
  {name: 'Donaciones', link: 'https://ko-fi.com/sendero_tech'},
  {name: 'Instagram', link: 'https://instagram.com/Sendero_Tech'},
  {name: 'Twitter', link: 'https://twitter.com/Sendero_Tech'},
  {name: 'Discord', link: 'https://discord.com/invite/xpTPb5XpHW'},
  {name: 'YouTube', link: 'https://www.youtube.com/channel/UC9qwrWMA03Asi5H8IMrZC9A'}
]

function App() {
  return (
    <>
    <Presentation></Presentation>
    <main className="main">
      <RedesList>
      {appData.map(redes => (
          <RedesItem key={redes.name} text={redes.name} href={redes.link}/>
      ))}
      </RedesList>
    </main>
    </>
  );
}

export default App;
