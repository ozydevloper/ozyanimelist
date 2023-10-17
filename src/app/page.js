import AnimeList from '@/components/AnimeList';
import topAnimeLimit from './api/TopAnime/TopAnime';
import TopMangaLimit from './api/TopManga/TopMangaLimit';

const Page = () => {
  return (
    <>
      <AnimeList animes={topAnimeLimit} title={'Anime Paling Populer...'} seeAll={true} pageHREF={'populer/anime'}/>
      <AnimeList animes={TopMangaLimit} title={'Manga Paling Populer...'} seeAll={true} pageHREF={'populer/manga'}/>
    </>
  );
};

export default Page;
