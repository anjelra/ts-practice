// interface 사용해보기
interface Shape {       // interface 선언할 때, ?를 쓰지 않으면 필수로 존재해야 한다.
    getArea(): number;  // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환형은 number가 된다.
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    // width: number;
    // height: number;

    constructor(private width: number,private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

const circle: Circle = new Circle(5);
console.log(circle.radius);

const rectangle: Rectangle = new Rectangle(10, 5);
// console.log(rectangle.width);   // width, height 는 private로 지정된 접근자이기 떄문에 밖에서는 접근을 할 수 없다.

shapes.forEach(shape => {
    console.log(shape.getArea());
});


// 일반 객체를 interface 로 타입 설정하기
// interface Person {
//     name: string;
//     age?: number;   // ?를 썼다는 것은 있어도 되고 없어도 되고!!
// }

// interface Developer extends Person {    // Developer interface는 Person을 상속받았기 때문에, Person의 함수든 변수든 다 사용할 수 있다.
//     skills: string[]
// }

// const person: Person = {
//     name: '김사랑',
//     age: 20
// };

// const developer: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };

// const people: Person[] = [person, developer];
// // const people: Person = person;

/** Type Alias 사용하기 */
type Person = {
    name: string,
    age?: number
};

// $ 는 Intersection으로서 두개 이상의 타입들을 합쳐준다.
type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: '김사랑'
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

type People = Person[]; // Person[]를 이제 앞으로 People 이라는 타입으로 사용할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';

const colors: Color[] = ['red', 'yellow'];

/** interface 와 type 은 구분해서 사용할 필요는 없지만, 일관성있게 쓰면 된다. */

/** Generics(타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.) */
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
};

const merged = merge({foo: 1}, {bar: 1});
console.log(merged);

function wrap<T>(param: T): Object {
    return {
        param
    };
}

const wraps = wrap(10);

console.log(wraps);

/** interface 에서 Generics 사용하기 */
interface Items<T> {
    list: T[];
}

const itmes: Items<string> = {
    list: ['a', 'b', 'c']
};

console.log('__items', itmes);

/** class에서 Generic 적용하기 */
class Queue<T> {
    list: T[] = []; // 초기화

    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();

for(let i = 0; i < 5; i++) {
    queue.enqueue(i);
}

console.log(queue.length);

let j = 0;
while (j < 5) {
    console.log(queue.dequeue());
    j++;
}


