import { FaBookOpen} from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

import PropTypes from 'prop-types'
export default function Card({ course, handleAddToCart }) {
  const {ID, Title, Cover, Price, Description, Credit } = course;

  //  console.log(course.Description.slice())
  return (

    <div>

      <div className="w-[312px]   bg-base-100 shadow-xl">
        <img className="m-4" src={Cover} alt="Shoes" />
        <div className="">
          <h2 className="card-title">{Title}</h2>
          <p>{Description.slice(0, 200)}</p>
          <div className="flex items-center ">
        
            
       <HiCurrencyDollar size='1.5rem'></HiCurrencyDollar>      Price: {Price}

      <div className="mx-4">     <FaBookOpen size='1.5rem' ></FaBookOpen> </div>  Credit: {Credit}hr
          </div>

        </div>

        <div className="card-actions mt-6">
          <button onClick={() => handleAddToCart(ID,course)} className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>

    </div>

  )
}



Card.propTypes = {

  course: PropTypes.object,
  handleAddToCart: PropTypes.func,

}