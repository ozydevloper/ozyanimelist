'use client';
import CardAnime from '@/components/CardAnime';

const Page = async ({ params }) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/${params.key[0]}/${params.key[1]}`
  );
  const request = await response.json();
  const result = request.data;

  return (
    <div className="w-full h-screen flex flex-col items-center text-white py-10 px-5">
      <div className="w-64 mb-10">
        <CardAnime
          image={
            result.images.webp.image_url
              ? result.images.webp.image_url
              : result.images.jpg.image_url
          }
          title={result.title}
          type={result.type}
          score={result.score}
          episode={result.episode}
          id={result.id}
          canClik={false}
        />
      </div>
      <div className=" w-full flex flex-col px-5 py-10">
        <h1 className="text-center text-4xl font-bold p-5 mb-5">
          {result.title}
        </h1>
        <ul className="mt-10">
          <li className="mt-4 text-white">
            Type : {result.type ? result.type : ''}
          </li>
          <li className="mt-4 text-white">
            Duration : {result.duration ? result.duration : ''}
          </li>
          <li className="mt-4 text-white">Status : {result.status ? result.satus : ''}</li>
          <li className="mt-4 text-white">
            Synopsis : {result.synopsis ? result.synopsis : ''}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
