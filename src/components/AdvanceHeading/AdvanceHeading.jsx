import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeading() {
    const { container, headline, contentMiddle, des, title } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={contentMiddle}>
                    <p className={des}>DON'T MISS SUPER OFFERS</p>
                    <p className={title}>Our best products</p>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeading;
