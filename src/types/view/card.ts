
export interface CardData {
  id: string;
  title: string;
  price: number;
}

export interface CardSettings {
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

// Описывает данные для отрисовки шаблона card-basket
export interface CardBasketData extends CardData{
  index: number;
}

export interface CardBasketSettings extends CardSettings{
  itemIndex: string;
  deleteButton: string;
}


// Описывает данные для отрисовки шаблона card-catalog
export interface CardCatalogData extends CardData{
  category: string;
  image: string;
}


// Описывает данные для отрисовки шаблона card-preview
export interface CardPreviewData extends CardData{
  category: string;
  description: string;
  image: string;
}

export interface CardPreviewSettings extends CardSettings{
  button: string;
}
