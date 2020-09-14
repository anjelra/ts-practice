// 상태 전용 context와 dispatch 전용 context를 따로 분리해서 만들게 되면
// TodoForm 컴포넌트처럼 상태는 필요하지 않고 디스패치 함수만 필요한 컴포넌트도 상태가 업데이트될 때 리렌더링되게 되므로,
// 불필요한 렌더가 일어나게 된다. 두 개의 Context를 만들게 되면 이러한 문제들을 방지할 수 있다.
import {createContext}  from 'react';

// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 내보내기.
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodoState = Todo[];

const TodoStateContext = createContext<TodoState | undefined>(undefined);