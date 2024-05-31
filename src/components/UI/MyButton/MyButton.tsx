import classes from './MyButton.module.css'
export function MyButton ({children, styles, setMode}) {
    function setNewMode () {
        setMode(children)
    }
    return(
        <button style={styles} onClick={()=>setNewMode()}  className={`${classes.myButton}`}>{children}</button>
    )
}