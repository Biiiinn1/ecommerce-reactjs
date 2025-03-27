import styles from './styles.module.scss';
import bagIcon from '@icons/svgs/bagIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const { boxImg, showImg, showFnc, boxIcon, title, priceItem } = styles;
    console.log(prevSrc);
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImg} />
                <div className={showFnc}>
                    <div className={boxIcon}>
                        <img src={bagIcon} alt='bagIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='heartIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='reloadIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='cartIcon' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceItem}>${price}</div>
        </div>
    );
}

export default ProductItem;
