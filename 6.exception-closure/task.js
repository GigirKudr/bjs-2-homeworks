function parseCount(value){
    const parsedValue =  Number.parseFloat (value)
    if (Number.isNaN(parsedValue)) {
        throw new Error("Невалидное значение")
    }
    return parsedValue
}

function validateCount(value) {
    try {
        const parsedValue = parseCount(value)
        return parsedValue
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }

        this.a = a
        this.b = b
        this.c = c
    }

    get perimeter() {
        return this.a + this.b + this.c
    }

    get area() {
        const s = (this.a + this.b + this.c) / 2
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
        return Number(area.toFixed(3))
    }
}



function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (e) {
        console.log(e)

        return {
            get perimeter (){
                return "Ошибка! Треугольник не существует"
            },
            get area(){
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}