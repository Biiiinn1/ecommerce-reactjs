import styles from './styles.module.scss';

function MainLayout({ children }) {
    const { wrapLayout, container } = styles;

    return (
        <main>
            <div className={wrapLayout}>
                <div className={container}>{children}</div>
            </div>
        </main>
    );
}

export default MainLayout;
