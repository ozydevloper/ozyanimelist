"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Navbar = () => {
  
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (event) => {
    if(event.key === "Enter" || event.type === "click"){
      console.log(event);
      router.push(`/search/${searchRef.current.value}`)
    }
  }

  return (
    <div className=" flex flex-col py-7 px-10 items-center relative w-full  md:flex-row md:justify-between ">
      <div className=''>
        <Link  href={`/`} className="text-[1.3rem] font-semibold text-white">
          Ozy<span className="text-gray-500">AnimeList</span>
        </Link>
      </div>
      <div className="text-white relative w-full mt-10 md:w-[30rem] md:mt-0">
        <input type="text" required onKeyDown={handleSearch} className={`bg-transparent w-full font-bold py-[0.40rem] px-3 border-y-none border-r-2 relative focus:outline-none peer z-50 md:w-[30rem]`} ref={searchRef}></input>
        <p
          className='absolute inline-block left-2 transition-all ease-in-out duration-300 top-2 peer-valid:-top-5 peer-focus:-top-5 '>
          Cari Judul Anime
        </p>
        <button className='absolute border transition-all ease-in-out duration-300  border-white end-5 top-2 z-50 px-2 bg-black/20 backdrop-blur-[10px] peer-valid:opacity-100 opacity-0 hover:shadow-md hover:shadow-white/80 active:border-gray-500 rounded-md' onClick={handleSearch}>Cari</button>
      </div>
    </div>
  );
};

export default Navbar;
