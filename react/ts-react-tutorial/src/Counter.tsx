import React, {useReducer} from 'react';

/** useState를 이용해 봄 */
// function Counter() {
//     const [count, setCount] = useState<number>(0);
//     const onIncrease = () => setCount(count + 1);
//     const onDecrease = () => setCount(count - 1);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <div>
//                 <button onClick={onIncrease}>+1</button>
//                 <button onClick={onDecrease}>-1</button>
//             </div>
//         </div>
//     );
// }

// export default Counter;

/** userReducer를 이용해 봄 */
type Action = {type: 'INCREASE'} | {type: 'DECREATE'};

function reducer(state: number, action: Action): number {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;

        case 'DECREATE':
            return state - 1;

        default:
            throw new Error('unhandled action');
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREATE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;