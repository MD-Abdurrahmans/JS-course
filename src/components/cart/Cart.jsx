import PropTypes from 'prop-types'
export default function Cart({ selectCourse, credit, totalPrice, remaining }) {


   let count = 1;

   return (

      <div className="bg-white p-6">
         <div>
            <h1 className="text-[22px] text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h1>
         </div>
         <hr className='mt-3 mb-3' />

         <h1 className="text-[22px]  font-bold mb-5">Course Name</h1>

         <div>

             <div>
             {
               selectCourse.map((courseDetails,idx) => 
               
               <>
                <h1 className='text-base leading-8 font-normal' >{count++} {courseDetails.Title} key={idx}  </h1>
               </>
           
               
               )}


             </div>
             <hr className='mt-3 mb-3' />

         </div>

         <h1 className='text-[20px] font-medium' >Total Credit Hour:{credit}</h1>
         <hr className='mt-3 mb-3' />
         <h1 className='text-[20px] font-medium' >Total Price :{totalPrice} USD</h1>
         <hr className='mt-3 mb-3' />

      </div>


   )
}






Cart.propTypes = {

   selectCourse:PropTypes.array,
   credit:PropTypes.number,
   totalPrice:PropTypes.number,
   remaining:PropTypes.number,
}


