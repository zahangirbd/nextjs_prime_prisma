
export default class ProductService {
	async getProducts() {
        const url = 'http://172.29.68.173:4000/api/products';
		// const res = await fetch('data/products.json');
        const res = await fetch(url);
        const d = await res.json();
        // console.log(d);
        return d;
        // return d.data;
    }

    async addProduct(data) {
		const url = 'http://172.29.68.173:4000/api/products';
        const headers = { 'Content-Type': 'application/json' };
        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });
        const d = await res.json();
        return d;
        // return d.data;
	}
}
 