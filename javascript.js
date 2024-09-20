


let userMessage="hello world!!";

userMessage="new value"

console.log(userMessage);
console.log(userMessage);

function greeting(){
    console.log("hello")
}

greeting();


function greetUser(userName,message ="hello everyone"){
  console.log(userName);
  console.log(message);
  return " I am "+userName+"."+message;
}

const greet1=greetUser("sunil")
console.log(greet1);
const greet2=greetUser("Praba karan","what's up")
console.log(greet2);


const user={
  name:"fullstackioTech",
  office:"chennai",
  greet3(){
    console.log("hello!")
    console.log(this.office);
  }
}

console.log(user.name)
user.greet3();

class User{
  constructor(name,office){
     this.name=name;
     this.office=office
  }
  greet(){
    console.log("hello world")
  }

}

const user1=new User("prasanth","chennai");
const user2=new User("arjun","coimbatore");

console.log(user1.name)
console.log(user2.name)

user2.greet();

const hobbies=["sports","cooking","reading"];

console.log(hobbies[0]);

hobbies.push("games","working");

console.log(hobbies);

const index=hobbies.findIndex((item)=> item === "working")

console.log(index);


const editedHobbies=hobbies.map((item)=> item +"!")

console.log(editedHobbies);

const transformToObject=[1,2,3];

const editedTransformToObject=transformToObject.map((item)=>({val:item}))


console.log(editedTransformToObject);




function transformToObjects(numberArray) {
  return numberArray.map((number)=>{
      return {val:number}
      })
  
}


console.log(transformToObjects([1,2,3,4]))


