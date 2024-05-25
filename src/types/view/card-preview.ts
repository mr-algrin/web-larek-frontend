
// Описывает данные для отрисовки шаблона card-preview
export interface CardPreviewData {
  id: string;
  title: string;
  text: string;
  image: string;
  price: number;
}

export interface CardPreviewSettings {
  image: string;
  category: string;
  title: string;
  text: string;
  price: number;
  addButton: string;
}
