import React from 'react';

const SingleFood = ({food,handleClick}) => {
    // console.log(handleClick)
    return (
        <div className=''>
          <div className='cards-container'>
          <div className="card w-[360px] bg-base-100 border-[1px]">
           <figure className="px-10 pt-10">
            <img src={food.image} alt="" className="rounded-xl" />
           </figure>
           <div className="card-body text-start">
            <h2 className="card-title font-bold">{food.name}</h2>
             <p>{food.instructions}</p>
             <hr className='border-[0.5px] border-slate-200 w-full ' />
             <h1 className='text-xl font-semibold'>Ingredients : 6</h1>
               
             <ul>
              {food.ingredients.map((ingredient, index) => (
               <li key={index}> {ingredient}</li>
                ))}
              </ul>
             <hr className='border-[0.5px] border-slate-200 w-full ' />
             <div className='flex justify-between'>
              <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>{food.prepTime} Min</p>
              </div>
               <div className='flex gap-2'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                 </svg>
                <p>{food.calories} Calories</p>

               </div>

             </div>
            <div className="card-actions mt-3">
             <button onClick={(e)=>handleClick(food)} className="btn bg-[#0BE58A] rounded-3xl w-2/3 mx-auto">Want to Cook </button>
           </div>
          </div>
          </div>
          </div>
        </div>
    );
};

export default SingleFood;