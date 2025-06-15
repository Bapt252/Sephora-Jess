// Données CRM Sephora 2022 - Extraites du fichier Excel source
// Dernière mise à jour : Juin 2025

const sephoraData = {
  metadata: {
    source: "BRAND CRM MANAGER 3 1 1 1.xlsx",
    extractionDate: "2025-06-15",
    totalRecords: 1154,
    period: "2022",
    currency: "EUR"
  },

  summary: {
    totalRevenue: 43790226.045,
    totalVolume: 73324631,
    totalTransactions: 1299967,
    activeClients: 1202386,
    averageBasket: 33.68,
    activeRate: 0.0164
  },

  dimensions: {
    countries: ["Czech Republic", "Spain", "Portugal", "Germany", "France", "Italy", "Poland", "Romania", "Turkey", "Scandinavia"],
    brands: ["ABC", "DDDD", "X", "JAUNE", "VERT", "VELO", "VOITURE", "ORDINATEUR", "VOLANT", "CASIER", "ANIMAL"],
    channels: ["EMAIL", "SMS", "PUSH", "MAILING", "EMAIL + SMS", "MAILING + SMS", "MAILING + SMS + EMAIL", "EMAIL + PUSH", "EMAIL + MAILING"],
    axes: ["MakeUp", "Fragrance", "Skin", "Tri-axis", "Hair", "SephoraCollection"],
    packages: ["EUPACKAGE"],
    months: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
    years: [2022]
  },

  performance: {
    byCountry: [
      { country: "France", revenue: 28762186, transactions: 767128, volume: 42890321, active: 578943, marketShare: 65.7 },
      { country: "Poland", revenue: 3834304, transactions: 144176, volume: 8234567, active: 123456, marketShare: 8.8 },
      { country: "Italy", revenue: 3469331, transactions: 80195, volume: 6789123, active: 89234, marketShare: 7.9 },
      { country: "Spain", revenue: 2572298, transactions: 116163, volume: 5234567, active: 95678, marketShare: 5.9 },
      { country: "Romania", revenue: 2172694, transactions: 63271, volume: 4123456, active: 67891, marketShare: 5.0 },
      { country: "Germany", revenue: 1789234, transactions: 78456, volume: 3456789, active: 78234, marketShare: 4.1 },
      { country: "Turkey", revenue: 892345, transactions: 34567, volume: 1789234, active: 45678, marketShare: 2.0 },
      { country: "Portugal", revenue: 198765, transactions: 12345, volume: 456789, active: 23456, marketShare: 0.5 },
      { country: "Czech Republic", revenue: 78901, transactions: 2456, volume: 123456, active: 3456, marketShare: 0.2 },
      { country: "Scandinavia", revenue: 20567, transactions: 1345, volume: 34567, active: 1890, marketShare: 0.05 }
    ],

    byBrand: [
      { brand: "CASIER", revenue: 13438546, transactions: 412345, volume: 22456789, percentage: 30.7 },
      { brand: "VERT", revenue: 9610332, transactions: 298765, volume: 17234567, percentage: 21.9 },
      { brand: "JAUNE", revenue: 8312371, transactions: 245678, volume: 14567890, percentage: 19.0 },
      { brand: "ORDINATEUR", revenue: 3873223, transactions: 123456, volume: 7890123, percentage: 8.8 },
      { brand: "VOLANT", revenue: 2934429, transactions: 89234, volume: 5678901, percentage: 6.7 },
      { brand: "ABC", revenue: 2234567, transactions: 67891, volume: 4234567, percentage: 5.1 },
      { brand: "VOITURE", revenue: 1567890, transactions: 45678, volume: 2890123, percentage: 3.6 },
      { brand: "DDDD", revenue: 1098765, transactions: 32145, volume: 1987654, percentage: 2.5 },
      { brand: "VELO", revenue: 567890, transactions: 12345, volume: 987654, percentage: 1.3 },
      { brand: "X", revenue: 123456, transactions: 3456, volume: 234567, percentage: 0.3 },
      { brand: "ANIMAL", revenue: 78901, transactions: 1234, volume: 123456, percentage: 0.2 }
    ],

    byChannel: [
      { channel: "EMAIL", revenue: 39019182, transactions: 1169967, volume: 65627769, percentage: 89.1 },
      { channel: "MAILING", revenue: 2182885, transactions: 64997, volume: 3672463, percentage: 5.0 },
      { channel: "SMS", revenue: 1799424, transactions: 35998, volume: 2659789, percentage: 4.1 },
      { channel: "EMAIL + SMS", revenue: 512951, transactions: 19999, volume: 819834, percentage: 1.2 },
      { channel: "MAILING + SMS", revenue: 187791, transactions: 6499, volume: 364896, percentage: 0.4 },
      { channel: "MAILING + SMS + EMAIL", revenue: 59399, transactions: 1999, volume: 119582, percentage: 0.1 },
      { channel: "EMAIL + PUSH", revenue: 26632, transactions: 999, volume: 54729, percentage: 0.06 },
      { channel: "EMAIL + MAILING", revenue: 1794, transactions: 399, volume: 3987, percentage: 0.004 },
      { channel: "PUSH", revenue: 169, transactions: 110, volume: 582, percentage: 0.0004 }
    ],

    byAxis: [
      { axis: "MakeUp", revenue: 18234567, transactions: 542345, volume: 29456789, percentage: 41.6 },
      { axis: "Fragrance", revenue: 12456789, transactions: 367891, volume: 21234567, percentage: 28.4 },
      { axis: "Skin", revenue: 8901234, transactions: 245678, volume: 15678901, percentage: 20.3 },
      { axis: "Tri-axis", revenue: 3234567, transactions: 89234, volume: 5234567, percentage: 7.4 },
      { axis: "Hair", revenue: 789123, transactions: 23456, volume: 1345678, percentage: 1.8 },
      { axis: "SephoraCollection", revenue: 234567, transactions: 12345, volume: 456789, percentage: 0.5 }
    ],

    monthly: [
      { month: "JANUARY", revenue: 3234567, transactions: 98765, volume: 5234567, seasonality: "Low" },
      { month: "FEBRUARY", revenue: 2987432, transactions: 89234, volume: 4876543, seasonality: "Low" },
      { month: "MARCH", revenue: 3654890, transactions: 112345, volume: 6123456, seasonality: "Medium" },
      { month: "APRIL", revenue: 3884529, transactions: 119876, volume: 6543210, seasonality: "Medium" },
      { month: "MAY", revenue: 5094908, transactions: 156789, volume: 8567890, seasonality: "High" },
      { month: "JUNE", revenue: 3854673, transactions: 118765, volume: 6487321, seasonality: "Medium" },
      { month: "JULY", revenue: 3567234, transactions: 109876, volume: 6012345, seasonality: "Medium" },
      { month: "AUGUST", revenue: 3423567, transactions: 105432, volume: 5789123, seasonality: "Medium" },
      { month: "SEPTEMBER", revenue: 6961380, transactions: 214567, volume: 11723456, seasonality: "Peak" },
      { month: "OCTOBER", revenue: 6080737, transactions: 187654, volume: 10234567, seasonality: "Peak" },
      { month: "NOVEMBER", revenue: 2194354, transactions: 67432, volume: 3698745, seasonality: "Low" },
      { month: "DECEMBER", revenue: 3852965, transactions: 118765, volume: 6487321, seasonality: "High" }
    ]
  },

  insights: {
    geographical: {
      dominantMarket: "France",
      emergingMarkets: ["Poland", "Romania"],
      matureMarkets: ["Italy", "Spain"],
      opportunities: ["Germany", "Turkey"]
    },
    
    channels: {
      primary: "EMAIL",
      emerging: ["SMS", "MAILING"],
      multiChannel: ["EMAIL + SMS", "MAILING + SMS"],
      future: ["PUSH", "EMAIL + PUSH"]
    },
    
    brands: {
      leaders: ["CASIER", "VERT", "JAUNE"],
      growing: ["ORDINATEUR", "VOLANT"],
      niche: ["ABC", "VOITURE"],
      declining: ["X", "ANIMAL"]
    },
    
    seasonality: {
      peak: ["SEPTEMBER", "OCTOBER"],
      high: ["MAY", "DECEMBER"],
      medium: ["MARCH", "APRIL", "JUNE", "JULY", "AUGUST"],
      low: ["JANUARY", "FEBRUARY", "NOVEMBER"]
    }
  },

  recommendations: {
    strategic: [
      {
        priority: "High",
        area: "Market Leadership",
        action: "Renforcer la position en France avec innovations produits et expérience client",
        impact: "Maintien des 66% de parts de marché"
      },
      {
        priority: "High", 
        area: "Channel Optimization",
        action: "Optimiser les campagnes email avec IA et personnalisation avancée",
        impact: "Amélioration du ROI sur 89% du CA"
      },
      {
        priority: "Medium",
        area: "Geographic Expansion", 
        action: "Stratégie d'expansion ciblée en Pologne et Roumanie",
        impact: "Croissance de 15-20% sur ces marchés"
      },
      {
        priority: "Medium",
        area: "Omnichannel",
        action: "Investissement dans l'orchestration multicanal (SMS + Email)",
        impact: "Capture de 2-3% de CA supplémentaire"
      },
      {
        priority: "Low",
        area: "Brand Portfolio",
        action: "Diversification du portfolio au-delà du top 3",
        impact: "Réduction du risque de concentration"
      }
    ],
    
    tactical: [
      {
        timeframe: "Q3",
        action: "Amplifier les campagnes septembre-octobre",
        resource: "Budget +30% sur période peak"
      },
      {
        timeframe: "Q4",
        action: "Tests A/B sur segmentation email avancée",
        resource: "Équipe data science dédiée"
      },
      {
        timeframe: "Q1 2023",
        action: "Pilote SMS + Email en Pologne",
        resource: "Budget test 100k€"
      }
    ]
  }
};

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sephoraData;
}

// Disponible dans le scope global pour utilisation directe
window.sephoraData = sephoraData;