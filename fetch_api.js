async function main(){
    const data  = await fetch("https://opentdb.com/api.php?amoumnt=10")
    .then((res) => {
        return res.text();
    }
)
   .catch((err) => console.error(err));
   console.log(data);
}

main();





/*
 async function API() {
 const data = await fetch("api_link")
 .then((res) => {
    return res.text();
    })
    .catch((err) => console.log(err))'
    console.log(data);
    
 }    


API();
 */

// const get =  async () => {
//      try {
//         const response = await fetch("api_link")
//         console.log(response.data)
//      }
//      catch (error)
//       console.error("api_is_not_working", error);
// }


// get();






/*
 PROMISE and 
 EVENT LOOP
 FILTER 
 MAP
 CLOSURES

 All the interview based questions on the JAVASCRIPT    
*/


function Parent () {

    let a=9;
    const  get = () => {
    console.log(a);
    }
}