'use client'

import React, { useEffect, useState, } from 'react';
import ProductService from './product_service';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber} from 'primereact/inputnumber';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './products.css';

export const ProductsTable = () => {

    const [products, setProducts] = useState([]);
    
    // State to control the dialog visibility
    const [dialogVisible, setDialogVisible] = useState(false);
    const [prodName, setProdName] = useState('');
    const [prodDesc, setProdDesc] = useState('');
    const [prodPrice, setProdPrice] = useState(0);
    const [prodImgUrl, setProdImgUrl] = useState('');
    const [prodCat, setProdCat] = useState('');

    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then(data => setProducts(data));
    }, []);

    // Function to handle the form submission
    const handleAddProduct = () => {
        // Logic to add a product...
        console.log('add-product button pressed');
        if (!prodName || prodPrice <= 0 || !prodCat) {
            setDialogVisible(false);
            return;
        }

        const data = {
            name: prodName,
            description: prodDesc,
            price: prodPrice,
            imgUrl: prodImgUrl,
            category: prodCat,
        };
        console.log('Adding product with the following values');
        console.log(data);
        const productService = new ProductService();
        productService.addProduct(data)
            .then((res) => {
                setDialogVisible(false);
            })
            .catch((err) => {
                console.log(`Error: ${err.message}`);
                setDialogVisible(false);
            });
    };

    const formatCurrency = (value: any) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData: any) => {
        return <img src={`${rowData.imgUrl}`} alt={rowData.imgUrl} />;
    }

    const priceBodyTemplate = (rowData: any) => {
        return formatCurrency(rowData.price);
    }

    const header = (
        <div className="table-header">
            Products
        </div>
    );

    return (
        <div className="datatable-doc-demo">
            <div className="card">
                <DataTable value={products} header={header} className="p-datatable-customers" size="normal">
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                </DataTable>

                <Dialog header="Add Product" modal visible={dialogVisible} style={{ width: '50vw' }} onHide={() => setDialogVisible(false)}>
                    <div>
                        <h3>Name</h3>
                        <input type="text" value={prodName} onChange={(e) => setProdName(e.target.value)} />                        
                    </div>
                    <div>
                        <h3>Description</h3>
                        <input type="text" value={prodDesc} onChange={(e) => setProdDesc(e.target.value)} />                        
                    </div>                    
                    <div>
                        <h3>Price</h3>
                        <input type="number" value={prodPrice} onChange={(e) => setProdPrice(Number(e.target.value) || 0)} />                        
                    </div>                    
                    <div>
                        <h3>Image URL</h3>
                        <input type="text" value={prodImgUrl} onChange={(e) => setProdImgUrl(e.target.value)} />                        
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input type="text" value={prodCat} onChange={(e) => setProdCat(e.target.value)} />                        
                    </div>
                    <br/>  
                    <div>
                        <Button type="button" label="Add" onClick={handleAddProduct} />          
                    </div>                      
                </Dialog>
                <br/>
                <Button type="button" label="Add Product" onClick={() => setDialogVisible(true)} />

            </div>
        </div>
    );
}