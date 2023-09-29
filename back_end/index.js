import express, { json } from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';
import path from 'path'

const prisma = new PrismaClient();
const app = express ();
app.use(json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server Listening on PORT:", port);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/', express.static(path.join(__dirname, 'public')));

app.get("/status", (request, response) => {
   const status = {
      "Status": "Running"
   };
   response.send(status);
});

app.get('/api/products', async (req, res) => {
    const products = await prisma.product.findMany();
    console.dir(products, { depth: null });
    res.json(products);
});

app.post(`/api/products`, async (req, res) => {
    console.log('/api/products');
    console.log(req.body);
    const { name, description, price, imgUrl, category } = req.body
    const priceN = Number(price) || 0.0;
    const result = await prisma.product.create({
      data: {
        name,
        description,
        price: priceN,
        imgUrl,
        category,
      },
    });
    res.json(result);
});

async function shutdown() {
    await Promise.all([prisma.$disconnect()]);
    console.log('Bye!');
    process.exit(0);
}

process.on('SIGINT', () => {
    console.log('Recieved SIGINT. Shutting down...');
    return shutdown();
});

process.on('SIGTERM', () => {
    console.log('Recieved SIGTERM. Shutting down...');
    return shutdown();
});

process.on('SIGUSR2', () => {
    console.log('Recieved SIGUSR2. Wrapping up...');
    return shutdown();
});
