const isFetching : boolean = true
const isLoading : boolean = false

const int : number = 42
const float : number = 4.2
const num : number = 3e10

const message : string = "Hello World"

const numberAray : number[] = [
    1,1,2,3,5,8,13
]

const numberAray2 : Array<number> = [
    1,1,2,3,5,8,13
]

const words: string[] = ['hello', 'world']

// Tuple
const constant: [string, number] = ['Vadim', 097760]

// Any
let variable: any = 42
//...
variable = 'String'
variable = []

// ================
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Hi!')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

// Type (алиас)
type Login = string
const Login: Login = 'admin'

type ID = string | number
const id_1: ID = 123
const id_2: ID = '123'

type SomeType = string | null | undefined