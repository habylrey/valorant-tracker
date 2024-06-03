// MyAside.tsx
import { useState } from 'react';
import { MainButton } from '../UI/MainButton/MainButton';
import { MyButton } from '../UI/MyButton/MyButton';
import classes from './MyAside.module.css';
import { MyAsideProps } from '../../types'; 
import { Spin } from 'antd';
export function MyAside ({setGamemode, userName, loading }: MyAsideProps) {
    const gamemodes = ['COMPETITIVE', 'UNRATED', 'SWIFTPLAY'];
    const [user, setUser] = useState({ gameName: '', tagLine: '' });
    if (loading) {
        return <Spin />
    }
    return (
        <aside className={classes.aside}>
            <p style={{color: `var(--riot-red)`}} className={classes.small_text}>The application was created as a pet-project, not for commercial use.</p>
            <h1 className={classes.aside_title}>Search for latest Valorant matches by <a href="https://account.riotgames.com/">Riot ID</a></h1>
            <p className={classes.small_text}>Enter your Riot ID without the "#", for example : <strong>GAME NAME</strong> cat <strong>TAGLINE</strong> 0000</p>
            <div className={classes.aside_panel}>
                <input value={user.gameName} onChange={(e) => setUser({...user, gameName: e.target.value})} className={classes.input} type="text" placeholder='GAME NAME' />
                <input value={user.tagLine} onChange={(e) => setUser({...user, tagLine: e.target.value})} className={classes.input} type="text" placeholder='TAGLINE' />
            </div>
            <p className={classes.small_text}>Choose game mode</p>
            <div className={classes.modes_wrap}>
                {gamemodes.map((mode) => (
                    <MyButton key={mode} setMode={setGamemode} styles={{fontSize: 'var(--s-font)'}}>
                        {mode}
                    </MyButton>
                ))}
            </div>
            <MainButton userRoot={userName} userID={user} main={true}>Search</MainButton>
        </aside>
    )}