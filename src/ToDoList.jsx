import PropTypes from 'prop-types';
import React from 'react';
function ToDoList(props)
{
    //Variable contenant l'état des tâches
    //Variable contenant le nom des tâches
    /*TO DO :
        - ajout de tâches
        - suppression de tâches
        - Marquer les tâches comme terminées
        - Filtrage des tâches : Ajouter un fitre selon l'état de la tâche
        - Modification de tâches
        - Sauvegarde des tâches : sauvegarder en local les tâches

    */ 

    return(
        <>
            <h1>{props.title}</h1>
            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </>
    );
}
ToDoList.propTypes = {
    title: PropTypes.string
}
ToDoList.defaultProps = 
{
    title: "My To Do List"
}

export default ToDoList;