import { useEffect, useState } from "react"
import Card from "../card/Card";
import Cart from "../cart/cart";


export default function Root() {

const [allCourse,setAllcourse] =useState([]);
const [selectCourse,setSelectcourse] = useState([])
const [credit,setCredit] = useState(0)
const [totalPrice,setTotalPrice] = useState(0)
const [remaining,setRemaining] = useState(0)

    useEffect(()=>{

   fetch('../../public/data.json') 
   .then(res=>res.json())
   .then(coursesInfo=>setAllcourse(coursesInfo))    

    },[])

// handle click card add to cart function


const handleAddToCart=(ID,course)=>{

 const isId=  selectCourse.find(data=>data.ID === ID)

 if(isId){

  alert('cart has')

 }else{

  const newCredit =  credit + course.Credit;
 
   if(newCredit >20){
    alert('credit lmited')
   }else{
     setRemaining(20 -newCredit);
     setCredit(newCredit);

    const newSelectCourse = [...selectCourse,course];

    setSelectcourse(newSelectCourse)
    
    
  
    const newTotalPrice =  totalPrice + course.Price;
    setTotalPrice(newTotalPrice);
  


   }
 




  
 }
 
  

}

  return (

    <div className="flex justify-between ">




 <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4   ">
       {
        allCourse.map((course,idx)=> <Card  
        
        key={idx}
        course={course}
        handleAddToCart={handleAddToCart}
          ></Card>)
       }
    </div>



     <div className="border md:flex-1">
     <Cart  
     
     selectCourse={selectCourse}
     credit={credit}

     totalPrice={totalPrice}

     remaining={remaining}
     ></Cart>
     </div>


  </div>


  )
}
