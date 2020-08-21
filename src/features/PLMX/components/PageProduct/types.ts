export interface PluItem {
  customer: String;
  category: String;
  plu: Number;
  russian_title: String;
  english_title: String;
  ui4: String;
  calibre: String;
  quant: Number;
  needs: Number;
  budget: Number;
}

export type PluData = PluItem[];

export type ProductsItem = {
  customer: string;
  plu: number;
  russian_title: string;
  english_title: string;
  financial_code: string;
  size: string;
  quantum: string;
  offer_count: number;
  budget: number;
  need_weight: number;
  offers_volume: number;
  offers: any[];
};

export type ProductsData = ProductsItem[];
