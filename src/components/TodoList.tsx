import React, { useEffect } from 'react'
import classes from './TodoList.module.css'
import SingleItem from '../components/SingleItem'
import { Todo } from '../model';
interface Props {
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({ list, setList }: Props) => {
    useEffect(() => {
        const todoListFromLocalStorage = loadTodoListFromLocalStorage();
        if (todoListFromLocalStorage.length > 0) {
            setList(todoListFromLocalStorage);
        }
    }, []);
    return (
        <div className={classes.list}>
            {list.map(todo => <SingleItem todo={todo} key={todo.id} list={list} setList={setList} />)}
        </div>
    )
}

export default TodoList;
const loadTodoListFromLocalStorage = () => {
    try {
        const todoListString = localStorage.getItem('todoList');
        console.log(todoListString, 'qua')
        if (todoListString) {
            return JSON.parse(todoListString) as Todo[];
        }
    } catch (error) {
        console.error('Errore nel caricamento dei dati dal Local Storage:', error);
    }
    return [];
};
