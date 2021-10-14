const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// #2 Create array of objects where each user object has at least 3 langs.
let threeLangs = users.filter(function(language){
    return language.languages.length >= 3;
})
console.log(threeLangs);


// #3 create an array of strings where each element is a user's email address
let userEmail = users.map(function(person){
    return person.email;
})
console.log(userEmail);


// #4 get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExp = users.reduce(function(total, number){
    return total + number.yearsOfExperience;
}, 0);
console.log(totalExp);

// #5 get the longest email from the list of users.
let longestEmail = userEmail.reduce(function(total, letters){
   total + letters.email.length;

}, 0)
console.log(longestEmail);

// #6 get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructorNames = users.reduce(function(final, names){
    return final + users.name
})