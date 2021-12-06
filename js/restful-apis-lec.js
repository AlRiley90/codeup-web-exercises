const API_URL = 'https://vagabond-glacier-verse.glitch.me/dogs'

function getDogs(){
    return fetch(API_URL)
        .then((response)=>response.json());
}

function getDog(id){
    return fetch(`${API_URL}/${id}`)
        .then((response)=>response.json())
}
getDog(11).then((dog)=>console.log(dog));

//Edit a dog by ID.
function editDog(dog){
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)
    };
    return fetch(`${API_URL}/${dog.id}`, options)
        .then((response)=>response.json())
}

// let piper = {
//     name: "Piper",
//     isGoodDog: true,
//     id: 11,
//     age: 8
// }
// editDog(piper).then((data)=>console.log(data))

//Delete dog by id
function deleteDog(id){
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return fetch(`${API_URL}/${id}`, options)
        .then((response)=>console.log("Deleted dog with id: " + id, response))
}
//Create a dog
function createDog(dog){
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)
    }
    return fetch(API_URL, options)
        .then((response)=>response.json())
}
// let tyson = {
//     name: "Tyson",
//     isGoodDog: true,
//     id: 11,
//     age: 10
// }
// createDog(tyson).then((newDog)=>console.log(newDog));