import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct() {
    const { container, content, title, price, closeIcon, size } = styles;

    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg'
                alt=''
            />

            <div className={closeIcon}>
                <IoCloseOutline style={{ fontSize: '25px', color: 'c1c1c1' }} />
            </div>

            <div className={content}>
                <div className={title}>title of product</div>
                <div className={size}>Size:M</div>
                <div className={price}>$119.99</div>
                <div className={price}>SKU: 12349</div>
            </div>
        </div>
    );
}

export default ItemProduct;
