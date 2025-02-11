import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='header container mx-auto p-4'>
      
      <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <a className="text-2xl font-bold">Recipe Calories</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <div class="navbar-end">
    <div className="flex gap-2">
      <div className="form-control">
     

        <input type="text"  placeholder="Search Text" className="input input-bordered w-24 md:w-auto " />
      </div>
      <div className="dropdown dropdown-end">
        <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        
      </div>
    </div>
    </div>
  </div>
        
        
  
      </div>
        </div>
    );
};

export default Header;