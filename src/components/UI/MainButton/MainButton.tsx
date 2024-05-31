// MainButton.tsx
import classes from './MainButton.module.css';
import { MainButtonProps } from '../../../types'; 

export function MainButton({ children, main, userID, userRoot }: MainButtonProps) {
    function setNewUser() {
        userRoot.name.setGameName(userID.gameName);
        userRoot.tag.setTagLine(userID.tagLine);
    }

    return (
        <button 
            onClick={() => {
                if (userID.tagLine && userID.gameName) {
                    setNewUser();
                }
            }} 
            className={`${classes.myButton} ${main ? classes.myButton_main : ''}`}
        >
            {children}
        </button>
    );
}