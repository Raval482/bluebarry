import React, { useEffect, useState } from 'react'
import "./ExploreCategory.css"

const ExploreCategory = () => {
    const [showCategory,setShowCategory] = useState([])
    const [start,setStart] = useState(0)
    const CategoryArray = [
        {
            id: 1,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/1.svg",
            tital: "Vegetables",
            background: "bg-[#fef1f1]",
            items: 485
        },
        {
            id: 2,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/2.svg",
            tital: "Fruit",
            background: "bg-[#e2fcf1]",
            items: 291
        },
        {
            id: 3,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/3.svg",
            tital: "Cold Drinks",
            background: "bg-[#f3f1fe]",
            items: 49
        },
        {
            id: 4,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/4.svg",
            tital: "Bekery",
            background: "bg-[#faf9e4]",
            items: 8
        },
        {
            id: 5,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/5.svg",
            tital: "Fast Food",
            background: "bg-[#fef1f1]",
            items: 291
        },
        // {
        //     id: 6,
        //     img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/6.svg",
        //     tital: "Snacks",
        //     background: "bg-[#e2fcf1]",
        //     items: 49
        // },
    ]

    const rottetArray = () => {
        let pos = start % CategoryArray.length;
        const data = CategoryArray.slice(pos).concat(CategoryArray.slice(0, pos));
        setShowCategory(data);
        console.log(data);
      };
      



    useEffect(()=>{
        const timers = () =>{
                setStart(prev => prev + 1 )
        }
           const storeInterval =  setInterval(timers,1000)
           return ()=> clearInterval(storeInterval)
    },[])

    useEffect(()=>{
        rottetArray()
    },[start])

    return (
        <div className='my-20'>
            {/* <div className='grid grid-cols-12 lg:w-[75%] mx-auto w-100 gap-5 relative overflow-hidden'>
                <div className='col-span-5 hidden lg:block'>
                    <div className='rounded-[30px] w-full h-full'>
                        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/category.jpg" alt="" className='rounded-[30px] w-full h-full' />
                    </div>
                </div>
                <div className='lg:col-span-7 col-span-12 flex justify-between flex-col'>
                    <div className='hidden lg:block'>
                        <p className='bungee-shade-regular text-[95px] '>Explore</p>
                        <p className='bungee-shade-regular text-[95px]'>Categories</p>
                    </div>
                   
                        <div className='flex gap-5  my-[15px]  bg-white  p-5 rounded-[30px] lg:absolute  bottom-[-3%] left-[30%] '>
                            {
                                showCategory.length > 0 ? showCategory.map((data, index) => (
                                    <div className={`category-box w-[213px]  ${data?.background}`} key={index}>
                                        <div className={`h-[50px] w-[50px] `}>
                                            <img src={data?.img} alt="" className='w-full h-full ' />
                                        </div>
                                        <p className='modal-card-text mt-2'>{data?.tital}</p>
                                        <p className='modal-card-text-small'>{data?.items} items</p>
                                    </div>
                                )) : ""
                            }

                        </div>
                  
                </div>


            </div> */}


<div className="grid grid-cols-2 w-[75%] mx-auto">
            <div className='flex  justify-between border items-center p-5 md'>
                
                    <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/banner-one/one.png" alt="" />
               
                <div>
                        <p>Tasty Snack & Fast food</p>
                        <p>The flavour of something special</p>
                        <button className='border px-4 py-3 rounded-lg shop_now_btn transition-all mt-[20px]'>
                                Shop Now
                            </button>
                </div>
            </div>
</div>

        </div>
    )
}

export default ExploreCategory