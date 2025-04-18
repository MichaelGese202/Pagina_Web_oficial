// investors_data.js (versión simplificada)
const investorsData = {
    "Alphablockz": {
        url: "https://alphablockz.io/",
        logo: "https://img.cryptorank.io/funds/150x150.alphablockz1702032088497.png"
    },
    "Momentum 6": {
        url: "https://momentum6.com/",
        logo: "https://img.cryptorank.io/funds/150x150.momentum_61666014123882.png"
    },
    "Spicy Capital": {
        url: "https://spicy.capital/",
        logo: "https://img.cryptorank.io/funds/150x150.spicy_capital1702292964044.png"
    },
    "AZA Ventures": {
        url: "https://www.aza.ventures/#",
        logo: "https://img.cryptorank.io/funds/150x150.aza_ventures1717594924385.png"
    },
    "ExNetwork Capital": {
        url: "https://exnetworkcapital.com/",
        logo: "https://img.cryptorank.io/funds/150x150.exnetwork%20capital1648497301377.png"
    },
    "BlackDragon": {
        url: "https://www.blackdragon.io/",
        logo: "https://img.cryptorank.io/funds/150x150.black_dragon1676371014514.png"
    },
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
    },
    "Stani Kulechov": {
        url: "https://x.com/StaniKulechov",
        logo: "https://img.cryptorank.io/funds/150x150.stani_kulechov1678784089440.png"
    },
    "LongHash Ventures": {
        url: "https://www.longhash.vc/",
        logo: "https://img.cryptorank.io/funds/150x150.longhash%20ventures1649418223202.png"
    },
    "Protocolo Labs": {
        url: "https://www.protocol.ai/",
        logo: "https://img.cryptorank.io/funds/150x150.protocol_labs1662643032114.png"
    },
    "Superscrypt": {
        url: "https://www.superscrypt.xyz/",
        logo: "https://img.cryptorank.io/funds/150x150.superscrypt1666886838346.png"
    },
    "East Ventures": {
        url: "https://east.vc/",
        logo: "https://img.cryptorank.io/funds/150x150.east_ventures1668163971760.png"
    },
    "M31 Capital": {
        url: "https://m31.capital/",
        logo: "https://img.cryptorank.io/funds/150x150.m_31_capital1680859419002.png"
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
