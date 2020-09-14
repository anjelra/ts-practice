// 액션 type 선언
// 액션 생성 함수 선언
// 리듀서 선언(리듀서는 Action에 따른 state 값을 어떻게 변화시켜줄지를 정의한다.)

// 액션 type 선언
// type 선언할 경우에 as const 라는 키워드를 붙여주면(typescript 문법임.), 우리가 추후 액션 생성함수를 통해
// 액션 객체를 만들게 됐을 때 type의 TypeScript 타입이 string이 되지 않고 실제값을 가리키게 됩니다.
const INCREASE = 'counter/INCREASE' as const; /** 여기서의 type 은 리덕스 액션에 들억가게 될 type 값. */
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성 함수 선언 (화살표 함수를 쓰게 되면 return 을 사용하지 않아도 되기 때문에 소스가 간결해진다.)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increasBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
});

// 액션 객체들에 대한 type 준비(여기서의 type은 typescript 의 타입을 의미한다. 나중에 리듀서를 작성할 떄 action 파라미터의 타입을 설정하기 위해 우리가 만든 모든 액션들의 typescript 타입을 준비해 줘야 한다.)
type CounterAction =    ReturnType<typeof increase>
                      | ReturnType<typeof decrease>
                      | ReturnType<typeof increasBy>;

// 상태의(state) 타입과 상태의 초깃값 선언하기
type CounterState = {
    count: number
};

const initialState: CounterState = {
    count: 0
};

// 리듀서 작성하기
function counter(state: CounterState = initialState, action: CounterAction): CounterState {
    switch(action.type) {
        case INCREASE:
            return {count: state.count + 1};

        case DECREASE:
            return {count: state.count - 1};

        case INCREASE_BY:
            return {count: state.count + action.payload};
            
        default:
            return state;    
    }
}

export default counter;