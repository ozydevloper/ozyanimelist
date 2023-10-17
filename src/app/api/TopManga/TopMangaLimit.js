const responseLimit = await fetch(
  `https://api.jikan.moe/v4/top/manga?limit=10`
);
const TopMangaLimit = await responseLimit.json();
export default TopMangaLimit;
