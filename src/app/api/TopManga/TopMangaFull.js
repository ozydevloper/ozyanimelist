const response = await fetch(`https://api.jikan.moe/v4/top/manga`);
const TopMangaFull = await response.json();
export default TopMangaFull;
