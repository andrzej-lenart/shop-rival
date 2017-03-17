import 'whatwg-fetch';
import chalk from 'chalk';

const baseUrl = 'http://localhost:3003/'

export function getProducts() {
    return get("products");
}

export function getProductCategories(){
    return getProducts().then(products => {
        return products.map(product => product.category)
                       .filter((category, index, self) => {
                            return self.indexOf(category) === index;
                       });
    });
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(err) {
    console.log(chalk.red(err));
}