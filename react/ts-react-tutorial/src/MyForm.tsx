import React, { useState } from 'react';

type MyFormProps = {
    // MyFormProps type은 form 이라는 매개변수를 받으며(form 매개변수는 name, description을 포함하고 있음) return 값이 없는 함수.
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({onSubmit}: MyFormProps) {
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;