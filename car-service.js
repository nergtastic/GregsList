function CarService(){
    let cars = []
    cars.push(new Car('Chevy', 'Truck', "https://i.ytimg.com/vi/-aKxqzoNh1s/hqdefault.jpg", 1988, 1899, 'You can really get swallowed up in this thing. Heated leather tongue. Conversation starter. Orange you glad you didn\'t buy a normal car?'))

    function Car (make, model, imgURL, year, price, description) {

        this.make = make
        this.model = model
        this.imgURL = imgURL
        this.year = year
        this.price = price
        this.description = description  

    }
    
    this.getCars = function(){
        let carsCopy = []
        for (let i =0; i < cars.length; i++){
            const car = cars[i];
            let carCopy = new Car(car.make, car.model, car.imgURL, car.year, car.price, car.description)
            carsCopy.push(carCopy)
        }
        console.log(carsCopy)
        return carsCopy
    }
    
    this.makeCar = function (data) {
        cars.push(new Car(data.make.value, data.model.value, data.imgURL.value, data.year.value, data.price.value, data.description.value))
        console.log(cars)
    }

}