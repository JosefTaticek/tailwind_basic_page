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


  </div>
}


export default App