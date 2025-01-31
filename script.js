// Complete the js code
class Car {
	constructor(make,model){
		this.make=make;
		this.model=model;
	}
	getMakeModel(){
		reutrn `${this.make} ${this.model}`;
	}
}

class SportsCar {
	constructor(make, model, topSpeed){
		super(make,model);
		this.topSpeed=topSpeed;
	}
		gettopSpeed(){
		return this.topSpeed;
	}
}
let car=new Car("Ferrari","Testarossa",200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
