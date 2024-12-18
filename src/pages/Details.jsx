import { useParams } from "react-router-dom";
import { products } from "../constants";

const Details = () => {

    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <section className="w-full flex md:flex-row flex-col justify-center min-h-screen max-container">
            <div className="relative flex-1 flex flex-col w-full justify-center items-center md:min-h-screen">
                <img
                    src={product.imgURL}
                    alt={product.name}
                    className="object-contain w-full h-auto md:w-auto lg:w-4/6 xl:w-3/5 "
                />
            </div>
            <div className="relative flex-1 flex flex-col justify-center items-start w-full max-xl:padding-x ">
                <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h1>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{product.price}</p>
                <p className="mt-2 text-slate-gray text-base leading-normal">{product.desc}</p>
            </div>
        </section>
    );
};

export default Details;