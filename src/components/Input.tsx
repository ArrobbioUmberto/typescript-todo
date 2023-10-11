import React, { useRef } from 'react'
import classes from './Input.module.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addItem: (e: React.FormEvent) => void;
}
const Input = ({ todo, setTodo, addItem }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className={classes.form_box} onSubmit={(e) => { addItem(e); inputRef.current?.blur() }}>
            <input ref={inputRef} type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Cosa vuoi aggiungere alla lista ?' className={classes.input_box} />
            <button className={classes.add_button}>Aggiungi</button>
        </form>
    )
}

export default Input;
