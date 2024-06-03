import React, { useEffect, useState } from 'react';
import './App.css';
import { Match, ApiResponse} from './types';
import { MyAside } from './components/MyAside/MyAside';
import { Spin } from 'antd';
import { Content } from './components/Content/Content';
const App: React.FC = () => {
  const [data, setData] = useState<Match[] | null>(null);
  const [mode, setMode] = useState('competitive');
  const [gameName, setGameName] = useState('exa');
  const [tagLine, setTagLine] = useState('v1c');
  const [spinning, setSpinning] = useState<boolean>(false);
  const [fatal, setFatal] = useState<boolean>(false);
  const fetchingData = async () => {
    setSpinning(true)
    try {
      const response = await fetch(
        `https://api.tracker.gg/api/v2/valorant/standard/matches/riot/${gameName}%23${tagLine}?type=${mode.toLowerCase()}&season=&agent=all&map=all`, 
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            // 'x-api-key': '635d9c27-ff94-46a3-8c75-61d733f4c057', // Замените на ваш ключ API, если требуется
          },}
      );
      const responseData: ApiResponse = await response.json();
      setData(responseData.data.matches);
    } catch (error) {
      setFatal(true)
      console.error('Error fetching data:', error);
    }
    setSpinning(false)
  };
  useEffect(() => {
    fetchingData();
  }, [gameName, tagLine, mode]);

  if (spinning) {
    return <Spin style={{background: '#242424'}} spinning={spinning} fullscreen />
  }
  return (
      <>
        <div className='container'>
          <MyAside 
            userName={{
              name: { gameName, setGameName },
              tag: { tagLine, setTagLine }
            }}
            gamemode={mode} 
            setGamemode={setMode}
            loading={spinning}
          />
          <main className='content'>
              <Content fatal={fatal} data={data}/>
          </main>
        </div>
      </>
  );
};

export default App;