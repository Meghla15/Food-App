import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Banner'
import Header from './Header'
import SingleFood from './SingleFood';



function App() {
  const [foods, setFoods]=useState([]);
  const[cart, setCart] = useState([]);
  

  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setFoods(data))
  },[])

   const handleClick =(f)=>{
    const isExist =cart.find(fd => fd.id == f.id);
    if (!isExist) {
      setCart([...cart,f]);
    }
    else{
     return(<div className="toast">
     <div className="alert alert-info">
       <span>New message arrived.</span>
     </div>
   </div>)
    }

  }
      
  const handlePress =(id)=>{
     const newCart = cart.filter(item => item.id !=id);
     setCart(newCart)
  }
 
 
  

  return (
    <>
    <Header></Header>
    <Banner></Banner>

    <div className='recipes-container mx-auto'>
      <h1 className='text-3xl font-bold mt-10 text-center'>Our Recipes</h1>
      <p className='w-2/3 mx-auto text-center mt-2 text-slate-800'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.  </p>

       

         <div className='main-container mx-auto p-8 grid grid-cols-2 gap-4'>
         <div className=''>
         {
            foods.map((fd)=><SingleFood 
            food={fd}
            handleClick={handleClick}></SingleFood>)
          }
         </div>
          
          

          <div className='cart-container mx-auto border-[1px] rounded-2xl p-6'>
           <h1 className='text-3xl font-bold text-center'>Want to Cook : {cart.length} </h1>
           <div class="overflow-x-auto">
                  <table class="table">
            {/* head  */}
           <thead>
            <tr>
           <th></th>
           <th>Name</th>
           <th>Time</th>
           <th>Calories</th>
           </tr>
           </thead>
           
             <tbody>
            {/* row 1 */}
          
            {
              cart.map((item,index)=>(
                <tr>
                <th>{index+1}</th>
                     <td>{item.name}</td>
                     <td>{item.prepTime} min</td>
                     <td>{item.calories} calories</td>
                     <button onClick={()=>handlePress(item.id) } class="btn bg-[#0BE58A] rounded-badge">Preparing</button>
                     </tr>
                     
              )
                
              )
              }
            
        </tbody>
        </table>
           </div>
           <div>
            <h1 className='text-3xl font-bold text-center mt-4'>Currently Cook : </h1>
            <div class="overflow-x-auto">
                  <table class="table">
            {/* head  */}
           <thead>
            <tr>
           <th></th>
           <th>Name</th>
           <th>Time</th>
           <th>Calories</th>
           </tr>
           </thead>
           
             <tbody>
            {/* row 1 */}
          
            {/* {
              cart.map((item,index)=>(
                <tr>
                <th>{index+1}</th>
                     <td>{item.name}</td>
                     <td>{item.prepTime} min</td>
                     <td>{item.calories} calories</td>
                     
                     </tr>
                     
              )
                
              )
              } */}
            
        </tbody>
        </table>
           </div>
            </div>
          </div>
          
      </div>

    </div>
    </>
  )
}

export default App
