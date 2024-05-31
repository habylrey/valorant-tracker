import classes from './ErrorScreen.module.css'
import valoGraff from '../../assets/gif/Sova_Spray_1.webp'
export function ErrorScreen () {
    return(
        <div className={classes.errorScreen_wrap}>
            <h1 className={classes.errorScreen_title__main}>Not found</h1>
            <img className={classes.errorScreen_img} src={valoGraff} alt='sad spray' />
            <h3 className={classes.errorScreen_title}>This account is private or Riot ID is incorrect</h3>
        </div>
    )
}