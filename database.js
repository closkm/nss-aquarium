const database = {
    fish: [
        {
            image: "https://i.guim.co.uk/img/media/d7f3601b5872853cbdff4f0cef95e2ef268409a3/0_177_5315_3189/master/5315.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3bc542f9681932a1a85b5cc862b2c59d",
            name: "superlong",
            species: "shark",
            length: 3,
            location: "mikes home",
            food: "mike"
        },
        {
            image: "https://th-thumbnailer.cdn-si-edu.com/NaGo-Ynjy5Op3n9PYq7iySRQAO8=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg",
            name: "errrrr",
            species: "errrr",
            length: 50,
            location: "mikeerrrrs home",
            food: "errrrrr"
        }
    ]
}
    export const getFish = () => {
        return database.fish.map(fish => ({...fish}))
    }

    export const mostHolyFish = () => {
        const holyFish = [];
        for(const fishes of database.fish){
            if(fishes.length%3 == 0){
                holyFish.push(fishes)
            }
        }
         console.log(holyFish);
    }

    export const soldierFish = () => {
        const soldiers = [];
        for(const fishes of database.fish){
            if(fishes.length%5 == 0){
                soldiers.push(fishes)
            }
        }
         console.log(soldiers);
    }

    export const nonHolyFish = () => {
        const regularFish = [];
        for(const fishes of database.fish){
            if(fishes.length%5 == 0){
                regularFish.push(fishes)
            }
        }
         console.log(regularFish);
    }