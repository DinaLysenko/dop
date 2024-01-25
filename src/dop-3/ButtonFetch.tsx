import React from 'react';
type ButtonFetchType={
    name: string
    onClick: ()=>void
}
export const ButtonFetch:React.FC<ButtonFetchType>= ({name, onClick}) => {
    const onClickHandler=()=>{
        onClick()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

