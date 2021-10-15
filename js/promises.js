// fetch('https://api.github.com/users/AlRiley90/events', {
//     headers: {'Authorization': gitHubKey}})
//         .then((response) => response.json())
//             .then((jsonData) => {
//                 console.log(new Date(jsonData[0].created_at))
//                 return jsonData[0].created_at
//             })

function userName(){
    let input = prompt("Please enter your GitHub username: ");
    fetch('https://api.github.com/users/' + input +'/events', {
        headers: {'Authorization': gitHubKey}
    })
        .then((response) => response.json())
        .then((jsonData) => {
            console.log("Your last commit was at " + new Date(jsonData[0].created_at))
})
}
userName();


