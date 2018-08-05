function CarController() {
    let carService = new CarService()


    this.setup = function () {
        let template = `
        <form class="form-group greg-form" onsubmit="app.controllers.carController.makeCar(event)">
            <label for="make" style="margin: 10px 0px 0px 25px;">Make</label>
            <input type="text" name="make" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="model" style="margin: 10px 0px 0px 25px;">Model</label>
            <input type="text" name="model" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="imgURL" style="margin: 10px 0px 0px 25px;">Image URL</label>
            <input type="text" name="imgURL" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="year" style="margin: 10px 0px 0px 25px;">Year</label>
            <input type="number" name="year" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="price" style="margin: 10px 0px 0px 25px;">Price</label>
            <input type="number" name="price" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="description" style="margin: 10px 0px 0px 25px;">Description</label>
            <input type="text" name="description" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <button type="submit" style="margin: 25px;">Post Car</button>
        </form>
        <div id="cars"></div>
        `
    document.getElementById('maker').innerHTML = template
    draw()
    
    }

    function draw(){
        let cars = carService.getCars()
        let template = ""

        for(let i=0; i < cars.length; i++){
            const car = cars[i];
            template += `
            <div class="item-details">
                <p style="float: left; width: 50%;">Make: ${car.make}</p>
                <p style="float: right; width: 50%;">Model: ${car.model}</p>
                <p style="float: left; width: 50%;">Year: ${car.year}</p>
                <p style="float: right; width: 50%;">Price: ${car.price}</p>
                <p style="width: 300px;">Description: ${car.description}</p>
                <img src="${car.imgURL}" alt="" style="width: 300px;">
            </div>
            `
        }
        document.getElementById('cars').innerHTML = template
    }

    this.makeCar = function (event) {
        event.preventDefault();
        let formData = event.target
        carService.makeCar(formData)
        // let keys = Object.keys(formData)
        formData.make.value = ""
        formData.model.value = ""
        formData.imgURL.value = ""
        formData.year.value = ""
        formData.price.value = ""
        formData.description.value = ""
        draw()
    }

}