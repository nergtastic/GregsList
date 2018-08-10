function CarService(){
    let carService = this
    let cars = []
    cars.push(new Car('Chevy', 'Something', "https://i.ytimg.com/vi/-aKxqzoNh1s/hqdefault.jpg", 1988, 1899, 'You can really get swallowed up in this thing. Heated leather tongue. Conversation starter. Orange you glad you didn\'t buy a normal car?'))

    function Car (make, model, imgUrl, year, price, description) {

        this.make = make
        this.model = model
        this.imgUrl = imgUrl
        this.year = year
        this.price = price
        this.description = description  

    }
    
    this.getCars = function(){
        let carsCopy = []
        for (let i =0; i < cars.length; i++){
            const car = cars[i];
            let carCopy = new Car(car.make, car.model, car.imgUrl, car.year, car.price, car.description)
            carsCopy.push(carCopy)
        }
        console.log(carsCopy)
        return carsCopy

    }

    this.loadCars = function (cb) {
        $.get('https://bcw-gregslist.herokuapp.com/api/cars').then(res => {
            cars = res.data
            cb()
        })
    }
    
    this.makeCar = function (data, draw) {
        // cars.push(new Car(data.make.value, data.model.value, data.imgUrl.value, data.year.value, data.price.value, data.description.value))
        // console.log(cars)
        let newCar = new Car(
            data.make.value, 
            data.model.value, 
            data.imgUrl.value, 
            data.year.value, 
            data.price.value, 
            data.description.value
        )
        $.post('https://bcw-gregslist.herokuapp.com/api/cars', newCar).then(res =>{
            console.log(res)
            carService.loadCars(draw)
        })
    }

}