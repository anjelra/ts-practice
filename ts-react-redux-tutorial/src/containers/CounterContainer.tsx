import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {increase, decrease, increasBy} from '../modules/counter';

function CounterContainer() {
    // 아까 reducer를 합친 index.ts 파일에서 
    // export type RootState = ReturnType<typeof rootReducer>;
    // 넘겨준 것을 여기에서 사용.
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease= () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease())
    };

    const onIncreaseBy = (diff: number) => {
        dispatch(increasBy(diff));
    }
    return (
        <Counter 
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
}

export default CounterContainer;