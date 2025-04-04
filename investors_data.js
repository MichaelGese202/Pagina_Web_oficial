// investors_data.js (versión simplificada)
const investorsData = {
    "ChainLink": {
        url: "https://chain.link/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/e6/b5/e6b515e9edd0113bd6a5f363c5d0e85f.webp"
    },
    "Immutable": {
        url: "https://www.immutable.com/",
        logo: "https://cdn.prod.website-files.com/646557ee455c3e16e4a9bcb3/646557ee455c3e16e4a9bcbe_immutable-logo.svg"
    },
    "Multicoin Capital": {
        url: "https://multicoin.capital/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/3c/58/3c58e7002ed133ff3fd25c234b0e2f52.webp"
    },
    "Pantera Capital": {
        url: "https://panteracapital.com/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/13/28/1328238f459798f055c80f7a871fbbf8.webp"
    },
    "HongShan (ex-Sequoia China)": {
        url: "https://www.hongshan.com/",
        logo: "https://img.cryptorank.io/funds/150x150.red_beard_ventures1664361192749.png"
    },
    "Red Beard Ventures": {
        url: "https://redbeard.ventures/",
        logo: "https://img.cryptorank.io/funds/150x150.red_beard_ventures1664361192749.png"
    },
    "Blockchain Founders Fund": {
        url: "https://blockchainff.com/",
        logo: "https://img.cryptorank.io/funds/150x150.blockchain_founders_fund1666619105678.png"
    }
};

 
function getInvestorData(investorName) {
    const key = Object.keys(investorsData).find(key => 
        key.toLowerCase() === investorName.toLowerCase()
    );
    return key ? investorsData[key] : null;
}

// Exportar como objeto global para acceso directo
window.InvestorsData = {
    data: investorsData,
    getInvestor: getInvestorData
};
