import greekSalad from "../images/greek-salad.jpg";
import bruschetta from "../images/bruchetta.jpg";
import lemonDessert from "../images/lemon-dessert.jpg";

const specials = [
    {
        id: 1,
        title: "Greek salad",
        price: 12.99,
        image: greekSalad,
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        title: "Bruchetta",
        price: 7.99,
        image: bruschetta,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: 4.99,
        image: lemonDessert,
        description:
            "A luscious blend of tangy lemon cream and airy whipped topping layered over golden shortbread—bright, refreshing, and irresistibly smooth.",
    },
];

export default specials;
