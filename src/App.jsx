import { useEffect, useState } from "react"
import Card from "./components/card/Card";
import Cart from "./components/cart/cart";
import swal from 'sweetalert';
import './App.css'
export default function App() {

  const [allCourse, setAllcourse] = useState([]);
  const [selectCourse, setSelectcourse] = useState([])
  const [credit, setCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {

    fetch('data.json')
      .then(res => res.json())
      .then(coursesInfo => setAllcourse(coursesInfo))

  }, [])

  // handle click card add to cart function


  const handleAddToCart = (ID, course) => {

    const isId = selectCourse.find((data) => data.ID === ID )

    if (isId) {
      swal("This card already added");


    } else {

      const newCredit = credit + course.Credit;

      if (newCredit > 20) {
      swal("Your are using limited credit 20");

      } else {
        setRemaining(20 - newCredit);
        setCredit(newCredit);

        const newSelectCourse = [...selectCourse, course];

        setSelectcourse(newSelectCourse)



        const newTotalPrice = totalPrice + course.Price;
        setTotalPrice(newTotalPrice);



      }






    }



  }

  return (

   <>
    
<div className="md:container mx-auto">

<h1 className="text-4xl text-center pt-10 mb-6">Course Registration </h1>
   <div className="flex flex-col     md:mt-0    lg:flex-row  lg:justify-between ">




<div className="grid mb-4 md:mb-0  grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mx-4 gap-4   md:gap-4   ">
  {
    allCourse.map((course,idx) => <Card

      key={idx}
      course={course}
      handleAddToCart={handleAddToCart}
    ></Card>)
  }
</div>



<div className="   ">
  <Cart

    selectCourse={selectCourse}

    credit={credit}

    totalPrice={totalPrice}

    remaining={remaining}
  ></Cart>
</div>


</div>
</div>
   </>


  )
}
