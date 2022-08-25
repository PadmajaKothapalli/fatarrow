/*using function*/
function add1(x,y){
    console.log(x+y);
}
add1(10,20);

/* Using fatarrow with parameters */
let add=(a,b)=>{
    console.log(a+b);
}
add(100,2); /*102 */
add(50,90,2);/*140 */
add(89);/*nan */

/* fatarrow with parameters and return statement */
let a=(c,d)=>{
    return(c+d+2)
}
let r1=a(2,4)   /*8*/
console.log(r1);

/* without return statement */
let b=(e,f)=>e*f
let r2=b(100,50)   /*5000*/
console.log(r2);

/* fatarrow with direct statement without return, parameters */
let c=g=>g*10;
console.log(c(10));

let d=h=>h+"hello";
console.log(d("hii"));

/* fatarrow  using function hoisting 
it overcomes Override conflict */
var wish=()=>{
    console.log("padhu");
}
wish();
var wish=()=>{
    console.log("nithya");
}
wish();


/*using "this" keyword */
let test=()=>{
    console.log(this);
}
test();