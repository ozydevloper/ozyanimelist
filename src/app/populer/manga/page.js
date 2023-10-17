import AnimeList from '@/components/AnimeList';
import TopMangaFull from '@/app/api/TopManga/TopMangaFull';
const Page = () => {
  return (
    <>
      <AnimeList animes={TopMangaFull} title={'Populer Manga...'} />
    </>
  );
};

export default Page;
