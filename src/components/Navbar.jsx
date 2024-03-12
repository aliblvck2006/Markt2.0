import React from 'react'

// Usestate
import { useState } from 'react';

// image
import img1 from '../assets/modal/img4.png'


// Link
import { Link } from 'react-router-dom';

// icons
import { CiSearch } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";


// logo
import logo from '../assets/logo.png';





const Navbar = () => {


// hamburger-menu click
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);

};


const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: 'us' },
    { code: 'es', name: "Uzbek", flag: 'uz' },
    { code: 'ru', name: 'Русский', flag: 'ru' },
  ];

  const handleLanguageToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  const dropdownLanguages = languages.filter((language) => language.code !== selectedLanguage);

return (
<>
<nav className='main1'>

  <div className="main">
    <div className="main_top">
      <div className="container">
        <div className="main_top_items">
        <div className="select_cash selects">
            <div>
              <div name="USD" id="">USD</div>
            </div>
          </div>
          <div className="nav_top_texts">
            <p className='nav_top_text'>Any case. Any band. Any style you want.</p>
          </div>
              <div className="selects">
              <div className="language-selector-container">
              <div
                className={`language-toggle ${isDropdownOpen ? 'active' : ''}`}
                onClick={handleLanguageToggle}
              >
                {selectedLanguage ? (
                  <div className='selected_language'>

                    <img
                     width="25"
                      src={`https://hatscripts.github.io/circle-flags/flags/${languages.find((lang) => lang.code === selectedLanguage)?.flag}.svg`}
                      alt={selectedLanguage}
                      className="flag-icon"
                    />
                    <p>{languages.find((lang) => lang.code === selectedLanguage)?.name}</p>
                  </div>
                ) : (
                  'Select Language'
                )}
              </div>
              {isDropdownOpen && (
                <div className="language-dropdown">
                  {dropdownLanguages.map((language) => (
                    <div
                      key={language.code}
                      className="language-option"
                      onClick={() => handleLanguageSelect(language.code)}
                    >
                      <div className="flex_options">
                        <img
                        width="25"
                          src={`https://hatscripts.github.io/circle-flags/flags/${language.flag}.svg`}
                          alt={language.name}
                          className="flag-icon"
                        />
                        <p>{language.name}</p>

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main_nav">
      <div className="container">
        <div className="main_nav_items">
          <div className="nav_main_item_left">
            <div className="hamburger_menu">
              <div onClick={toggleMenu}>
                <div className={`menu-icon ${isMenuOpen ? 'open' : '' }`}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="main_nav_texts">
              <div className="text_main_nav" >
                <div >
                  <h1>New</h1>
                </div>

              </div>
              <div className="text_main_nav" >
                <h1>Electronics</h1>
              </div>
              <div className="text_main_nav" >
                <h1>Appliances</h1>
              </div>
              <div className="text_main_nav" >
                <h1>Accessories</h1>
              </div>
              <div className="text_main_nav">
                <h1>Sale*</h1>
              </div>
            </div>
          </div>
          <div className="nav_item_middle">
            <div className="main_nav_logo">
              <div className="logo_img">
                <Link to={'/'}> <img className='logo_img_nav_menu' src={logo} alt="" />
                </Link>

              </div>
            </div>
          </div>
          <div className="nav_item_right">
              
            <Link to={'/search'}>
              <div className='search_icon'>
                <i>
                  <CiSearch /></i>
                <p>Search</p>
              </div>
            </Link>
            <div className="item_bag">
              <i>
                <PiShoppingBagLight />
              </i>
            </div>
            <div className="item_heart">
              <i>
                <IoMdHeartEmpty />
              </i>
            </div>
            <div className="item_user">
              <i className='user_i'>
                <FiUser />
              </i>
            </div>
          </div>
        </div>
      </div>
    {/* Opens Section */}
    {isMenuOpen && (
      <div className={`nav-links overlay ${isMenuOpen ? 'open' : '' }`}>
        <div className='open_hamburger'>
          <div className="open_hamburger_main">
            <div className="container">
              <div className="open_hamburger_main_items">
                <div className="hamberger_item_left">
                  <div className="hamburger_menu_item">
                    <Link to={'/'}> <div className="menu_link">
                    Menu
                  </div>
                  </Link>
                </div>
              </div>
              <div className="div_media_logo">
                <div className="nav_item_middle">
                    <div className="main_nav_logo">
                      <Link to={'/'}> <img className='logo_img_nav_menu' src={logo} alt="" />
                      </Link>
                      
                      <div className="select_cash selects">
                        <div>
                          <div name="USD" id="">USD</div>
                        </div>
                      </div>
                      <div className="language-selector-container">
                        <div
                          className={`language-toggle ${isDropdownOpen ? 'active' : ''}`}
                          onClick={handleLanguageToggle}
                        >
                          {selectedLanguage ? (
                            <div className='selected_language'>

                              <img
                                width="20"
                                src={`https://hatscripts.github.io/circle-flags/flags/${languages.find((lang) => lang.code === selectedLanguage)?.flag}.svg`}
                                alt={selectedLanguage}
                                className="flag-icon"
                              />
                              <p>{languages.find((lang) => lang.code === selectedLanguage)?.name.slice(0, 2)}</p>
                            </div>
                          ) : (
                            'Select Language'
                          )}
                        </div>
                        {isDropdownOpen && (
                          <div className="language-dropdown">
                            {dropdownLanguages.map((language) => (
                              <div
                                key={language.code}
                                className="language-option"
                                onClick={() => handleLanguageSelect(language.code)}
                              >
                                <div className="flex_options">
                                  <img
                                  width="20"
                                    src={`https://hatscripts.github.io/circle-flags/flags/${language.flag}.svg`}
                                    alt={language.name}
                                    className="flag-icon"
                                  />
                                  <p>{language.name.slice(0, 2)}</p>

                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="item_user">
                        <i>
                          <FiUser />
                        </i>
                      </div>
                    </div>
                  </div>

                </div>
              <div className="div_hr">
                
              </div>
              <div className="hamberger_item_right">
                <div className="hamburger_links">
                  <div>About Us</div>
                  <div>Account</div>
                  <div>Orders</div>
                  <div>Privacy Policy</div>
                  <div>Terms & Conditions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}

  </div>

  </div>
  <div className="navbar_free"></div>

</nav>
</>
)
}

export default Navbar
