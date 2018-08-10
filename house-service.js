function HouseService(){
    let houseService = this
    let houses = []
    houses.push(new House(5, 3, "https://cdn-image.travelandleisure.com/sites/default/files/1524236418/austin-skeleton-home-WEIRDHOMES0418.jpg", 2, 2001, 150000, 'Try living in this thing. Just try it.'))

    function House (bedrooms, bathrooms, imgUrl, levels, year, price, description) {

        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.imgUrl = imgUrl
        this.levels = levels
        this.year = year
        this.price = price
        this.description = description  

    }

    this.getHouses = function(){
        let housesCopy = []
        for (let i =0; i < houses.length; i++){
            const house = houses[i];
            let houseCopy = new House(house.bedrooms, house.bathrooms, house.imgUrl, house.levels, house.year, house.price, house.description)
            housesCopy.push(houseCopy)
        }
        console.log(housesCopy)
        return housesCopy
    }

    this.loadHouses = function (cb) {
        $.get('https://bcw-gregslist.herokuapp.com/api/houses').then(res => {
            houses = res.data
            cb()
        })
    }

    this.makeHouse = function (data, draw) {
        // houses.push(new House(data.bedrooms.value, data.bathrooms.value, data.imgUrl.value, data.levels.value, data.year.value, data.price.value, data.description.value))
        // console.log(houses)
        let newHouse = new House(
            data.bedrooms.value, 
            data.bathrooms.value,
            data.imgUrl.value,
            data.levels.value, 
            data.year.value, 
            data.price.value,
            data.description.value
        )
        $.post('https://bcw-gregslist.herokuapp.com/api/houses', newHouse).then(res =>{
            console.log(res)
            houseService.loadHouses(draw)
        })
    }
 
    
}