import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    console.log(listProducts);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeading />
            <HeadingListProduct data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, 14)} />
            <SaleHomepage />
            <MyFooter />
        </>
    );
}

export default HomePage;
