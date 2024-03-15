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
     alert('already achi vaii')
    }

  }
  console.log(cart)
  

  return (
    <>
    <Header></Header>
    <Banner></Banner>

    <div className='recipes-container mx-auto'>
      <h1 className='text-3xl font-bold mt-10 text-center'>Our Recipes</h1>
      <p className='w-2/3 mx-auto text-center mt-2 text-slate-800'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.  </p>

       

         <div className='main-container flex lg:flex-row flex-col p-4 justify-between lg:mt-7'>
         {
            foods.map((fd)=><SingleFood 
            food={fd}
            handleClick={handleClick}></SingleFood>)
          }
          
          

          <div className='cart-container '>
           <h1 className='text-3xl font-bold text-center'>Want to Cook </h1>
           <div class="overflow-x-auto">
                  <table class="table">
            {/* head  */}
           <thead>
            <tr>
           <th></th>
           <th>Name</th>
           <th>Types</th>
           <th>Calories</th>
           </tr>
           </thead>
           {
            cart.map((item)=>{
                 
              <div>
                <tbody>
            {/* row 1 */}
            <tr>
            <th>1</th>
           <td>{item.name}</td>
           <td>Quality Control Specialist</td>
           <td>Blue</td>
            </tr>
           </tbody>
              </div>
          
            })
           }
             
        </table>
           </div>
          </div>
      </div>

    </div>
    </>
  )
}

export default App
