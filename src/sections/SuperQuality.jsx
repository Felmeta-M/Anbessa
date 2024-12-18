import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide You
                    <span className="text-coral-red "> Super</span>
                    <span className="text-coral-red"> Quality</span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Our shoes are made from the finest materials, designed to last, and provide you with the utmost comfort.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    We guarantee that you will love our shoes.
                </p>
                <div className="mt-11">
                    <Button label="View Detail" />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt='product detail'
                    width={570}
                    height={522}
                    className="object-contain w-full h-auto"
                />
            </div>
        </section>
    );
};

export default SuperQuality;
