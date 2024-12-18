import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                    Experiance the best quality products from our store.
                    We provide the best quality products for you. Discover a world of quality, comfort and style.
                </p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product) => (
                    <PopularProductCard
                        key={product.id}
                        id={product.id}
                        imgURL={product.imgURL}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    )
}

export default PopularProducts;
