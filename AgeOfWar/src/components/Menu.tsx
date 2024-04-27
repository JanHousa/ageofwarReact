import React from 'react';

type MenuProps = {
    onStartGame: () => void;
};

const Menu = ({ onStartGame }: MenuProps) => {
    return (
        <div className="menu">
            <div className="card">
                <img src="src/assets/images/archer.gif" alt="Knight GIF" />
                <h1>Castle Craft</h1>
                <p>Choose difficulty:</p>
                <div>
                    <button onClick={onStartGame}>Easy</button>
                    <button onClick={onStartGame}>Medium</button>
                    <button onClick={onStartGame}>Hard</button>
                </div>
                <p className="author">Game by Jan Housa</p>
                <p className="reference">This is a remake of Age of War</p>
            </div>
        </div>
    );
};

export default Menu;