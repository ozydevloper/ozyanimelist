import AnimeList from '@/components/AnimeList';

const Search = async ({ params }) => {
  const keyword = params.keyAnime
  const responseAnime = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`);
  const searchAnime = await responseAnime.json();

  const responseManga = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`);
  const searchManga = await responseManga.json();



  return (
    <>
      <AnimeList
        animes={searchAnime}
        title={`Hasil Pencarian Anime...`}
        seeAll={false}
      />
      <AnimeList
        animes={searchManga}
        title={`Hasil Pencarian Manga...`}
        seeAll={false}
      />
    </>
  );
};

export default Search;
