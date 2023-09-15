import { FaBookOpen } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

import PropTypes from 'prop-types'
export default function Card({ course, handleAddToCart }) {
  const { ID, Title, Cover, Price, Description, Credit } = course;

  //  console.log(course.Description.slice())
  return (

      <div className="w-full md:w-[312px] bg-[#FFF]  shadow-xl">
    
        <figure className="md:m-4">
        <img className="w-full " src={Cover} alt="Picture" />
    
        </figure>
        <div className="p-4 ">
          <h2 className="text-lg font-semibold">{Title}</h2>
          <p>{Description.slice(0, 100)}</p>
          <div className="flex items-center ">


            <HiCurrencyDollar size='1.5rem'></HiCurrencyDollar>      Price: {Price}

            <div className="mx-4">     <FaBookOpen size='1.5rem' ></FaBookOpen> </div>  Credit: {Credit}hr
          </div>
          <div className="card-actions mt-4 ">
          <button onClick={() => handleAddToCart(ID, course)} className="btn btn-primary w-full">Select</button>
        </div>
        </div>

      
      </div>

  

  )
}



Card.propTypes = {

  course: PropTypes.object,
  handleAddToCart: PropTypes.func,

}