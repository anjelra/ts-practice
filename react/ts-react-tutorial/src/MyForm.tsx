import React, { useState, useRef } from 'react';

type MyFormProps = {
    // MyFormProps type은 form 이라는 매개변수를 받으며(form 매개변수는 name, description을 포함하고 있음) return 값이 없는 함수.
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({onSubmit}: MyFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const {name, description} = form;

    // e 타입이 무엇인지 모를 경우에는 일단 e: any 라고 적어두고
    // 작성한 input의 onChange에 마우스를 올려보면
    // React.ChangeEvent<HTMLInputElement> 타입이라는 것을 알 수 있다.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);     // onSubmit을 실행한 후,

        setForm({           // 초기화
            name: '',
            description: ''
        });

        // typescript에서는 inputRef.current 안의 값을 사용하려면 null 체킹을 해줘야 한다.
        // 특정 값이 정말 유효한지 유효하지 않는지를 체크해야 한다.
        // 만약 어떤 타입이 undefined이거나 null 일 수 있는 상황에서는, 해당 값이 유효한지 체킹하는 작업을 꼭 해줘야
        // 오류도 사라지고 자동완성도 잘 이루어진다.
        if (!inputRef.current) {
            return;
        }

        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} ref={inputRef}/>
            <input name="description" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;