import React, { useState } from 'react';

function TodoForm() {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="무엇을 등록하시겠습니까?"
            value={value}
            onChange={onChange}
            />
            <button>등록</button>
        </form>
    );
}

export default TodoForm;