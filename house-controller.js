function HouseController() {
    let houseService = new HouseService()

    this.setup = function () {
        let template = `
        <form class="form-group greg-form" onsubmit="app.controllers.houseController.makeHouse(event)">
            <label for="bedrooms" style="margin: 10px 0px 0px 25px;">Bedrooms</label>
            <input type="number" name="bedrooms" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="bathrooms" style="margin: 10px 0px 0px 25px;">Bathrooms</label>
            <input type="number" name="bathrooms" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="imgURL" style="margin: 10px 0px 0px 25px;">Image URL</label>
            <input type="text" name="imgURL" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="levels" style="margin: 10px 0px 0px 25px;">Levels</label>
            <input type="number" name="levels" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="year" style="margin: 10px 0px 0px 25px;">Year Built</label>
            <input type="number" name="year" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="price" style="margin: 10px 0px 0px 25px;">Price</label>
            <input type="number" name="price" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="description" style="margin: 10px 0px 0px 25px;">Description</label>
            <input type="text" name="description" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <button type="submit" style="margin: 25px;">Post House</button>
        </form>
        <div id="houses"></div>
        `
    document.getElementById('maker').innerHTML = template
    draw()
    
    }

    function draw(){
        let houses = houseService.getHouses()
        let template = ""

        for(let i=0; i < houses.length; i++){
            const house = houses[i];
            template += `
            <div class="item-details">
                <p>Bedrooms: ${house.bedrooms}</p>
                <p>Bathrooms: ${house.bathrooms}</p>
                <p>Levels: ${house.levels}</p>
                <p>Year Built: ${house.year}</p>
                <p>Price: ${house.price}</p>
                <p style="width: 300px;">Description: ${house.description}</p>
                <img src="${house.imgURL}" alt="" style="width: 300px;">
            </div>
            `
        }
        document.getElementById('houses').innerHTML = template
    }

    this.makeHouse = function (event) {
        event.preventDefault();
        let formData = event.target
        houseService.makeHouse(formData)
        // let keys = Object.keys(formData)
        formData.bedrooms.value = ""
        formData.bathrooms.value = ""
        formData.imgURL.value = ""
        formData.levels.value = ""
        formData.year.value = ""
        formData.price.value = ""
        formData.description.value = ""
        draw()
    }
}