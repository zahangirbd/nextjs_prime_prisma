import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    /*
    const product = await prisma.product.create({
        data: {
          name: 'iPhone 14',
          description: 'iPhone 14 from $699 or $29.12/mo.per month for 24 mo.monthsFootnote*',
          price: 699.50,
          imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-202309',
          category: 'mobile'
        },
    });
    console.log(product);
    */
    const products = await prisma.product.findMany();
    console.log(products);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })