import { getFish } from './database.js'
import { mostHolyFish, soldierFish } from './database.js'

const allFish = getFish()
const mike = mostHolyFish();
const mike2 = soldierFish();

for (const fish of allFish) {
console.log(fish)
}

import { FishList } from './fishList.js'


const parentHTMLElement = document.querySelector(".michael")


parentHTMLElement.innerHTML = FishList();
