import axios from "axios"

export default async function getData(number){
    const {data:users}= await axios('https://jsonplaceholder.typicode.com/users/'+number);

    const {data:posts}=await axios('https://jsonplaceholder.typicode.com/posts?userId='+number)

    const newArray=[users,posts[0]]
    console.log(newArray)
}

getData(1)
