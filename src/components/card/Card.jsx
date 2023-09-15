
// import { FaBeer } from "react-icons/fa";
export default function Card({course}) {
  const {Title,Cover,Price,Description,Credit} = course;
  
  //  console.log(course.Description.slice())
  return (

    <div>

      <div className="w-[312px]   bg-base-100 shadow-xl">
  <img className="m-4" src={Cover} alt="Shoes" />
  <div className="">
    <h2 className="card-title">{Title}</h2>
    <p>{Description.slice(0,200)}</p>
    <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="14" height="16" viewBox="0 0 14 16" fill="none">
<path  d="M12 1H4.5C3.57174 1 2.6815 1.36875 2.02513 2.02513C1.36875 2.6815 1 3.57174 1 4.5C1 5.42826 1.36875 6.3185 2.02513 6.97487C2.6815 7.63125 3.57174 8 4.5 8H9.5C10.4283 8 11.3185 8.36875 11.9749 9.02513C12.6313 9.6815 13 10.5717 13 11.5C13 12.4283 12.6313 13.3185 11.9749 13.9749C11.3185 14.6313 10.4283 15 9.5 15H1" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Price: {Price}
 <svg xmlns="http://www.w3.org/2000/svg" className="mx-5" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  Credit: {Credit}hr
    </div>

  </div>

  <div className="card-actions mt-6">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
</div>

    </div>

  )
}
