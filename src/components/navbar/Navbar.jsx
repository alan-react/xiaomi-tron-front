import React from 'react';
import style from "./navbar.module.css"

const Navbar = () => {
    const categories = [
        {title: "Смартфоны", path: "phones" },
        {title: "Компьютеры", path: "computers" },
        {title: "Наушники", path: "headphones" },
        {title: "Аксессуары", path: "accessories" },
        {title: "Товары для дома", path: "household" },
        {title: "Умные устройства", path: "smart" },
        {title: "Товары для дома", path: "household" },
        {title: "Фототехника", path: "household" },
        {title: "Квадрокоптеры", path: "household" },
        {title: "Спорт, туризм", path: "household" },
    ]

    return (
        <div className={style.wrapper}>
            {categories.map(item =>
                <div className={style.category}>
                    {item.title}
                </div>
            )}
        </div>
    );
};

export default Navbar;
