var list1 = [
    { firstName: 'Lingard', lastName: 'Y.', country: 'England', continent: 'British', age: 35, language: 'JavaScript' },
    { firstName: 'Joseph', lastName: 'A.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    ];
    




function data(array){
    var tampung =""
    var tampung2= ""
    tampung=array[0];
    tampung.greeting= 'Hi Lingard, what do you like the most about JavaScript?'
    tampung2=array[1];
    tampung2.greeting= 'Hi Lukas, what do you like the most about Python?'
    return array

} 


console.log(data(list1))


