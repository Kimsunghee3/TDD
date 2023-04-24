{
    const num: number = 10
    // 소수점
    const float: number = 3.14
    const nan: number = NaN
    const infinity: number = Infinity
}

{
    const str: string = "hello javascript"
}

{
    const bool: boolean = true
}

{
    let nullValue: null = null
    let undefinedValue: undefined = undefined
}

{
    // 매개변수에도 무조건 타입을 지정해줄 것
    // void: return이 없음
    const print = (str:string):void => {
        console.log(`hello javascript`)
        return undefined
    }
    // a,b인자의 type이 number, return의 타입도 number이다.
    const sum = (a:number,b:number):number => a + b

    print("hello world")

    const result = sum(1,2)
    console.log("result:", result)
}

// 잘 사용하지 않는다..
{
    const throwErr = () => {
        throw new Error("일단 에러~")
    }
    
    const repository = ():number => {
        throw new Error("일단 에러~")
        return 10
    }
    
    const service = () => {
        throw new Error("일단 에러~")
        const num = repository()
        return "hello world" + num
    }

    const controller = ():void => {
        try {
            const result = service()
        } catch (e){
        console.log(e)
        }
    }

    controller()
}  

// 참조타입
// object let const
{
    const obj: object = {}
    const arr: object = []
    const func: object = () => {}
}

// any를 사용하게 되면 타입추론이 어려우므로 사용하지 않는 편이 좋다.
// any: 어떤 타입이든 할당할 수 있다. 타입 안정서이 보장안됨
{
    const a: any = 10

    const b: number = 10

    class Block {
        constructor(){

        }

        getBlock(str:string):number{
            return parseInt(str)
        }
    }

    const block = new Block()

    block.getBlock("asdf")
}

// unknown: 어떤 타입이든 할당할 수 있다. 타입안정성이 보장된다.
{
    const a:unknown = 10

    const getValue = (value:unknown):string => {
        if(typeof value == "string")return value
        return ""
    }

    const fn = getValue("hello world")
}

