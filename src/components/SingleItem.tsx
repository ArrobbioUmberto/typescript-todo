import React from 'react'
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
    return (
        <form className={classes.single_todo}>
            <span className={classes.text}>{todo.todo}</span>
            <div>
                <span className={classes.icon}><AiFillEdit /></span>
                <span className={classes.icon}><AiFillDelete /></span>
                <span className={classes.icon}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleItem
