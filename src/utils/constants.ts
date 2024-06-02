export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const settings = {
  templates: {
    success: '#success',
    cardCatalog: '#card-catalog',
    cardPreview: '#card-preview',
    cardBasket: '#card-basket',
    basket: '#basket',
    order: '#order',
    contacts: '#contacts'
  },
  form: {
    error: '.form__errors',
    button: 'button[type="submit"]'
  },
  orderForm: {
    cardButton: 'button[name="card"]',
    cashButton: 'button[name="cash"]'
  },
  modal: {
    container: '#modal-container',
    closeButton: '.modal__close',
    content: '.modal__content',
    activeClass: 'modal_active',
  },
  basketCounter: {
    counter: '.header__basket-counter'
  },
  cardCatalog: {
    category: '.card__category',
    title: '.card__title',
    image: '.card__image',
    price: '.card__price'
  },
  cardBasket: {
    itemIndex: '.basket__item-index',
    title: '.card__title',
    price: '.card__price',
    deleteButton: '.basket__item-delete'
  },
  basket: {
    items: '.basket__list',
    price: '.basket__price',
    button: '.basket__button'
  },
  success: {
    description: '.order-success__description',
    successButton: '.order-success__close'
  },
  preview: {
    image: '.card__image',
    category: '.card__category',
    title: '.card__title',
    text: '.card__text',
    price: '.card__price',
    button: '.card__button'
  },
};
