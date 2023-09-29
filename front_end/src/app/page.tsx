import Image from 'next/image'

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductsTable } from './products';

const products = [
  { id: 1, name: 'Computer', price: 1000 },
  { id: 2, name: 'Mobile', price: 500 },
];

export default function Home() {
  return (
    <ProductsTable></ProductsTable>
  )
}
