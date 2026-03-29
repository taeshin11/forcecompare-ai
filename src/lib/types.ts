export interface Country {
  name: string;
  code: string;
  flag: string;
  powerIndex: number;
  military: {
    totalPersonnel: number;
    activeMilitary: number;
    reserveMilitary: number;
  };
  army: {
    tanks: number;
    armoredVehicles: number;
    selfPropelledArtillery: number;
    rocketLaunchers: number;
  };
  airforce: {
    totalAircraft: number;
    fighters: number;
    attackHelicopters: number;
    transportAircraft: number;
  };
  navy: {
    totalAssets: number;
    carriers: number;
    destroyers: number;
    submarines: number;
    frigates: number;
  };
  resources: {
    defenseBudget: number;
    oilProduction: number;
    oilReserves: number;
  };
  logistics: {
    airports: number;
    majorPorts: number;
    roadwayCoverage: number;
  };
  geography: {
    squareArea: number;
    sharedBorders: number;
    coastline: number;
  };
}

export interface ComparisonResult {
  countryA: Country;
  countryB: Country;
  scoreA: number;
  scoreB: number;
  winner: Country;
  categories: CategoryResult[];
}

export interface CategoryResult {
  name: string;
  icon: string;
  subcategories: SubcategoryResult[];
  winnerCode: string;
}

export interface SubcategoryResult {
  name: string;
  valueA: number;
  valueB: number;
  winnerCode: string;
}
