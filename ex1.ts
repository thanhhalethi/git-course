class Student {
    name: string
    city: string

    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }
}

const s1 = new Student("ha", "hanoi")
const s2 = new Student("manh", "danang")

console.log(s1, s2)