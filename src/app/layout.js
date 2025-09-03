import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--heading-font',
});
const dm_Sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Hardware and Instruments Centre',
    template: '%s | Hardware and Instruments Centre',
  },
  description: 'Hardware and Instruments Centre',
  openGraph: {
    title: 'Hardware and Instruments Centre',
    description: 'Hardware and Instruments Centre',
    images: ['/openGraphImage.jpg'],
  },
};

export default async function RootLayout({ children }) {
    const productsEndpoint = await fetch('https://mystore.alaqmar.dev/api/hic/products', { cache: 'no-store' })
  const products = await productsEndpoint.json();
  const categoriesEndpoint = await fetch('https://mystore.alaqmar.dev/api/hic/categories', { cache: 'no-store' })
  const categories = await categoriesEndpoint.json();
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${outfit.variable} ${dm_Sans.variable}`}>
        <Header products={products} categories={categories}></Header>
        {children}
        <Footer categories={categories}></Footer>
      </body>
    </html>
  );
}
