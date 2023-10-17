const responseLimit = await fetch(
  `https://api.jikan.moe/v4/top/anime?limit=10`
);
const topAnimeLimit = await responseLimit.json();
export default topAnimeLimit
