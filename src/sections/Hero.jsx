import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button, ShoeCard } from "../components";
import { shoes, statistics } from "../constants";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Looking for modern footwear?</p>
                <h1 className="mt-10 font-palanquin text-[76px] max-sm:text-[58px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Modern and Durable</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Anbessa</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-10 sm:max-w-sm">Discover stylish Anbessa arrivals, quality comfort, and fashionable footwear. </p>
                <Button label="Shop Now" iconURL={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
                    {statistics.map((item) => (
                        <div key={item.label}>
                            <p className="font-palanquin text-4xl font-bold">{item.value}</p>
                            <p className="font-montserrat text-slate-gray leading-7">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={502}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={index}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Hero;
