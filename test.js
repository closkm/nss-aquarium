const fishArray = [];

class Fish{
    constructor(img, species, length, name, location, food){
        this.img = img;
        this.species = species;
        this.length = length;
        this.name = name;
        this.location = location;
        this.food = food;
    }
}

const newFish = (img, species, length, name, location, food) =>{
    const species = new Fish(img, species, length, name, location, food);
    fishArray.push(species)
}