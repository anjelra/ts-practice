import React from 'react';

// type 또는 interface 를 사용해서 사용할 타입을 정해준다. 결국은 타입을 정해주는 거를 제외하면 자바스크립트 리엑트랑 다를게 없다.
// 1. 타입을 정해준다.
// 2. 컴포넌트를 작성해 준다.(function 또는 화살표 함수를 사용한다.)
type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;    // 아무것도 리턴하지 않는 매개변수는 string type을 받는 함수라는 뜻.
};

function Greetings({name, mark, optional, onClick}: GreetingProps) {
    const handleClick = () => {
        onClick(name)
    };

    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;