import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Banner'
import Header from './Header'
import SingleFood from './SingleFood';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';



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
      
  const handlePress =(x)=>{
     const newCart = cart.filter(item => item.id !=x.id);
     setCart(newCart);
     setPrepare([...prepare,x]);
     console.log(prepare)
  }
  
 
 
  

  return (
    <>
    <Header></Header>
    <Banner></Banner>

    <div className='recipes-container mx-auto'>
      <h1 className='text-4xl font-bold mt-10 text-center mb-4'>Our Recipes</h1>
      <p className='w-2/3 mx-auto text-center mt-2 mb-4 text-slate-800'>Our charming eatery, nestled in the heart of Rajshahi, celebrates culinary craftsmanship. From aromatic curries to delicate pastries, each dish is a canvas of flavors. Join us for an intimate dining experience where passion meets palate.  </p>

       

         <div className='main-container lg:flex justify-between mx-auto p-4 '>
         <div className=' grid lg:grid-cols-2 grid-cols-1 gap-4 '>
         {
            foods.map((fd)=><SingleFood 
            food={fd}
            handleClick={handleClick}
            ></SingleFood>)
          }
         </div>
          
          

          <div className='cart-container mx-auto lg:mt-0 mt-5 border-[1px] rounded-2xl p-4'>
           <h1 className='text-2xl font-bold text-center mb-3'>Want to Cook : {cart.length} </h1>
           <hr className='border-[1px] border-slate-100 w-2/3 mx-auto ' />
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
           
             <tbody className='bg-slate-100'>
            {/* row 1 */}
          
            {
              cart.map((item,index)=>(
                <tr>
                <th>{index+1}</th>
                     <td>{item.name}</td>
                     <td>{item.prepTime} min</td>
                     <td>{item.calories} calories</td>
                     <button onClick={()=>handlePress(item)} className="btn bg-[#0BE58A] rounded-badge">Preparing</button>
                     </tr>
                     
              )
                
              )
              }
            
        </tbody>
        </table>
           </div>
           <ToastContainer />
           <div>
            <h1 className='text-2xl font-bold text-center mt-4 mb-3'>Currently Cooking :{prepare.length} </h1>
            <hr className='border-[1px] border-slate-100 w-2/3 mx-auto ' />
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
           
             <tbody className='bg-slate-100'>
           
          
             {
              prepare.map((item,index)=>(
                
                <tr>
                <th>{index+1}</th>
                     <td>{item.name}</td>
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
    <Footer></Footer>
    </>
  )
}

export default App
