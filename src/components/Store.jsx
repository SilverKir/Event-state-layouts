import { IconSwitch } from './IconSwitch';
import { CardsView } from './CardsView';
import { ListView } from './ListView';
import { useState } from 'react'

export const Store = () => {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const [state, setState] = useState("view_list")

    const onSwitch = () => {
        setState(state === "view_list" ? "view_module" : "view_list")
    }

    return (
        <>
            <IconSwitch
                icon={state}
                onSwitch={onSwitch} />
            {state === "view_list" ?
                <CardsView products={products} /> :
                <ListView products={products} />
            }
        </>

    )
}
