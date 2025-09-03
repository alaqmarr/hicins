import React from 'react'
import Blog2 from '../Components/Home2/Blog2';
import BreadCumb from '../Components/Common/BreadCumb';

const page = async ({ searchParams }) => {
  const categoryId = searchParams?.categoryId;

  const productsEndpoint = await fetch(
    categoryId
      ? `https://mystore.alaqmar.dev/api/hic/products?categoryId=${categoryId}`
      : 'https://mystore.alaqmar.dev/api/hic/products',
    { cache: 'no-store' }
  )
  const products = await productsEndpoint.json();
  const categoriesEndpoint = await fetch('https://mystore.alaqmar.dev/api/hic/categories', { cache: 'no-store' })
  const categories = await categoriesEndpoint.json();

  return (
    <div className='blog-page'>
      <BreadCumb Title="Products" />
      <Blog2 products={products} categories={categories} categoryId={categoryId} />
    </div>
  )
}

export default page
