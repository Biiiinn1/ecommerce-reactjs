import styles from './styles.module.scss';

function HeaderSideBar({ icon, title }) {
    const { container } = styles;

    return (
        <div>
            <div className={container}>
                {icon}
                <div>{title}</div>
            </div>
        </div>
    );
}

export default HeaderSideBar;
