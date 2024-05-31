import classes from './MatchFilling.module.css';
import { MatchFillingProps } from '../../types';

export function MatchFilling({ data }: MatchFillingProps) {
  return (
    <>
      <img className={classes.map_image} src={data.img} alt="map" />
      <div className={classes.match_info}>
        <div className={classes.wrap_s}>
          <img className={classes.agent_image} src={data.agentImg} alt="agent" />
          <div className={classes.container_xs}>
            <span style={{ fontSize: 'var(--xs-font)' }} className={classes.result_text}>{data.nickname}</span>
            <h1 className={classes.main_title}>{data.result}</h1>
            <span className={classes.result_text}>{data.won}:{data.lost}</span>
          </div>
        </div>
        <div className={`${classes.container_xs} ${classes.display}`}>
          <h2>{data.map}</h2>
          <span className={classes.result_text}>{data.mode === 'Normal' ? 'Unrated' : data.mode}</span>
          <span style={{ fontSize: 'var(--xs-font)' }} className={classes.result_text}>{data.date}</span>
        </div>
        <div className={classes.wrap_xs}>
          <div className={classes.container_xs}>
            <span>K/D/A</span>
            <span className={classes.main_text}>{data.kills}/{data.death}/{data.assists}</span>
          </div>
          <div className={classes.container_xs}>
            <span>KD</span>
            <span className={classes.main_text}>{data.kda}</span>
          </div>
        </div>
      </div>
    </>
  );
}