import './scss/styles.scss';
import {ProductApi} from "./components/productApi";
import {API_URL, CDN_URL} from "./utils/constants";

const product = new ProductApi(CDN_URL, API_URL);
product.getProducts().then(data => console.log(data));
