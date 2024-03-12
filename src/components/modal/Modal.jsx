// Modal.js

import React, { useState, useEffect } from 'react';

// import images
import img1 from '../../assets/modal/img4.png'

// import css
import './modal.css'

// Import the Slick Carousel styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";



const Modal = () => {
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      <i>
        <FaChevronRight />
      </i>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      <i>
        <FaChevronLeft  />
      </i>
    </div>
  );
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModalOpen(false);
    }, 1000000);

    return () => clearTimeout(timeoutId);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`modal ${modalOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          <div className="lines">
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </span>
        <h1 className='welcome_modal'>Welcome</h1>
        <h3 className='modal_description'>New Items that appeared in the catalog</h3>
        <Slider {...settings}>
          {
            modalData.map(item =>(
              <div className="swiper_modal" key={item.id}>
                <div className="swiper_modal_style">
                  <div className="swiper_modal_items" >
                      <div className="modal_swiper_img">
                        <div className="swiper_img_top">
                          <p>New</p>
                          <i><CiHeart/></i>
                        </div>  
                        <img src={item.img} alt="" />
                      </div>
                      <div className="swiper_item_model_name">
                        <p>{item.model}</p>
                        <h4>{item.title}</h4>
                        <h5>ot {item.price}</h5>
                      </div>
                      
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
        <button className='view_all_button'>View All</button>
      </div>
    </div>
  );
};

export default Modal;


let modalData = [
  {
    id: 1,
    title:'Watch Series 9',
    model: 'Apple',
    price: '4 900 42',
    img: img1
  },
  {
    id: 2,
    title:'iPhone 15 , 128 gb Midnight',
    model: 'Apple',
    price: '4 900 42',
    img: img1
  },
  {
    id: 3,
    title:'iPhone 15 pro , 256 gb Natural Titanium ',
    model: 'Apple',
    price: '4 900 42',
    img: img1
  },
  {
    id: 4,
    title:'iPhone 15 pro max 1TB , Natural Titanium' ,
    model: 'Apple',
    price: '4 900 42',
    img: img1
  },
  {
    id: 5,
    title:'iPhone 15 plus 128 gb , Pink',
    model: 'Apple',
    price: '4 900 42',
    img: img1
  },
  {
    id: 6,
    title:'iPhone 15 , 128 gb ',
    model: 'Apple',
    price: '4 900 42',  
    img: img1
  }
]
