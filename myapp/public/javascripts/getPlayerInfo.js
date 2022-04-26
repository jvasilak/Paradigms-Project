function getClub(name) {
    //return "PSG";
    fetch("/data/info.json");
    return "PSG";

    //const jsonData= require('./data/info.json');
    //return jsonData[name]["Club"];
}