async function getClub(name) {
    //return "PSG";
    /*return new Promise(async function() {
        let response = await fetch("/data/info.json");
        //console.log(response);
        let data = await response.text();
        //console.log(typeof(data));
        let json = await JSON.parse(data);
        let club = json[name]["Club"];
        console.log(club);
        return club;
    });*/
    let response = await fetch("/data/info.json");
    let data = await response.text();
    //console.log(typeof(data));
    let json = JSON.parse(data);
    let club = json[name]["Club"];
    const p = Promise.resolve(club);
    return p;
    //const jsonData = fetch("/data/info.json")
    //.then(response => response.json())
    //.then((data) => {
     //   return data.jsonData;
    //});
    //console.log(jsonData);
    //.then(data => console.log(data[name]["Club"]))
    //.then(ret => {let club = ret; return club;});
    //return "Barca";

    //const jsonData= require('./data/info.json');
    //return jsonData[name]["Club"];
}

function fulfillPromise(func, name) {
    return func(name).then(data => {return data;});
}