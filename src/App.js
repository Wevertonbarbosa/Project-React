import './App.css';

import { useState } from 'react';

//Gerador de Id aleatórios
import { v4 as uuidv4 } from 'uuid';
//EXportação de componentes
import TasksOpen from './Components/TasksOpen';
import TasksAdd from './Components/TasksAdd';

import styled from 'styled-components';



const ContainerGeral = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
`;

const SubContainer = styled.div`
    border: 0.2em solid gray;
    text-align: center;
    width: 40vw;
    height: 100vh;
    margin: 1em;
    background-image: radial-gradient(
        circle at 30.22% 66.6%,
        #475a81 0,
        #0f1013 50%,
        #000000 100%
    );
    box-shadow: -8px 8px 8px black;
`;

const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    margin: 0.8em;
`;

function App() {
    //Array com o State para armazenar as Tasks
    const [tasks, setTasks] = useState([]);

    //Adicionando as Tarefas!
    const handleTask = (taskTitle) => {
        const newTask = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];

        setTasks(newTask);
    };

    //Deletando as Tarefas
    const handleDelete = (taskId) => {
        const newArray = tasks.filter((task) => task.id !== taskId);
        setTasks(newArray);
    };

    //Forma de Finalizar a task ou deixa com o status de concluída
    const handleClick = (taskId) => {
        const newTask = tasks.map((task) => {
            if (task.id === taskId)
                return { ...task, completed: !task.completed };

            return task;
        });
        setTasks(newTask);
    };

    return (
        <>
            <ContainerGeral>
                <SubContainer>
                    <Title>Lista de Tarefas</Title>
                    <TasksAdd handleTask={handleTask} />
                    <Title>Tarefas</Title>
                    <TasksOpen
                        tasks={tasks}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                    />
                    <h2>{tasks.length === 0 ? 'Não há Tarefas' : null}</h2>
                </SubContainer>
            </ContainerGeral>
        </>
    );
}

export default App;
