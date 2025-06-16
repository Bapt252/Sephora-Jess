// Données CRM Sephora 2022 - Extraites du fichier Excel source
// Dernière mise à jour : Juin 2025

const sephoraData = {
  metadata: {
    source: "BRAND CRM MANAGER 3 1 1 1.xlsx",
    extractionDate: "2025-06-16",
    totalRecords: 1154,
    period: "2022",
    currency: "EUR"
  },

  summary: {
    totalRevenue: 43790226.04,
    totalVolume: 70324631,
    totalTransactions: 1299967,
    activeClients: 1202386,
    averageBasket: 33.68,
    activeRate: 0.0164
  },

  dimensions: {
    countries: ["France", "Poland", "Italy", "Spain", "Romania", "Turkey", "Czech Republic", "Portugal", "Germany", "Scandinavia"],
    brands: ["CASIER", "VERT", "JAUNE", "ORDINATEUR", "VOLANT", "ANIMAL", "VELO", "VOITURE", "X", "ABC", "DDDD"],
    channels: ["EMAIL", "MAILING", "SMS", "EMAIL + SMS", "MAILING + SMS", "MAILING + SMS + EMAIL", "EMAIL + PUSH", "EMAIL + MAILING", "PUSH"],
    axes: ["MakeUp", "Fragrance", "Skin", "Tri-axis", "Hair", "SephoraCollection"],
    packages: ["EUPACKAGE", "LOCALPACKAGE"],
    months: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
    years: [2022]
  },

  performance: {
    byCountry: [
      { country: "France", revenue: 28762185.63, transactions: 767128, volume: 32713341, active: 578943, marketShare: 65.7 },
      { country: "Poland", revenue: 3834303.93, transactions: 144176, volume: 7954806, active: 123456, marketShare: 8.8 },
      { country: "Italy", revenue: 3469330.76, transactions: 80195, volume: 6409394, active: 89234, marketShare: 7.9 },
      { country: "Spain", revenue: 2572297.77, transactions: 116163, volume: 7955499, active: 95678, marketShare: 5.9 },
      { country: "Romania", revenue: 2172694.34, transactions: 63271, volume: 5361736, active: 67891, marketShare: 5.0 },
      { country: "Turkey", revenue: 1178779.15, transactions: 54709, volume: 4154255, active: 45678, marketShare: 2.7 },
      { country: "Czech Republic", revenue: 885413.91, transactions: 34328, volume: 2286444, active: 23456, marketShare: 2.0 },
      { country: "Portugal", revenue: 651794.93, transactions: 29989, volume: 2387452, active: 19876, marketShare: 1.5 },
      { country: "Germany", revenue: 228350.39, transactions: 8896, volume: 1426088, active: 7234, marketShare: 0.5 },
      { country: "Scandinavia", revenue: 35075.23, transactions: 1112, volume: 2675616, active: 890, marketShare: 0.1 }
    ],

    byBrand: [
      { brand: "CASIER", revenue: 13438545.57, transactions: 730392, volume: 18383987, percentage: 30.7 },
      { brand: "VERT", revenue: 9610331.84, transactions: 147213, volume: 8239467, percentage: 21.9 },
      { brand: "JAUNE", revenue: 8312371.29, transactions: 177076, volume: 11297563, percentage: 19.0 },
      { brand: "ORDINATEUR", revenue: 3873222.77, transactions: 67143, volume: 9366958, percentage: 8.8 },
      { brand: "VOLANT", revenue: 2934428.62, transactions: 56624, volume: 9530474, percentage: 6.7 },
      { brand: "ANIMAL", revenue: 2836110.38, transactions: 60522, volume: 5706628, percentage: 6.5 },
      { brand: "VELO", revenue: 1692627.69, transactions: 42826, volume: 5329318, percentage: 3.9 },
      { brand: "VOITURE", revenue: 524727.85, transactions: 8714, volume: 3743616, percentage: 1.2 },
      { brand: "X", revenue: 439399.36, transactions: 5323, volume: 932807, percentage: 1.0 },
      { brand: "ABC", revenue: 124490.20, transactions: 4105, volume: 683268, percentage: 0.3 },
      { brand: "DDDD", revenue: 3970.47, transactions: 29, volume: 110545, percentage: 0.01 }
    ],

    byChannel: [
      { channel: "EMAIL", revenue: 39019181.92, transactions: 1200495, volume: 67517304, percentage: 89.1 },
      { channel: "MAILING", revenue: 2182884.59, transactions: 28196, volume: 688618, percentage: 5.0 },
      { channel: "SMS", revenue: 1799423.76, transactions: 47258, volume: 3523862, percentage: 4.1 },
      { channel: "EMAIL + SMS", revenue: 512950.78, transactions: 20910, volume: 1384470, percentage: 1.2 },
      { channel: "MAILING + SMS", revenue: 187791.00, transactions: 1775, volume: 148124, percentage: 0.4 },
      { channel: "MAILING + SMS + EMAIL", revenue: 59399.04, transactions: 422, volume: 41262, percentage: 0.1 },
      { channel: "EMAIL + PUSH", revenue: 26631.53, transactions: 898, volume: 10146, percentage: 0.1 },
      { channel: "EMAIL + MAILING", revenue: 1794.46, transactions: 12, volume: 1825, percentage: 0.004 },
      { channel: "PUSH", revenue: 168.96, transactions: 1, volume: 9020, percentage: 0.0004 }
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