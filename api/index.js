const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.post('/', (req, res) => {
    const data = req.body.apiString;
    // console.log(typeof(data));
    // console.log(data);
    
    const json = JSON.parse(data);
    console.log(json);
    
    const array = json.data;
    console.log(array);
    

    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = '';
    
    for (const ele of array) {
        if (!isNaN(ele)) numbers.push(ele);
        else if (/^[a-zA-Z]$/.test(ele)) alphabets.push(ele);
    }
    let arrayOfAlphabets = [];
    array.forEach(item => {
        if (item.length === 1 && /^[a-z]+$/.test(item) === true) arrayOfAlphabets.push(item);
    });
    arrayOfAlphabets.sort();
    highestLowercaseAlphabet = arrayOfAlphabets[arrayOfAlphabets.length - 1];

    const responseData = {
        userId: "rudrajyoti_dasgupta_10092002",
        email: "rudrajyoti.dasgupta2021@vitstudent.ac.in",
        roll_number: "21BEC0448",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: [highestLowercaseAlphabet]
    };

    res.json(responseData);
});

app.listen(PORT, () => {
    console.log('Server is listening!!');
})