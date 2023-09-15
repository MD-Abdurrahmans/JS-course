
export default function Cart({selectCourse,credit,totalPrice}) {
    // console.log(selectCourse)
    // const {Credit} =selectCourse;

    let count =1;
  
  return (
   
    <div className="">
 <div>
    <h1 className="text-blue">Credit Hour Remaining hr</h1>
 </div>
  <h1 className="text-2xl text-center font-bold mb-5">Course Name</h1>
  
     <div>
        
        {
            selectCourse.map(courseDetails=>
              
            
                <>
                
                <div>
                     <h1>{count++} name: {courseDetails.Title}</h1>
                </div>
                
                
        
                </>

                )


        }


        
     </div>

     <h1>Total Credit Hour:{credit}</h1>
     <h1>Total Price :{totalPrice} USD</h1>
    </div>


  )
}
