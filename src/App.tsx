// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import { Match } from './types';
import { MyAside } from './components/MyAside/MyAside';
import { Content } from './components/Content/Content';
import MatchFetcher from './components/MatchFetcher/MatchFetcher';

const App: React.FC = () => {
  const [data, setData] = useState<Match[] | null>(null);
  const [mode, setMode] = useState('competitive');
  const [gameName, setGameName] = useState('exa');
  const [tagLine, setTagLine] = useState('v1c');
  const [spinning, setSpinning] = useState<boolean>(false);
  const [fatal, setFatal] = useState<boolean>(false);

  const handleFetchSuccess = (fetchedData: Match[]) => {
    setData(fetchedData);
    setFatal(false);
  };

  const handleFetchError = () => {
    setFatal(true);
  };

  return (
    <>
      <div className='container'>
        <MyAside
          userName={{
            name: { gameName, setGameName },
            tag: { tagLine, setTagLine },
          }}
          gamemode={mode}
          setGamemode={setMode}
          loading={spinning}
        />
        <main className='content'>
          <Content fatal={fatal} data={data} />
        </main>
        <MatchFetcher
          gameName={gameName}
          tagLine={tagLine}
          mode={mode}
          onFetch={handleFetchSuccess}
          onError={handleFetchError}
          spinning={spinning}
          setSpinning={setSpinning}
        />
      </div>
    </>
  );
};

export default App;