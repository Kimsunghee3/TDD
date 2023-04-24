### Typescript 설정
```sh
$ npm init -y
$ npm install -D typescript tsc-alias ts-node tsconfig-paths nodemon
```

### jest 설정
```sh
$ npm install -D jest @types/jest
$ npm install ts-jest
```
### TS 문법
#
### never
무한루프를 돌거나 반활할 수 없는 타입을 지정할때

### void
반환값이 없는 undefined

### undefined 
값이 할당되지 않는 것

### null
그냥 값이 없을 때

### unknown
any와 진짜 비슷하지만 단 타입의 안정성만 보장
주로 외부라이브러리를 가져올 때 사용한다.

### 배열
```ts
console.log("array")

// 배열의 타입과 배열 안의 요소에 대한 타입도 각각 지정해주어야한다.
{
    const strArr: string[] = ['1','2','3']
    const numArr: number[] = [1, 2, 3]

    numArr.filter(v => v)
}
```

### 튜플
```ts
{
    const tuple: [string, number] = ["hello", 23]

    tuple[0]
    tuple[1]
}
```

### OOP


### interface
인터페이스는 추상적인 내용이므로 구현되지 않는다.
인터페이스는 객체의 구조를 정의하는 타입이다.

```ts
interface IBoard {
    id: number
    title: string
    content: string
    writer: string
    date: number
    hit: number
}

// cmd + .을 변수명에 대고 클릭하면 인터페이스를 자동으로 불러와준다.
const board:IBoard = {
    // id: 0,
    // title: "",
    // content: "",
    // writer: "",
    // date: 0,
    // hit: 0
}
```

인터페이스를 사용하게 되면 아래와 같이 인터페이스를 불러와 속성에 대한 타입을 지정해줄 수가 있다.
```ts
interface IProduct {
    name: string
    price: number
}

// 변경 전
const product: {name: string, price: number} = {
    name: "",
    price: 
}

// interface 적용 후
const product:IProduct = {
    name: "맥북", 
    price: 1000
}
```

### ? 선택적 프로퍼티
- 만들어놓고 꼭 사용하지 않아도 된당.

```ts
interface IBoard {
    id: number
    title: string
    content: string
    writer: string
    date: number
    hit: number
    like?: number
}

const board:IBoard = {
    id: 0,
    title: "",
    content: "",
    writer: "",
    date: 0,
    hit: 0
}
```

### readonly
한번 객체를 생성한 이후로 수정할 수가 없다.
```ts
interface IBoard {
    id: number
    title: string
    content: string
    readonly writer: string
    date: number
    hit: number
    ?like: number
}

const board:IBoard = {
    id: 0,
    title: "",
    content: "",
    writer: "",
    date: 0,
    hit: 0
}

board.writer = "chop"
```