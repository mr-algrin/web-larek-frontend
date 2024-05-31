import { settings } from '../utils/constants'
import {ensureElement} from "../utils/utils";

export const successTemplate = ensureElement<HTMLTemplateElement>(settings.templates.success);
export const cardCatalogTemplate = ensureElement<HTMLTemplateElement>(settings.templates.cardCatalog);
export const cardPreviewTemplate = ensureElement<HTMLTemplateElement>(settings.templates.cardPreview);
export const cardBasketTemplate = ensureElement<HTMLTemplateElement>(settings.templates.cardBasket);
export const basketTemplate = ensureElement<HTMLTemplateElement>(settings.templates.basket);
export const orderTemplate = ensureElement<HTMLTemplateElement>(settings.templates.order);
export const contactsTemplate = ensureElement<HTMLTemplateElement>(settings.templates.contacts);
