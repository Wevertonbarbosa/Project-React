import React from 'react';
import TasksItem from './TasksItem';

const TasksOpen = ({ tasks, handleClick, handleDelete }) => {
     
    return (
        <>
            {tasks.map((task, index) => (
                <TasksItem key={index} item={task} handleClick={handleClick} handleDelete={handleDelete} />
            ))}
        </>
    );
};

export default TasksOpen;