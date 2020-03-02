interface IRect {
   readonly id: string
   color?: string
   size: {
       width: number
       height: number
   }
}

const rect1: IRect = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: IRect = {
    id: '456',
    size: {
        width: 10,
        height: 20
    }
}

rect2.color = 'black'

const rect3 = {} as IRect
const rect4 = <IRect>{}

// наследование интерфейсов

interface IRectWithArea extends IRect {
    getArea: () => number
}

const rect5: IRectWithArea = {
    id: '789',
    size: {
        width: 25,
        height: 25
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// интерфейсы в классах

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// интерфейс для обьекта с динамическими ключами

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}