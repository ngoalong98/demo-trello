import React from 'react';
import './Column.scss';
import Task from 'components/Task/Task';


function Column() {
    return (
        <div className="column">
            <header>Header</header>
            <ul className="task-list">
                <Task />
                <li className="task-item"> test demo trello </li>
                <li className="task-item"> test demo trello </li>
                <li className="task-item"> test demo trello </li>
                <li className="task-item"> test demo trello </li>
            </ul>
            <footer>Footer</footer>
        </div>
    );
}

export default Column;