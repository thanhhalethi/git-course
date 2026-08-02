// class Student {
//     name: string
//     city: string

//     constructor(name: string, city: string) {
//         this.name = name;
//         this.city = city;
//     }
// }

// const s1 = new Student("ha", "hanoi")
// const s2 = new Student("manh", "danang")

// console.log(s1, s2)


// type Buyer = {
//     name: string;
//     price: number
// }

// const buyers: Buyer[] = [
//     { name: "ha", price: 54 },
//     { name: "phuong", price: 53 },
//     { name: "quynh", price: 54 },
//     { name: "xuan", price: 62 },
//     { name: "dung", price: 60 }
// ]

// for (let i = 0; i < buyers.length; i++) {
//     let currentBuyer = buyers[i].name;
//     let priceAfter = buyers[i].price - 16;
//     console.log(currentBuyer + " : " + priceAfter)
// }

class TestClass {
    constructor() {
        console.log("this is a constructor of a test class");
    }
}


class TestClassChild extends TestClass {
    // constructor() {
    //     super();
    //     console.log("this is a constructor of a test class child")
    // }
}

// new TestClassChild();