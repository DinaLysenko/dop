import React from 'react';

type ButtonType = {
    name: string
    onClick: () => void
}
export const Button: React.FC<ButtonType> = ({name, onClick}) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
};

