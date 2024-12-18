import { arrowRight } from "../assets/icons";
import { special } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
    return <section className="flex  flex-wrap justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
        <div className="flex-1 flex justify-center items-center rounded-3xl w-full md:py-40">
            <img
                src={special}
                alt="Special Offer"
                width={570}
                height={522}
                className="object-contain max-sm:w-full sm:w-4/5 lg:w-11/12 xl:w-4/5 rounded-3xl"
            />
        </div>
        <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                <span className="text-coral-red "> Special</span> Offer
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
                We have a special offer for you. Buy one pair of shoes and get the second pair for free. This offer is only available for a limited time. Hurry up and grab your pair now.
            </p>
            <p className="mt-6 lg:max-w-lg info-text">
                Use the code <span className="font-bold">BOGO</span> at checkout to avail of this offer. This offer is only valid for purchases made on our website. This offer is not valid for in-store purchases. This offer is not valid for purchases made on other websites.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
                <Button
                    label="Shop now"
                    iconURL={arrowRight}
                />
                <Button
                    label="Learn more"
                    backgoundColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray"
                />
            </div>
        </div>
    </section>;
};

export default SpecialOffer;
