const usersArray = [
    {name: 'lika', age: 21},
    {name: 'gio', age:22},
    {name: 'gio', age:23}
    ]
   
   
    const sumAge = usersArray.reduce((el, sum) => {
     el += sum.age
     return el;
    }, 0)
    console.log(sumAge)
    
   
   
   
     const myForm = document.querySelector('#myForm');
   
     myForm.addEventListener('submit', (e) => {
    
     e.preventDefault()
   
     let firstname = document.querySelector('#firstName')
     let lastname = document.querySelector('#lastName')
     let genders = document.querySelector('#gender')
     let subs = document.querySelector('#subscribe')
    
     console.log(firstname.value);
     console.log(lastname.value);
     console.log(genders.value);
     console.log(subs.value);
   
   
   
    })
    
   
   
   
   
   const stringsArray = ["ab", "abc", "abcd", "abcde", "abcdef"];
   
   const findLongestWord = (arr) => arr.reduce((element, current) => {
     if(current.length > element.length){
       return current;
     }else{
       return element;
     }
   }, '');
   
   
   console.log(findLongestWord(stringsArray));