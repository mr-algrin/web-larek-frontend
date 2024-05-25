
// Описывает данные для отрисовки шаблона card-basket
export interface CardBasketData {
  id: string;
  index: number;
  title: string;
  price: number;
}

export interface CardBasketSettings{
  index: string;
  title: string;
  price: string;
  deleteButton: string;
}
