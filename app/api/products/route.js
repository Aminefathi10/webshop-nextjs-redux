const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '_data', 'products.json')

export  default function handler(req, res) {

    fs.readFile(dataPath, (err, data) => {
        if(err) {
           return res.status(500).json({
                message: 'Error reading the data'
            });
        }
       const jsonData = JSON.parse(data);

       res.json(jsonData);
    });
    
}