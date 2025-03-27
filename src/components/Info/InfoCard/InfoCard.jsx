import styles from '../styles.module.scss';
import deliveryIcon from '@icons/svgs/deliveryIcon.svg';

function InfoCard({ tit, desc, src }) {
    const { containerCard, containerContent, title, description } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt='deliveryIcon' />
            <div className={containerContent}>
                <div className={title}>{tit}</div>
                <div className={description}>{desc}</div>
            </div>
        </div>
    );
}

export default InfoCard;
