const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
const topAnimeFull = await response.json();
export default topAnimeFull;
