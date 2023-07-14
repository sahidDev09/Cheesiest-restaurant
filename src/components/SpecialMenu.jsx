import React from "react";
import pizzamenu from "../images/pizza.png"
import burger from "../images/burger.png"
import biriyani from "../images/biriyani.png"
import chawmeen from "../images/chawmeen.png"
import indianLunch from "../images/indianlunch.png"
import mealbox from "../images/mealbox.png"
import juice from "../images/pinapplejuice.png"
import plater from "../images/splater.png"


const SpecialMenu = () => {
  return (
    <main className=" container mx-auto">
      <div id="textmenu">
        <h1 className=" py-2 items-center text-center text-xl font-bold sm:text-2xl md:text-3xl bg-green-700 text-white sm:w-[40%] md:w-[40%] lg:w-[30%] mb-10">
          Chessy.EAT special
        </h1>
      </div>
      <section className="mb-[8rem]">
        <div id="cards" className=" grid sm:grid-cols-4 lg:grid-cols-4 gap-5 ">
            <div id="card">
                <div id="imgcard"> <img className=" w-[200px]" src={pizzamenu} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >LoverBite pizza</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">700 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" w-[200px] h-[200px]" src={burger} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >Cheese Burger</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">300 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" transition-all bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" w-[200px] h-[200px]" src={mealbox} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" > Burger Set-1 </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">1200 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" scale-[1.2] w-[200px] h-[200px]" src={biriyani} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >Biriyani</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">299 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" w-[200px]" src={chawmeen} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >Chowmein</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">375 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" w-[200px]" src={plater} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >Platter </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">500 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" w-[200px]" src={indianLunch} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >Indian Lunch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">430 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

            <div id="card">
                <div id="imgcard"> <img className=" w-[200px] scale-[1.3]" src={juice} alt="menu-one" /> </div>
                <div id="card_info">
                    <h2 className=" sm:tex-2xl md:text-2xl font-bold lg:text-2xl text-orange-500" >Pinapple Juice</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sequi?</p>
                    <div id="buy" className=" flex justify-between items-center"> 
                    <h1 className="text-lg sm:text-2xl font-bold text-orange-500">80 <span className=" sm:text-lg font-light"> BDT </span></h1>
                    <button className=" bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-xl text-white">Order</button>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </main>
  );
};

export default SpecialMenu;
