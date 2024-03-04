import Logo from './img/logo-hp.png';

const App = () => {


  return <div>
    <section class="relative bg-[url('./img/bg-1.avif')] h-screen bg-cover bg-center"> 
      <nav class="fixed
                top-0
                w-full
                z-50
                flex 
                flex-row 
                justify-between
                items-center
                bg-black
                h-28">
        <div class="ml-8">
          <img class="w-40" src={Logo} alt="web_logo"/>
        </div>
        <div class="hidden sm:inline"> {/*Break points - responsive design (Tailwind is mobile first), sm:inline changes the size where it's displayed*/}
          <ul class="flex flex-row text-[22px]"> {/*Flexbox, in brackets [] can be custom value*/}
            <li class="py-1 px-2
                      text-white 
                      hover:bg-slate-400
                      hover:rounded-xl
                      cursor-pointer">
              Philosophers Stone
            </li>
            <li class="py-1 px-2
                      text-white 
                      hover:bg-slate-400
                      hover:rounded-xl
                      cursor-pointer">
              Chamber of secrets
            </li>
            <li class="py-1 px-2
                      text-white 
                      hover:bg-slate-400
                      hover:rounded-xl
                      cursor-pointer">
              Prisoner of Azkaban
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="flex 
                    flex-row 
                    space-x-2 
                    ml-2 
                    font-bold 
                    text-[20px] 
                    text-white">
            <li class="cursor-pointer
                    hover:rounded-x1
                  hover:bg-slate-400
                    py-1
                    px-2">
              T-shirts</li>
            <li class="cursor-pointer
                    hover:rounded-x1
                  hover:bg-slate-400
                    py-1
                    px-2">Mugs</li>
            <li class="cursor-pointer
                    hover:rounded-x1
                  hover:bg-slate-400
                    py-1
                    px-2">Books</li>
          </ul>
        </div>
      </nav>
      <div class="pt-48 text-center text-white">
        <h1 class="text-[40px]">Philosopher's Stone</h1>
        <p class="text-xl">Lorem ipsum dolor sit amet consectetur</p>
      </div>



      <div class="absolute bottom-20 flex flex-col items-center w-full lg:flex-row lg:justify-center lg:space-x-4"> {/*Absolute position is connected to header relative*/}
        <button class="uppercase bg-blue-600 w-80 text-white rounded-full h-10 mt-3">Order</button>
        <button class="uppercase bg-blue-600 w-80 text-white rounded-full h-10 mt-2">More information</button>
      </div>

      <div class="absolute bottom-5 w-full">
        <svg data-slot="icon" fill="none" stroke-width="1.5"      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-white mx-auto w-10 h-10 animate-bounce">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
        </svg>
      </div>
    </section>
  










    {/*Second section*/}
    <section class="relative bg-[url('./img/bg-2.jpg')] h-screen bg-cover bg-center"> 
      
      <div class="pt-32 text-center text-white">
        <h1 class="text-[40px]">Chamber of secrets</h1>
        <p class="text-xl"> Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div class="absolute bottom-20 flex flex-col items-center w-full lg:flex-row lg:justify-center lg:space-x-4"> {/*Absolute position is connected to header relative*/}
        <button class="uppercase bg-green-950 w-80 text-white rounded-full h-10 mt-3">Order</button>
        <button class="uppercase bg-blue-600 w-80 text-white rounded-full h-10 mt-2">More information</button>
      </div>

      <div class="absolute bottom-5 w-full">
        <svg data-slot="icon" fill="none" stroke-width="1.5"      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="text-white mx-auto w-10 h-10 animate-bounce">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
        </svg>
      </div>
    </section>
  





    {/*Third section*/}
    <section class="relative bg-[url('./img/bg-3.jpg')] h-screen bg-cover bg-center"> 
      
      <div class="pt-32 text-center text-white">
        <h1 class="text-[40px]">The prisoner of Ascaban</h1>
        <p class="text-xl"> Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div class="absolute bottom-20 flex flex-col items-center w-full lg:flex-row lg:justify-center lg:space-x-4"> {/*Absolute position is connected to header relative*/}
        <button class="uppercase bg-slate-600 w-80 text-white rounded-full h-10 mt-3">Order</button>
        <button class="uppercase bg-blue-600 w-80 text-white rounded-full h-10 mt-2">More information</button>
      </div>
    </section>



    {/*NEWSLETTER SIGNUP*/}
    <section class="bg-[#2e3769] h-screen flex flex-row justify-center items-center md:flex-row">
      <div class="bg-[#47518b] text-white w-4/5 tracking-wider p-5 rounded-md drop-shadow-2xl">
        <h1 class="uppercase text-white text-center text-xs mb-2 md:text-left">How to</h1>
        <p class="text-center md:text-left mb-2 font-bold text-sm">Learn smart gadget and internet tips and tricsk with our entertaining and ingenious how-tos</p>
        
        <div class="flex flex-col md:flex-row">
          <input class="bg-[#47518b] 
                        border-2 
                        border-[#747db0] 
                        placeholder:text-lg
                        placeholder:text-white
                        focus:outline-none
                        px-2 mb-2
                        md:mb-0 md:mr-2 md:w-72
                        " type="email" placeholder="Enter your email adress" />
          <button class="p-2 bg-[#9d50ff] rounded-sm">Sign me up!</button>
        </div>
      </div>
    </section>




      {/*PRICING SCREEN*/}
    <section class="bg-black min-h-screen text-white flex flex-col justify-center items-center gap-5 md:flex-row md:justify-center">
      <div class="w-56 h-[350px] border-8 border-[#7B3BF3] rounded-lg flex flex-col justify-evenly items-center text-center">
        <p class="uppercase text-xs">BASIC</p>
        <div>
          <h1 class="text-4xl mb-1 font-serif">100GB</h1>
          <p class="text-xs">1 month, then $1,7/month</p>
        </div>
        <button class="bg-[#7B3BF3]
                      border 
                      border-[#7B3BF3]
                      w-32 
                      py-2 
                      rounded-lg 
                      hover:bg-[#9060e9] 
                      transition duration-500">Purchase</button>
        <ul class="text-xs border-t w-4/5">
          <li class="mt-4 mb-2">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
          100GB storage</li>
          <li>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
            Option to add members</li>
          <li>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
            Extra member benefits</li>
        </ul>
      </div>



      <div class="w-56 h-[350px] border-8 border-[#545c706c] rounded-lg flex flex-col justify-evenly items-center text-center">
        <p class="uppercase text-xs">STANDARD</p>
        <div>
          <h1 class="text-4xl mb-1 font-serif">200GB</h1>
          <p class="text-xs">1 month, then $2,3/month</p>
        </div>
        <button class="border 
                    border-[#7B3BF3]
                      w-32 
                      py-2 
                      rounded-lg 
                      hover:bg-[#9060e9] 
                      transition duration-500">Purchase</button>
        <ul class="text-xs border-t w-4/5">
          <li class="mt-4 mb-2">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
          100GB storage</li>
          <li>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
            Option to add members</li>
          <li>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
            Extra member benefits</li>
        </ul>
      </div>

      <div class="w-56 h-[350px] border-8 border-[#545c706c] rounded-lg flex flex-col justify-evenly items-center text-center">
        <p class="uppercase text-xs">PREMIUM</p>
        <div>
          <h1 class="text-4xl mb-1 font-serif">2 TB</h1>
          <p class="text-xs">1 month, then $8,9/month</p>
        </div>
        <button class="
                      border 
                    border-[#7B3BF3]
                      w-32 
                      py-2 
                      rounded-lg 
                      hover:bg-[#9060e9] 
                      transition duration-500">Purchase</button>
        <ul class="text-xs border-t w-4/5">
          <li class="mt-4 mb-2">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
          100GB storage</li>
          <li>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
            Option to add members</li>
          <li>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
            class="w-4 h-4 inline mr-2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
            </svg>
            Extra member benefits</li>
        </ul>
      </div>
    </section>

  </div>
}


export default App