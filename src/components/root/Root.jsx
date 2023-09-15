import { useEffect, useState } from "react"
import Card from "../card/Card";
import Cart from "../cart/cart";


export default function Root() {

const [allCourse,setAllcourse] =useState([]);


    useEffect(()=>{

   fetch('../../public/data.json') 
   .then(res=>res.json())
   .then(coursesInfo=>setAllcourse(coursesInfo))    

    },[])



  return (

    <div className="flex justify-between ">




 <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4   ">
       {
        allCourse.map((course,idx)=> <Card  
        
        key={idx}
        course={course}
          ></Card>)
       }
    </div>



     <div className="border md:flex-1">
     <Cart></Cart>
     </div>


  </div>


  )
}
