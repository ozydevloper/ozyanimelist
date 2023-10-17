"use client"
import CardAnime from '@/components/CardAnime';
import Link from 'next/link';

const AnimeList = ({ animes, title, pageHREF , seeAll = false}) => {
  return (
    <div className="px-2 pt-5 mt-10 md:mt-16 md:px-10">
      <div className="text-white flex justify-between mb-5 ">
        <h1 className="text-[1.3rem] font-bold inline-block group hover:text-white/80 italic">
          <span className="transition-all ease-in-out duration-300 opacity-0 group-hover:opacity-100 group-hover:text-white mr-1">
            #
          </span>
          {title}
        </h1>
        <Link
          href={`/${pageHREF}`}
          className={`text-sm italic text-white/80 relative ${
            seeAll ? 'visible' : 'invisible'
          } hover:text-white `}>
          Lihat Semua...
        </Link>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-3 gap-x-3 md:grid-cols-5">
        {animes.data.map((anime) => (
          <CardAnime
            key={anime.mal_id}
            image={
              anime.images.webp.image_url
                ? anime.images.webp.image_url
                : anime.images.jpg.image_url
            }
            title={anime.title}
            type={anime.type}
            episode={anime.episodes}
            score={anime.score}
            id={anime.mal_id}
            
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
