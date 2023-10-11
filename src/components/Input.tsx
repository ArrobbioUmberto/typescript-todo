import React from 'react'
import classes from './Input.module.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>

}
const Input = ({ todo, setTodo }: Props) => {
    return (
        <form className={classes.form_box}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Cosa vuoi aggiungere alla lista ?' className={classes.input_box} />
            <button className={classes.add_button}>Aggiungi</button>
        </form>
    )
}

export default Input;
