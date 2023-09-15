import PropTypes from 'prop-types'
export default function Cart({ selectCourse, credit, totalPrice, remaining }) {


   let count = 1;

   return (

        <div className="p-6 bg-white mt-10 md:mt-0">
         <div>
            <h1 className="text-base text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h1>
         </div>
         <hr className='mt-3 mb-3' />

         <h1 className="text-base  font-bold mb-5">Course Name</h1>

         <div>

             <div>
             {
               selectCourse.map((courseDetails) => 
               
               <>
                <h1 className='text-base leading-8 font-normal' >{count++} {courseDetails.Title}   </h1>
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


