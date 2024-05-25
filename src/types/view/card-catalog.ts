
// Описывает данные для отрисовки шаблона card-catalog
export interface CardCatalogData {
  id: string;
  category: string;
  title: string;
  image: string;
  price: number;
}

export interface CardCatalogSettings {
  cardButton: string;
  category: string;
  title: string;
  image: string;
  price: string;
}
