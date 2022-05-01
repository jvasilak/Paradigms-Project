const infoFile = "/data/info.json";
let club = null;


function loadPage(name) {
    let clubPromise = getClub(name);//.then(function(data) {club = data; console.log(club);});
    console.log(clubPromise);
    let r = club;
    return clubPromise.PromiseResult;
}
//let found = false;
async function getClub(name) {
    /*
    let club = null;
    let found = false;
    let x = new XMLHttpRequest();
    x.open("GET", infoFile, true);
    x.onreadystatechange = function ()
    {
        if(x.readyState === 4)
        {
            if(x.status === 200 || x.status == 0)
            {
                const response = x.responseText;
                const json = JSON.parse(response);
                club = json[name]["Club"];
                console.log("Inner: " + club);
                found = true;
            }
        }
    }
    x.send(infoFile);
    return club;*/
    let response = await fetch("/data/info.json");
    let data = await response.text();
    //console.log(typeof(data));
    let json = JSON.parse(data);
    let club = json[name]["Club"];
    //const p = Promise.resolve(club);
    return club;
}

function returnValue(value) {
    return value;
}

function fulfillPromise(func, name) {
    return func(name).then(data => {return data;});
}