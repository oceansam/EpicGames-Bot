const axios = require("axios");
async function fetchData() {
	const res = await axios.get(
		"https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions"
	);
	// const activeSales = res.data.Catalog.searchStore.elements.filter((game) => {
	// 	return (
	// 		new Date(game.promotions.promotionalOffers[0].startDate) < new Date()
	// 	);
	// });
	return res.data.data.Catalog.searchStore.elements;
}

module.exports = {
	fetchData,
};
