const data = [
  {
    "sno": 1,
    "name": "Bhansali Engg.",
    "current_market_price": 158.25,
    "market_cap": 2625.46,
    "stock_p_e": 7.86,
    "dividend_yield": 0.63,
    "roce_percent": 86.18,
    "roe_previous_annual": 20.21,
    "debt_to_equity": 0,
    "eps": 20.13,
    "reserves": 664.76,
    "debt": 0
  },
  {
    "sno": 2,
    "name": "Coal India",
    "current_market_price": 147.45,
    "market_cap": 90869.43,
    "stock_p_e": 7.13,
    "dividend_yield": 8.48,
    "roce_percent": 73.08,
    "roe_previous_annual": 74.9,
    "debt_to_equity": 0.13,
    "eps": 20.69,
    "reserves": 30920.81,
    "debt": 4808.98
  },
  {
    "sno": 3,
    "name": "IOL Chemicals",
    "current_market_price": 617.15,
    "market_cap": 3623.01,
    "stock_p_e": 7.88,
    "dividend_yield": 0.65,
    "roce_percent": 68.87,
    "roe_previous_annual": 69.54,
    "debt_to_equity": 0.02,
    "eps": 78.78,
    "reserves": 1036.08,
    "debt": 24.55
  },
  {
    "sno": 4,
    "name": "Dolat Investment",
    "current_market_price": 72.5,
    "market_cap": 1276,
    "stock_p_e": 8.7,
    "dividend_yield": 0.21,
    "roce_percent": 59.64,
    "roe_previous_annual": 38.37,
    "debt_to_equity": 0.31,
    "eps": 8.34,
    "reserves": 346.11,
    "debt": 114.32
  },
  {
    "sno": 5,
    "name": "NDTV",
    "current_market_price": 79.8,
    "market_cap": 514.51,
    "stock_p_e": 7.26,
    "dividend_yield": 0,
    "roce_percent": 52.92,
    "roe_previous_annual": 27.17,
    "debt_to_equity": 0.45,
    "eps": 11,
    "reserves": 125.88,
    "debt": 68.27
  },
  {
    "sno": 6,
    "name": "Balmer Law. Inv.",
    "current_market_price": 480.25,
    "market_cap": 1066.16,
    "stock_p_e": 12.57,
    "dividend_yield": 7.81,
    "roce_percent": 49.81,
    "roe_previous_annual": 48.39,
    "debt_to_equity": 0,
    "eps": 38.21,
    "reserves": 153.22,
    "debt": 0
  },
  {
    "sno": 7,
    "name": "Ebixcash World",
    "current_market_price": 681.25,
    "market_cap": 758.09,
    "stock_p_e": 14.63,
    "dividend_yield": 0,
    "roce_percent": 43.76,
    "roe_previous_annual": -1.04,
    "debt_to_equity": 0.2,
    "eps": 46.58,
    "reserves": 156.64,
    "debt": 32.81
  },
  {
    "sno": 8,
    "name": "Mangalam Organic",
    "current_market_price": 706.5,
    "market_cap": 605.08,
    "stock_p_e": 8.79,
    "dividend_yield": 0.14,
    "roce_percent": 43.65,
    "roe_previous_annual": 78.9,
    "debt_to_equity": 0,
    "eps": 75.66,
    "reserves": 180.64,
    "debt": 0.47
  },
  {
    "sno": 9,
    "name": "INEOS Styrolut.",
    "current_market_price": 1321.75,
    "market_cap": 2324.96,
    "stock_p_e": 8.3,
    "dividend_yield": 0,
    "roce_percent": 43.41,
    "roe_previous_annual": 4.27,
    "debt_to_equity": 0.09,
    "eps": 159.35,
    "reserves": 871.19,
    "debt": 78.25
  },
  {
    "sno": 10,
    "name": "Expleo Solutions",
    "current_market_price": 620.45,
    "market_cap": 636.12,
    "stock_p_e": 12.61,
    "dividend_yield": 0,
    "roce_percent": 39.24,
    "roe_previous_annual": 27.41,
    "debt_to_equity": 0,
    "eps": 49.2,
    "reserves": 191.61,
    "debt": 0
  },
  {
    "sno": 11,
    "name": "Sh. Jagdamba Pol",
    "current_market_price": 637.65,
    "market_cap": 558.45,
    "stock_p_e": 13.65,
    "dividend_yield": 0.04,
    "roce_percent": 38.3,
    "roe_previous_annual": 34.66,
    "debt_to_equity": 0.28,
    "eps": 46.71,
    "reserves": 131.9,
    "debt": 37.21
  },
  {
    "sno": 12,
    "name": "Godawari Power",
    "current_market_price": 955.9,
    "market_cap": 3368.23,
    "stock_p_e": 5.28,
    "dividend_yield": 0.52,
    "roce_percent": 37.04,
    "roe_previous_annual": 13.65,
    "debt_to_equity": 0.42,
    "eps": 181.17,
    "reserves": 2001.48,
    "debt": 852.45
  },
  {
    "sno": 13,
    "name": "Cigniti Tech.",
    "current_market_price": 422.9,
    "market_cap": 1184.97,
    "stock_p_e": 11.25,
    "dividend_yield": 0.59,
    "roce_percent": 36.36,
    "roe_previous_annual": 58.18,
    "debt_to_equity": 0.12,
    "eps": 37.6,
    "reserves": 344.33,
    "debt": 45.67
  },
  {
    "sno": 14,
    "name": "Kirl. Ferrous",
    "current_market_price": 245.2,
    "market_cap": 3392.94,
    "stock_p_e": 11.23,
    "dividend_yield": 0.82,
    "roce_percent": 34.58,
    "roe_previous_annual": 16.36,
    "debt_to_equity": 0.21,
    "eps": 21.84,
    "reserves": 930.2,
    "debt": 213.83
  },
  {
    "sno": 15,
    "name": "Rites",
    "current_market_price": 246.7,
    "market_cap": 5928.25,
    "stock_p_e": 13.67,
    "dividend_yield": 6.49,
    "roce_percent": 34.27,
    "roe_previous_annual": 20.25,
    "debt_to_equity": 0.01,
    "eps": 17.51,
    "reserves": 2451.95,
    "debt": 33.48
  },
  {
    "sno": 16,
    "name": "Guj.St.Petronet",
    "current_market_price": 272.05,
    "market_cap": 15349.37,
    "stock_p_e": 9.76,
    "dividend_yield": 0.74,
    "roce_percent": 34.25,
    "roe_previous_annual": 35.23,
    "debt_to_equity": 0.37,
    "eps": 27.88,
    "reserves": 4926.22,
    "debt": 2037.96
  },
  {
    "sno": 17,
    "name": "Ester Industries",
    "current_market_price": 143.5,
    "market_cap": 1196.7,
    "stock_p_e": 8.42,
    "dividend_yield": 1.74,
    "roce_percent": 33.27,
    "roe_previous_annual": 27.52,
    "debt_to_equity": 0.33,
    "eps": 17.04,
    "reserves": 474.91,
    "debt": 172.54
  },
  {
    "sno": 18,
    "name": "Anjani Portland",
    "current_market_price": 305.1,
    "market_cap": 771.47,
    "stock_p_e": 9.08,
    "dividend_yield": 1.64,
    "roce_percent": 32.69,
    "roe_previous_annual": 15.65,
    "debt_to_equity": 0.01,
    "eps": 33.61,
    "reserves": 321.02,
    "debt": 2.8
  },
  {
    "sno": 19,
    "name": "Venky's (India)",
    "current_market_price": 2298.75,
    "market_cap": 3238.33,
    "stock_p_e": 12.1,
    "dividend_yield": 0,
    "roce_percent": 32.05,
    "roe_previous_annual": -3.23,
    "debt_to_equity": 0.16,
    "eps": 190.06,
    "reserves": 1090.33,
    "debt": 177.82
  },
  {
    "sno": 20,
    "name": "Heritage Foods",
    "current_market_price": 341.05,
    "market_cap": 1582.4,
    "stock_p_e": 10.61,
    "dividend_yield": 0.73,
    "roce_percent": 31.7,
    "roe_previous_annual": -25.44,
    "debt_to_equity": 0.06,
    "eps": 32.16,
    "reserves": 572.63,
    "debt": 35.98
  },
  {
    "sno": 21,
    "name": "SIS",
    "current_market_price": 393.8,
    "market_cap": 5844.57,
    "stock_p_e": 10.17,
    "dividend_yield": 0.51,
    "roce_percent": 31.66,
    "roe_previous_annual": 17.09,
    "debt_to_equity": 0.64,
    "eps": 24.64,
    "reserves": 1756.61,
    "debt": 1164.56
  },
  {
    "sno": 22,
    "name": "GTPL Hathway",
    "current_market_price": 146.4,
    "market_cap": 1646.46,
    "stock_p_e": 8.75,
    "dividend_yield": 2.05,
    "roce_percent": 31.53,
    "roe_previous_annual": 16.5,
    "debt_to_equity": 0.16,
    "eps": 16.73,
    "reserves": 767.67,
    "debt": 140.96
  },
  {
    "sno": 23,
    "name": "Welspun Corp",
    "current_market_price": 144.75,
    "market_cap": 3777.24,
    "stock_p_e": 7.02,
    "dividend_yield": 7.25,
    "roce_percent": 29.6,
    "roe_previous_annual": -1.53,
    "debt_to_equity": 0.11,
    "eps": 20.64,
    "reserves": 3256.75,
    "debt": 365.75
  },
  {
    "sno": 24,
    "name": "I G Petrochems",
    "current_market_price": 598.8,
    "market_cap": 1844,
    "stock_p_e": 9.78,
    "dividend_yield": 0.33,
    "roce_percent": 29.58,
    "roe_previous_annual": 3.14,
    "debt_to_equity": 0.15,
    "eps": 61.08,
    "reserves": 791.2,
    "debt": 125.94
  },
  {
    "sno": 25,
    "name": "Geojit Fin. Ser.",
    "current_market_price": 68,
    "market_cap": 1621.07,
    "stock_p_e": 13.16,
    "dividend_yield": 2.21,
    "roce_percent": 29.12,
    "roe_previous_annual": 9.65,
    "debt_to_equity": 0.06,
    "eps": 5.17,
    "reserves": 568.14,
    "debt": 36.47
  },
  {
    "sno": 26,
    "name": "Sasken Technol.",
    "current_market_price": 971.8,
    "market_cap": 1462.64,
    "stock_p_e": 12.77,
    "dividend_yield": 3.09,
    "roce_percent": 28.84,
    "roe_previous_annual": 13.22,
    "debt_to_equity": 0,
    "eps": 76.11,
    "reserves": 549.5,
    "debt": 0
  },
  {
    "sno": 27,
    "name": "Engineers India",
    "current_market_price": 84.15,
    "market_cap": 4729.59,
    "stock_p_e": 13.76,
    "dividend_yield": 6.12,
    "roce_percent": 28.78,
    "roe_previous_annual": 15.73,
    "debt_to_equity": 0,
    "eps": 5.44,
    "reserves": 2119.81,
    "debt": 3.57
  },
  {
    "sno": 28,
    "name": "Petronet LNG",
    "current_market_price": 236.2,
    "market_cap": 35430,
    "stock_p_e": 13.25,
    "dividend_yield": 5.29,
    "roce_percent": 28.14,
    "roe_previous_annual": 22.26,
    "debt_to_equity": 0.28,
    "eps": 17.83,
    "reserves": 9990.19,
    "debt": 3218.22
  },
  {
    "sno": 29,
    "name": "Saksoft",
    "current_market_price": 508.4,
    "market_cap": 533.31,
    "stock_p_e": 11.74,
    "dividend_yield": 0.89,
    "roce_percent": 26.35,
    "roe_previous_annual": 20.16,
    "debt_to_equity": 0.14,
    "eps": 43.32,
    "reserves": 196.24,
    "debt": 28.46
  },
  {
    "sno": 30,
    "name": "Polyplex Corpn",
    "current_market_price": 1187.2,
    "market_cap": 3726.91,
    "stock_p_e": 7.28,
    "dividend_yield": 12.38,
    "roce_percent": 26.3,
    "roe_previous_annual": 8.67,
    "debt_to_equity": 0.25,
    "eps": 163.04,
    "reserves": 2996.69,
    "debt": 758
  }
 ]
export default data;