import React from 'react';
//Importação React-Icon
import styled from 'styled-components';

const DivTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    font-family: 'Poppins', sans-serif;
    height: 7vh;
    background: white;
    margin: 0.3em;
    font-weight: bolder;
    @media (max-width: 425px) {
        height: 6%;
        padding: .5em 0.5em;
        font-size: small;
        border-radius: 10px;
    }
    @media (max-width: 320px) {
        font-size: x-small;
    }
`;

const ContainerCompleted = styled.div`
    display: flex;
    align-items: center;
`;

const BtnDelete = styled.button`
    border: 0;
    background-color: white;
    cursor: pointer;
    color: red;
    padding-top: 1pt;
    @media (max-width: 1024px) {
        padding: 0; 
    }
    @media (max-width: 768px) {
        padding-top: 1pt;
    }
    @media (max-width: 425px) {
        padding: 0;
        object-position: center;
    }
`;

const DeleteBtn = styled.img`
    height: 2.5em;
    width: 2.1em;
    object-fit: contain;
    &:hover {
        opacity: 0.8;
        width: 110%;
    }
    @media (max-width: 425px) {
        height: 1.5em;
    }
    @media (max-width: 320px) {
        width: 1.2em;
    }
`;

const BtnCompleted = styled.button`
    width: 3.1em;
    height: 2.5em;
    border: 0;
    background: white;
    cursor: pointer;
    padding-bottom: 4px;
    @media (max-width: 1024px) {
        padding-bottom: 4px;
        &:hover {
            padding-bottom: 4px;
        }
    }
    @media (max-width: 425px) {
        padding: 0;
        height: 8%;
        width: 8%;
    }
`;

const Completed = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    &:hover {
        opacity: 0.8;
        width: 120%;
        height: 115%;
    }
    @media (max-width: 425px) {
        width: 1.7em;
        object-position: center;
        &:hover {
            width: 1.7em;
        }
        @media (max-width: 320px) {
            width: 1.2em;
            &:hover {
                width: 1.2em;
            }
        }
    }
`;

const TasksItem = ({ item, handleClick, handleDelete }) => {
    return (
        <DivTask
            className="task-container"
            style={item.completed ? {color:'green', textDecoration: 'line-through'} : null}>
            <p>{item.title}</p>

            <ContainerCompleted>
                <BtnDelete
                    onClick={() => handleDelete(item.id)}
                    className="remove-task-button"
                >
                    <DeleteBtn
                        src="https://w7.pngwing.com/pngs/937/199/png-transparent-computer-icons-oxygen-project-delete-button-miscellaneous-angle-rectangle.png"
                        alt=""
                    />
                </BtnDelete>
                <BtnCompleted onClick={() => handleClick(item.id)}>
                    <Completed
                        src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                        alt=""
                    />
                </BtnCompleted>
            </ContainerCompleted>
        </DivTask>
    );
};

export default TasksItem;
