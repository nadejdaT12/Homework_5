
import { readFileSync } from 'fs';

var body = readFileSync('test_data/testResponse.json', 'utf8');
const data = JSON.parse(body);

//console.log(body)
//console.log(data.lists[0].name)

// arrayOfElements.forEach(item =>{
//     console.log(item)
//     })

for(var i = 0; i<data.lists.length; i++){
    console.log(i)
    console.log(data.lists[i].id)
    console.log(data.lists[i].name)
} 