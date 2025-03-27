import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleClickShowSideBar = () => {
        if (content === 'Sign In') {
            setIsOpen(true);
            setType('login');
        }
    };

    return (
        <div className={menu} onClick={handleClickShowSideBar}>
            {content}
        </div>
    );
}

export default Menu;
