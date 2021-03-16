  
const API = new Promise( (resolve, reject) =>{
  fetch('https://randomuser.me/api/?results=50') 
  .then((response) => response.json())
  .then((response) => {
    resolve (response.results) 
    
  })
    .catch((err) => reject(err))
 
 });
 
 export default API;

