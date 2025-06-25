import React from 'react'
import "./Modal.css"
import { useOpenModal } from '../context/OpenModalContext'

const Modal = () => {
    const {toggle} = useOpenModal()

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
        {
            id: 6,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/category/6.svg",
            tital: "Snacks",
            background: "bg-[#e2fcf1]",
            items: 49
        },
    ]

    const ProductArray = [
        {
            id: 1,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/new-product/1.jpg",
            newPrice: 15,
            oldPrice: 22,
            title : "Ground Nuts Oil Pack"
        },
        {
            id: 2,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/new-product/2.jpg",
            newPrice: 25,
            oldPrice: 30,
            title : "Organic Litchi Juice"
        },
        {
            id: 3,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/new-product/3.jpg",
            newPrice: 1,
            oldPrice: 2,
            title : "Spicy Banana Chips"
        },
        {
            id: 4,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/new-product/4.jpg",
            newPrice: 25,
            oldPrice: 32,
            title : "Spicy Potato Chips"    
        },
        {
            id: 5,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/new-product/5.jpg",
            newPrice: 32,
            oldPrice: 39,
            title : 'Black Pepper Spice'
        },
        {
            id: 6,
            img: "https://blueberry-react-next.maraviyainfotech.com/assets/img/new-product/6.jpg",
            newPrice: 42,
            oldPrice: 45,
            title : "Small Chili Spice"
        },
    ]

    return (
        <div className=' fixed inset-0 backdrop-blur-sm bg-opacity-40 z-40 flex justify-center flex-col bg-black'>

            <div className='shadow-lg rounded-2xl mx-auto modal-outer  '>
                <p className=' text-[20px] font-[700] text-[#3d4750]'>Keyword</p>
                <button className='cetegory-close' onClick={toggle}></button>
                <div className='flex keyword-items my-[10px] flex-wrap'>
                    <p>Cloth</p>
                    <p>Fruits</p>
                    <p>Snacks</p>
                    <p>Dairy</p>
                    <p>Seafood</p>
                    <p>Toys</p>
                    <p>Perfume</p>
                    <p>Jewelry</p>
                    <p>Bags</p>
                </div>
                <p className=' text-[20px] font-[700] text-[#3d4750]'>Explore Categories</p>
                <div className='grid lg:grid-cols-6 gap-6 md:grid-cols-2 my-[15px] '>
                    {
                        CategoryArray.length > 0 ? CategoryArray.map((data, index) => (
                            <div className={`category-box ${data?.background}  `} key={index}>
                                <div className={`h-[50px] w-[50px] `}>
                                    <img src={data?.img} alt="" className='w-full h-full ' />
                                </div>
                                <p className='modal-card-text mt-2'>{data?.tital}</p>
                                <p className='modal-card-text-small'>{data?.items} items</p>
                            </div>
                        )) : ""
                    }

                </div>
                <p className='mb-[10px] text-[20px] font-[700] text-[#3d4750]'>Related products</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5'>
                {
                    ProductArray.length > 0 ? ProductArray.map((data)=>(
                        <div className='releted-products-card flex flex-col  md:flex-row'>
                        <div>
                            <img src={data.img} alt="" className='mr-[12px] md:w-[80px] w-full ' />
                        </div>
                        <div>

                            <div className='my-2 md:my-0'>
                                <p>{data.title}</p>
                                <span className='flex gap-1 my-2'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>
                            </div>
                            <div className='inner-price '>
                                <span className='new-price'>$ {data.newPrice}</span>
                                <span className='old-price'>$ {data.newPrice}</span>
                            </div>
                        </div>
                    </div>
                    )) : ""
                }
                   
                 
                  

                   
                   
                </div>
            </div>
        </div>
    )
}

export default Modal