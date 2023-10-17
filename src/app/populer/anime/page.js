import AnimeList from '@/components/AnimeList';
import topAnimeFull from '../../api/TopAnime/TopAnimeFull';
const Page = () => {
  return (
    <>
      <AnimeList animes={topAnimeFull} title={'Populer Animes...'} />
    </>
  );
};

export default Page;
