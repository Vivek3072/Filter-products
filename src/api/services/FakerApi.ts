import axios from "axios"
import { Products } from "../interfaces/Products"

const fake_store_api_url = "https://fakestoreapi.com"
const client = axios.create({ baseURL: fake_store_api_url })

const generateRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomPrice = () => generateRandomValue(200, 4200).toString();
const randomRating = () => generateRandomValue(1, 5);
const randomRatingCount = () => generateRandomValue(0, 300);

const generateRandomProduct = (product: Products): Products => ({
    id: product.id,
    title: product.title,
    price: randomPrice(),
    image: product.image,
    rating: randomRating(),
    ratingCount: randomRatingCount(),
});

const generateLargeAmountOfProducts = (products: Products[], count: number): Products[] => {
    const result: Products[] = [];
    for (let i = 0; i < count; i++) {
        result.push(generateRandomProduct(products[i % products.length]));
    }
    return result;
};

const getProducts: (limit?: number) => Promise<Products[]> = async (limit) => {
    try {
        const response = await client({
            method: 'get', url: '/products/category/women\'s clothing', params: { limit }
        })

        if (response.status === 200 && response.data) {
            if (limit) {
                return response.data.map((product: Products) => { return { id: product.id, title: product.title, price: product.price, image: product.image, rating: randomRating(), ratingCount: randomRatingCount() } })
            }
            else {
                return generateLargeAmountOfProducts(response.data, 28)
            }
        }
        else
            return []
    } catch (err) {
        console.error(err)
        return []
    }
}

export { getProducts }