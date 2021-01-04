function cityFacts(city){
    return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}

let Tokyo = {
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}

console.log(cityFacts(Tokyo));