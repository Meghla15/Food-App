import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Banner'
import Header from './Header'
import SingleFood from './SingleFood';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [foods, setFoods]=useState([]);
  const[cart, setCart] = useState([]);
  const [prepare ,setPrepare] =useState([]);
  

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
      toast("Already exist");
    }

  }
      
  const handlePress =(id)=>{
     const newCart = cart.filter(item => item.id !=id);
     setCart(newCart),
     setPrepare(prepare)
    //  console.log(prepare)
  }
 
 
 
  

  return (
    <>
    <Header></Header>
    <Banner></Banner>

    <div className='recipes-container mx-auto'>
      <h1 className='text-3xl font-bold mt-10 text-center'>Our Recipes</h1>
      <p className='w-2/3 mx-auto text-center mt-2 mb-4 text-slate-800'>Our charming eatery, nestled in the heart of Rajshahi, celebrates culinary craftsmanship. From aromatic curries to delicate pastries, each dish is a canvas of flavors. Join us for an intimate dining experience where passion meets palate.  </p>

       

         <div className='main-container lg:flex gap-3 mx-auto p-4 '>
         <div className=' grid lg:grid-cols-2 grid-cols-1 gap-3 '>
         {
            foods.map((fd)=><SingleFood 
            food={fd}
            handleClick={handleClick}
            ></SingleFood>)
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
                     <button onClick={()=>handlePress(item.id)} class="btn bg-[#0BE58A] rounded-badge">Preparing</button>
                     </tr>
                     
              )
                
              )
              }
            
        </tbody>
        </table>
           </div>
           <ToastContainer />
           <div>
            <h1 className='text-3xl font-bold text-center mt-4'>Currently Cooking :{prepare.length} </h1>
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
           
          
             {
              prepare.map((item,index)=>(
                
                <tr>
                <th>{index+1}</th>
                     <td>{i.name}</td>
                     <td>{item.prepTime} min</td>
                     <td>{item.calories} calories</td>
                     
                     </tr>
                     
              )
                
              )
              }
            
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
