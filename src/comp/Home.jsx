import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img src="/images/banner1.jpg" alt="banner image" className='banner_image' />
                <div className='home_row'>
                    <Product
                        id={1}
                        title='OnePlus 9 Pro 5G Stellar Black, 12GB RAM, 256GB  Storage '
                        image='images/oneplus.jpg'
                        price={19.99}
                        rating={4}
                    />

                    <Product id={2}
                        title='Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)| 5000 mAh| 2.3GHz Mediatek Helio G35 Octa core Processor  '
                        image='images/redmi9.jpg'
                        price={20.99}
                        rating={4} />
                </div>
                <div className='home_row'>
                    <Product id={3}
                        title='ASUS VivoBook 15 (2020), 39.6 cm HD, Dual Core Intel Celeron N4020'
                        image='images/asus15.webp'
                        price={19.99}
                        rating={4} />
                    <Product id={4}
                        title='Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen 14-inch (35.56 cms)  '
                        image='images/minotebook.webp'
                        price={100.99}
                        rating={4} />
                    <Product id={5}
                        title='Lenovo V15 AMD 15.6-inch FHD Thin and Light Laptop  '
                        image='images/lenovo.webp'
                        price={200.99}
                        rating={4} />
                </div>
                <div className='home_row'>
                    <Product id={6}
                        title='OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black) (2021 Model)  '
                        image='images/tv.jpg'
                        price={100.99}
                        rating={4} />
                </div>

            </div>
        </div>
    )
}

export default Home
