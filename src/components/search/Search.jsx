import React, { useState, useEffect } from 'react';
import data from '../../data.json'; 

import { Link } from 'react-router-dom';

// icons
import { CgClose , CgSearch } from "react-icons/cg";

import './search.css'




const SearchPage = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    const filteredResults = data.filter(
      (result) =>
        result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm]);



  const addToCart = (productId) => {
    console.log(`Product added to cart: ${productId}`);
  };

  return (
    <div className="main_serching overplays">
      <div className="main_search">
        <div className="container">
          <div className="search_page">
            <div className="search_page_top">
              <div className="search_page_top_input">
                <input
                  type="text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Link to={'/'}>
                <div className="home_button">
                  <i>
                    <CgClose />
                  </i>
                </div>
              </Link>
            </div>
            <div className="searching_page_middle">
              <div className="searching_page_middle_top_items">
                <div className="searching_page_middle_top">
                  Popular searchings
                </div>
                
                <div className="searching_page_middle_bottom_buttons">
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                    <button className='searching_page_middle_bottom_button'>iPhone 15 </button>
                </div>

              </div>
            </div>
            <div className="searching_page_middle_bottom_items">
              <div className="searching_page_middle_top_bottoms">
                <div className="searching_page_middle_top_bottom">
                  Recently searched
                </div>
                <div className="searching_page_middle_top_bottom2" >
                   Remove history
                </div>
              </div>
                <div className="searching_page_middle_top_bottom_buttons">
                <button className='searching_page_middle_bottom_button1'><i><CgSearch/></i>iPh</button>
                <button className='searching_page_middle_bottom_button1'><i><CgSearch/></i>Watch</button>
               </div>
            </div>
            <div className="results_list">
              {searchResults.slice(0,6).map((result) => (
                <div className='results' key={result.id}>
                  <div className="reults_img_style">
                    <img className='results_img' src={result.img} alt="" />
                  </div>
                  <div className="result_texts">
                    <div className="results_brand_style">
                        <div className='results_brand'>{result.brand}</div>
                    </div>
                    <div className="results_name_style">
                        <div className='results_name'>{result.name}</div>
                    </div>
                    <div className="results_name_style">
                       <div className='results_price'>to {result.price} sum</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="results_list2">
              {searchResults.slice(0,2).map((result) => (
                <div className='results' key={result.id}>
                  <div className="reults_img_style">
                    <img className='results_img' src={result.img} alt="" />
                  </div>
                  <div className="result_texts">
                    <div className="results_brand_style">
                        <div className='results_brand'>{result.brand}</div>
                    </div>
                    <div className="results_name_style">
                        <div className='results_name'>{result.name}</div>
                    </div>
                    <div className="results_name_style">
                       <div className='results_price'>to {result.price} sum</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SearchPage;
