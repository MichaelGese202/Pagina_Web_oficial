// investors.js
const investorsData = {
    "ChainLink": {
        name: "ChainLink",
        url: "https://chain.link/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/e6/b5/e6b515e9edd0113bd6a5f363c5d0e85f.webp"
    },
    "Immutable": {
        name: "Immutable",
        url: "https://www.immutable.com/",
        logo: "https://cdn.prod.website-files.com/646557ee455c3e16e4a9bcb3/646557ee455c3e16e4a9bcbe_immutable-logo.svg"
    },
    "Multicoin Capital": {
        name: "Multicoin Capital",
        url: "https://multicoin.capital/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/3c/58/3c58e7002ed133ff3fd25c234b0e2f52.webp"
    },
    "Pantera Capital": {
        name: "Pantera Capital",
        url: "https://panteracapital.com/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/13/28/1328238f459798f055c80f7a871fbbf8.webp"
    },
    "HongShan (ex-Sequoia China)": {
        name: "HongShan (ex-Sequoia China)",
        url: "https://redbeard.ventures/",
        logo: "https://img.cryptorank.io/funds/150x150.red_beard_ventures1664361192749.png"
    },
    "Red Beard Ventures": {
        name: "Red Beard Ventures",
        url: "https://www.animocabrands.com/",
        logo: "https://example.com/animoca-logo.png"
    },
    "Blockchain Founders Fund": {
        name: "Blockchain Founders Fund",
        url: "https://blockchainff.com/",
        logo: "https://img.cryptorank.io/funds/150x150.blockchain_founders_fund1666619105678.png"
    }
};

function getInvestorsByNames(names) {
    if (!names || !Array.isArray(names)) return [];
    
    return investorsData
        .filter(investor => 
            names.some(name => 
                investor.name.toLowerCase().includes(name.toLowerCase()) ||
                name.toLowerCase().includes(investor.name.toLowerCase())
            )
        )
        .map(investor => ({
            ...investor,
            logo: investor.logo || 'https://cdn-icons-png.flaticon.com/512/2093/2093691.png'
        }));
}

// Exportar solo si es Node.js (no necesario para navegador)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getInvestorsByNames };
}

