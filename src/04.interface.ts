interface IProduct {
    name: string
    price: number
}

const product:IProduct = {
    name: "맥북", 
    price: 1000
}

const product2:IProduct = {
    name: "아수스",
    price: 7000
}


interface IBoard {
    id: number
    title: string
    content: string
    readonly writer: string
    date: number
    hit: number
    // ? 선택적 프로퍼티
    // 만들어놓고 꼭 사용하지 않아도 된당.
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

class Product {
    name: string
    price: number
    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }
}

const product3 = new Product("mac", 1000)

