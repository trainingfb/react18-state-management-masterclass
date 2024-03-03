
export interface News {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface DealOfTheWeek {
  id: string;
  title: string;
  cost: number;
  promoCost: number;
  description: string;
  url: string;
}

export interface Product {
  id: string;
  title: string;
  cost: number;
  description: string;
  url: string;
}

export interface Newsletter {
  title: string;
  description: string;
}
