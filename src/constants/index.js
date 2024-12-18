import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '20k+', label: 'Shops' },
    { value: '500k+', label: 'Customers' },
];

export const products = [
    {
        id: "1",
        imgURL: shoe4,
        name: "New Leather 201",
        price: "$100.20",
        desc: "Walk the path of greatness in the Anbessa shoe. Genuine leather and fabric upper is durable and lightweight.Encapsulated Air-Sole unit cushions your heel.Rubber outsole with herringbone pattern adds traction. Shown: White/Black/Legend Blue Style: 378038-104"
    },
    {
        id: "2",
        imgURL: shoe5,
        name: "Soft Leather 10",
        price: "$90.20",
        desc: "Walk the path of greatness in the Anbessa Retro.Genuine leather and fabric upper is durable and lightweight.Encapsulated Air-Sole unit cushions your heel.Rubber outsole with herringbone pattern adds traction. Shown: White/Black/Legend Blue Style: 378038-104"
    },
    {
        id: "3",
        imgURL: shoe6,
        name: "Hard Leather 100",
        price: "$110.20",
        desc: "Walk the path of greatness in the Anbessa Retro.Genuine leather and fabric upper is durable and lightweight.Encapsulated Air-Sole unit cushions your heel.Rubber outsole with herringbone pattern adds traction. Shown: White/Black/Legend Blue Style: 378038-104"
    },
    {
        id: "4",
        imgURL: shoe7,
        name: "Leather 001",
        price: "$130.20",
        desc: "Walk the path of greatness in the Anbessa Retro.Genuine leather and fabric upper is durable and lightweight.Encapsulated Air-Sole unit cushions your heel.Rubber outsole with herringbone pattern adds traction. Shown: White/Black/Legend Blue Style: 378038-104"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Sam Daniel',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Rut Dany',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Soft Leather 1", link: "/" },
            { name: "Soft Max 1", link: "/" },
            { name: "Soft Anbessa 1", link: "/" },
            { name: "Comfort Force 2", link: "/" },
            { name: "Anbessa Waffle Racer", link: "/" },
            { name: "Anbessa New", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@anbessa.com", link: "mailto:customer@anbessa.com" },
            { name: "+25154862354", link: "tel:+251954862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];