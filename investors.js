// investors.js
const investors = {
    "Binance Labs": {
        url: "https://labs.binance.com",
        logo: "https://example.com/binance-labs-logo.png"
    },
    "Coinbase Ventures": {
        url: "https://www.coinbase.com/ventures",
        logo: "https://example.com/coinbase-ventures-logo.png"
    },
    "a16z Crypto": {
        url: "https://a16z.com/crypto/",
        logo: "https://example.com/a16z-logo.png"
    },
    "Paradigm": {
        url: "https://www.paradigm.xyz/",
        logo: "https://example.com/paradigm-logo.png"
    },
    "Polychain Capital": {
        url: "https://polychain.capital/",
        logo: "https://example.com/polychain-logo.png"
    },
    "Animoca Brands": {
        url: "https://www.animocabrands.com/",
        logo: "https://example.com/animoca-logo.png"
    },
    "Pantera Capital": {
        url: "https://www.panteracapital.com/",
        logo: "https://example.com/pantera-logo.png"
    }
};

function getInvestorByName(name) {
    return investors[name] || null;
}

function getInvestorsByNames(names) {
    return names.map(name => {
        return {
            name: name,
            ...getInvestorByName(name)
        };
    }).filter(inv => inv.url); // Filtramos los que no se encontraron
}
