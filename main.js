
class Car{
    constructor(name, model, price){
        this.name = name
        this.model = model
        this.price = price
    }
    run() {
        return `Running Now`
    }
    Stop() {
        return `Car is Stopped`
    }
}

let Car1 = new Car("MG", "2022", 420000);
let Car2 = new Car("car2", "2021", 20000);
let Car1ar3 = new Car("car3", "2022", 15000);

console.log(`Car One Name Is ${Car1.name} And Model Is ${Car1.model} And Price Is ${Car1.price}`);
console.log(`Car Is ${Car1.run()}`);

// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"