"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CardAnime = ({ image, title, type, score, episode, id, canClik = true}) => {

  const router = useRouter();

  const handleClick = () => {
    if(canClik){
      router.push(`/detail/${episode ? 'anime' : 'manga'}/${id}`)
    }else{
      return
    }
  }

  return (
    <div className="bg-transparent w-full h-[22rem] overflow-hidden flex relative rounded-xl border border-slate-950 shadow-xl shadow-black group transition-all ease-in-out duration-300 active:-translate-y-7" onClick={handleClick}>
      <Image
        src={image}
        width={400}
        height={400}
        className="w-full h-full transition-all ease-out duration-300 group-hover:scale-125 object-cover"
        alt='...'
      />
      <div className="absolute bg-gradient-to-t from-transparent text-white w-full to-black h-[40%] p-[0.7rem] transition-all ease-out duration-300 group-hover:h-[80%]">
        <h1 className="mb-2 transition-all ease-out duration-300 group-hover:text-xl">
          {title}
        </h1>
        <div className="text-white/80 transition-all translate-y-5 ease-out opacity-0 duration-500 text-[0.9rem] group-hover:opacity-100 group-hover:translate-y-0 flex flex-col">
          <p>Type: {type}</p>
          <p>Score: {score}</p>
          <p>Episode: {episode}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAnime;
