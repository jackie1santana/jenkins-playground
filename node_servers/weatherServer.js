const express = require('express');

function startWeatherServer() {
    const app = express();

    app.get('/weather', (req, res) => {
        res.send('Weather API Server');
    });

    // Make sure this is returning the server instance
    const server = app.listen(3000, () => console.log('Server running on port 3000'));
    return server;
}

module.exports = startWeatherServer;

// const express = require('express');
// const _ = require('lodash')

// function startWeatherServer() {
//     const app = express();

//     app.get('/weather', (req, res) => {
//         res.send('Weather API Server');
//     });
// //recursion
// let str = 'hello'

// const commentThread = [
//     {
//         id: 1,
//         text: "This is the first comment",
//         children: [
//             {
//                 id: 2,
//                 text: "This is a reply to the first comment",
//                 children: [
//                     {
//                         id: 3,
//                         text: "This is a nested reply",
//                         children: []
//                     }
//                 ]
//             },
//             {
//                 id: 4,
//                 text: "This is another reply to the first comment",
//                 children: []
//             }
//         ]
//     },
//     {
//         id: 5,
//         text: "This is a separate top-level comment",
//         children: []
//     }
// ];
// const num = [1,2,3, [5,6]]

// const palindromes = ["racecar", "level", "radar", "civic", "madam"];


//     function _Palindrome(...word){
//         console.log('param', word)
//         word.forEach(element => {
//             if(_.isEqual(element.split(' '), element.split(' ').reverse())){
//             // if(element.split(' ').join('') === element.split(' ').reverse().join('')){
//                 console.log(true, element)
               
//             }else {
//                 console.log(false, `${element} is not a palinedrome`)
//             }

//         });
        
       
//     }
//     _Palindrome("racecar", "level")

  
// }



// module.exports = startWeatherServer;
