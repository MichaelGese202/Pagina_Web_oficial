// investors.js
const investorsData = {
    "ChainLink": {
        name: "ChainLink",
        url: "https://chain.link/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/e6/b5/e6b515e9edd0113bd6a5f363c5d0e85f.webp",
        type: "Oracle Network"
    },
    "Immutable": {
        name: "Immutable",
        url: "https://www.immutable.com/",
        logo: "https://cdn.prod.website-files.com/646557ee455c3e16e4a9bcb3/646557ee455c3e16e4a9bcbe_immutable-logo.svg",
        type: "Gaming/NFT Platform"
    },
    "Multicoin Capital": {
        name: "Multicoin Capital",
        url: "https://multicoin.capital/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/3c/58/3c58e7002ed133ff3fd25c234b0e2f52.webp",
        type: "Venture Capital"
    },
    "Pantera Capital": {
        name: "Pantera Capital",
        url: "https://panteracapital.com/",
        logo: "https://dropsearn.fra1.cdn.digitaloceanspaces.com/media/cache/13/28/1328238f459798f055c80f7a871fbbf8.webp",
        type: "Venture Capital"
    },
    "HongShan (ex-Sequoia China)": {
        name: "HongShan (ex-Sequoia China)",
        url: "https://www.hongshan.com/",
        logo: "https://img.cryptorank.io/funds/150x150.red_beard_ventures1664361192749.png",
        type: "Venture Capital"
    },
    "Red Beard Ventures": {
        name: "Red Beard Ventures",
        url: "https://redbeard.ventures/",
        logo: "https://img.cryptorank.io/funds/150x150.red_beard_ventures1664361192749.png",
        type: "Venture Capital"
    },
    "Blockchain Founders Fund": {
        name: "Blockchain Founders Fund",
        url: "https://blockchainff.com/",
        logo: "https://img.cryptorank.io/funds/150x150.blockchain_founders_fund1666619105678.png",
        type: "Venture Capital"
    }
};

/**
 * Obtiene los datos de un inversor por su nombre
 * @param {string} investorName - Nombre del inversor a buscar
 * @returns {Object|null} - Objeto con los datos del inversor o null si no se encuentra
 */
function getInvestorData(investorName) {
    const key = Object.keys(investorsData).find(key => 
        key.toLowerCase() === investorName.toLowerCase()
    );
    return key ? investorsData[key] : null;
}

/**
 * Obtiene datos de múltiples inversores
 * @param {string[]} investorNames - Array de nombres de inversores
 * @returns {Object[]} - Array de objetos con datos de inversores (filtra los no encontrados)
 */
function getMultipleInvestorsData(investorNames) {
    return investorNames
        .map(name => getInvestorData(name))
        .filter(investor => investor !== null);
}

// Exportar funciones para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        investorsData,
        getInvestorData,
        getMultipleInvestorsData
    };
}
