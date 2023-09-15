import { useEffect, useState } from "react"
import Card from "../card/Card";
import Cart from "../cart/cart";
import swal from 'sweetalert';

export default function Root() {

  const [allCourse, setAllcourse] = useState([]);
  const [selectCourse, setSelectcourse] = useState([])
  const [credit, setCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {

    fetch('../../public/data.json')
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

    <div className="flex flex-col   lg:flex-row  lg:justify-between ">




      <div className="grid md:mr-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   md:gap-4   ">
        {
          allCourse.map((course,idx) => <Card

            key={idx}
            course={course}
            handleAddToCart={handleAddToCart}
          ></Card>)
        }
      </div>



      <div className="border w-full md:flex-1">
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
