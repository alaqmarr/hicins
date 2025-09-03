'use client'
import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle, products, categories }) {

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/products" onClick={() => setMobileToggle(false)}>
          Products
        </Link>
        <DropDown>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`} onClick={() => setMobileToggle(false)}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </DropDown>

      </li>      
      <li className="menu-item-has-children">
        <Link href="#">Categories</Link>
        <DropDown>
          <ul>
            {categories.map(category => (
              <li key={category.id}>
                <Link href={`/products?categoryId=${category.id}`} onClick={() => setMobileToggle(false)}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
