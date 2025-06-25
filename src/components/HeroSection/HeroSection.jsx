import React, { useEffect, useState } from 'react'
import "./HeroSection.css"

const HeroSection = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const array = [
        {
            id: 0,
            offer: "Flat 20% Off",
            highlite: "Healthy",
            secoundPart: "& Fresh Vegetable",
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-3.png"
        },
        {
            id: 1,
            offer: "Flat 20% Off",
            highlite: "Organic",
            secoundPart: "& Fresh Fruits",
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-2.png"

        }, {
            id: 2,
            offer: "Flat 30% Off",
            highlite: "Warm",
            secoundPart: " Fast Food & Snacks",
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-1.png"

        }
    ]



    useEffect(() => {
        const SlidingFunction = () => {
            if (currentStep === array.length - 1) {
                setCurrentStep(0)
            } else {
                setCurrentStep(currentStep + 1)

            }

        }
        const sliding = setInterval(SlidingFunction, 3000)
        return () => clearInterval(sliding)
    }, [currentStep])
    return (
        <div className="bg-[#f8f8fa]  lg:h-[calc(100vh-240px)] lg:p-0  ">
            {
                array.length > 0 ? array.map((data, index) => (
                    <div className={`${index == currentStep ? " lg:max-w-[1440px]  opacity-100 z-0 flex lg:flex-row flex-col-reverse scale-100 lg:justify-between  p-4 lg:p-0 " : "opacity-0 z-0 hidden scale-0"} xl:w-[75%] w-[100%] mx-auto  items-center h-[100%] `}>


                        <div className='relative mt-10 lg:mt-0 md:text-center lg:text-start text-start '>
                            <p className='offer_text text-[16px] lg:text-[18px]'>{data.offer}</p>
                            <div className='text-[30px] lg:text-[50px]'>
                            <p className='main_hero_text '>Explore <span className='text-[#6a7fd8] highlited'>{data.highlite}</span> </p>
                            <p className='main_hero_text'>{data.secoundPart}</p>
                            </div>
                            <button className='border px-4 py-3 rounded-lg shop_now_btn transition-all mt-[20px]'>
                                Shop Now
                            </button>
                            <div className='absolute lg:flex hidden gap-2 bottom-[-80px] left-4'>
                                {
                                    Array.from({ length: array.length }, (_, index) => {
                                        return (
                                            <div className={`${index === currentStep ? "current-slider-dot cursor-pointer" : "slider-dot cursor-pointer"}`} onClick={()=>{
                                                setCurrentStep(index)
                                            }}></div>
                                        )
                                    })
                                }
                            </div>

                        </div>


                        <div className="relative w-fit h-fit">
  {/* White SVG with Shadow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    className="absolute top-0 left-0 w-full h-full z-0 opacity-100 drop-shadow-lg"
  >
    <path
      fill="white"
      d="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
         c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
         c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
         c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
    />
  </svg>

  {/* Foreground Image */}
  <img src={data.img} alt="Image" className="relative z-10 w-full" />
</div>

                    </div>
                )) : ""
            }

        </div>
    )
}

export default HeroSection