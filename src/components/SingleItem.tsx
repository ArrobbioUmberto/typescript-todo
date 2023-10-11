import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import classes from './SingleItem.module.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
interface Props {
    todo: Todo,
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleItem: React.FC<Props> = ({ todo, list, setList }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const Done = (id: number) => {
        setList(list.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    const Delete = (id: number) => {

        setList(list.filter((todo) => todo.id !== id))
    }
    const Edit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setList(list.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => { inputRef.current?.focus() }, [edit])
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(list));
    }, [list]);
    return (
        <form className={`${classes.single_todo} ${todo.isDone ? classes.done : classes.undone}`} onSubmit={(e) => Edit(e, todo.id)}>
            {edit ? (<div className={classes.list_box}><input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /></div>) :
                todo.isDone ? (<div className={classes.list_box}><s className={classes.text}>{todo.todo}</s></div>)
                    : (<div className={classes.list_box}><span className={classes.text}>{todo.todo}</span></div>)}


            <div className={classes.button}>
                <span className={classes.icon} onClick={() => { if (!edit && !todo.isDone) { setEdit(!edit) } }}><AiFillEdit /></span>
                <span className={classes.icon} onClick={() => Delete(todo.id)} > <AiFillDelete /></span>
                <span className={classes.icon} onClick={() => Done(todo.id)}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleItem
