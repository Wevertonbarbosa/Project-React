import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Btn from './Btn';


//Usar sempre o Styled-components fora da função para não hevar danos colaterais na função;
    //Variaveis para estilização 
    const ContainerInput = styled.div `
        width: 100%;
        position: relative;
       
    `

    const DivInput = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 40px;
        
    `;




const TasksAdd = ({ handleTask }) => {
    const [input, setInput] = useState('');

    let handleInput = (e) => {
        setInput(e.target.value);
        
    };

    const handleAddTask = (e) => {
        handleTask(input);  
        setInput('');
    };

    return (
        <ContainerInput>
            <DivInput>
                <input
                    id='inputTask'
                    onChange={handleInput}
                    value={input}
                    type="text"
                    maxLength={40}
                />      
                <label id='labelTask' htmlFor="">Tarefas</label> 
                <Btn onClick={handleAddTask}>Adicionar</Btn>
            </DivInput>
        </ContainerInput>

    )


};

export default TasksAdd;