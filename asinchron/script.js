//JSON- Javascript Object Notation способо обработки данных 
/*"{
"name": "Vasya",
"age": 12,
"isMale": true,
"drinks": ["soda", "cola", "vodka"],
"passport": {
    "photo": "1.jpg",
    "adress": "Mogilev"
}
}*/
const user  = {
    name: "Vasya",
    age : 14
};
const str = JSON.stringify(user);
console.log(str);

const str2 = '{"color": "red", "transmission": [1, 2, 3, 4, 5,"R"]}';
const car = JSON.parse(str2);
console.log(car);
car.color = 'green';

const arr = [
    {
        age: 12
    },
    {
        name: "Vasya",
        height: 123.56
    },
] ;

console.log(JSON.stringify(arr));

async function getRate (curId){
    const resp = await fetch(`https://www.nbrb.by/api/exrates/rates/${curId}`);
    const rate = await resp.json();
    const div =document.getElementById("value");
    div.innerText = `1${rate.Cur_Abbreviation} = ${rate.Cur_OfficialRate}BYN`;
}
async function getCurrencies(){
    const resp = await fetch('https://www.nbrb.by/api/exrates/currencies');
    const currencies = await resp.json();

const select = document.getElementById('curr');
for (let curr of currencies){
    const option = document.createElement('option');//создаем выпадающий список)
    option.innerText = `${curr.Cur_Name} (${curr.Cur_Abbreviation})`;
    option.value = curr.Cur_ID;
    select.appendChild(option);
}
}
getCurrencies();
