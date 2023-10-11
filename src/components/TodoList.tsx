import React from 'react'
import classes from './TodoList.module.css'
import SingleItem from '../components/SingleItem'
import { Todo } from '../model';
interface Props {
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({ list, setList }: Props) => {
    return (
        <div className={classes.list}>
            {list.map(todo => <SingleItem todo={todo} key={todo.id} list={list} setList={setList} />)}
        </div>
    )
}

export default TodoList;
