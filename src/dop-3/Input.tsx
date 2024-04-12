import React, {ChangeEvent, RefObject} from 'react';
type InputType={
    newTitle: RefObject<HTMLInputElement>
    //setNewTitle: (value: string)=>void
}
export const Input:React.FC<InputType> = ({newTitle,
                                             }) => {
    // const onChangeHandler=(event: ChangeEvent<HTMLInputElement>)=>{
    //     setNewTitle(event.currentTarget.value)
    // }
    return (
        <input ref={newTitle}
               // onChange={onChangeHandler}
        />
    );
};

