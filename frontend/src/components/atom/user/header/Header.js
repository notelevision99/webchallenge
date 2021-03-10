import React, { useState } from 'react';

//Images
import Logo from '../../../../assets/images/logo.png';
import Vietnamese from '../../../../assets/images/en_US.png';
import English from '../../../../assets/images/vi_VN.png';

//Icons
import { IconBasket, IconNews, IconSearch, IconSupport } from '../../../../assets/icons';
import { NavLink } from 'react-router-dom';

function Header() {
    const [focus, setFocus] = useState(false);

    const onSearch = () => {
        setFocus(true);
    };

    return (
        <header>
            <div className='menu'>
                <div className='menu--top'>
                    <div className='menu--top__container'>
                        <div className='menu--top--left'>
                            <div className='m-tl-item language'>
                                <p className='language--title'>Chọn ngôn ngữ</p>

                                <p className='language--img'>
                                    <img src={Vietnamese} alt='' />
                                </p>

                                <p className='language--img'>
                                    <img src={English} alt='' />
                                </p>
                            </div>

                            {/* <div className="m-tl-item">
                <a>
                  <p>Tin tức</p>
                  <IconNews className="header-icon icon-mtl" />
                </a>
              </div> */}

                            <div className='m-tl-item'>
                                <a>
                                    <p>Hỗ trợ khách hàng</p>
                                    <IconSupport className='header-icon icon-mtl' />
                                </a>
                            </div>
                        </div>

                        <div className='menu--top--search'>
                            <div className='menu--top--search__container'>
                                <input type='text' placeholder='Tìm kiếm' onChange={onSearch} />
                                {/* <IconSearch className="header-icon phd-search" /> */}
                            </div>
                        </div>

                        <div className='menu--top--right'>
                            <a>
                                <IconBasket className='header-icon icon-mtr' />
                                <p>Mua Hàng</p>
                            </a>

                            <a>
                                <p>Đăng kí</p>
                            </a>

                            <a>
                                <p>Đăng nhập</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='menu--bottom'>
                    <ul>
                        <li className='cate-item'>Trang chủ</li>
                        <li className='cate-item'>Giới thiệu</li>
                        <li className='cate-item'>
                            <NavLink to='/san-pham'>Sản phẩm</NavLink>
                        </li>
                        <li className='cate-item'>Hoạt động</li>

                        <li className='menu-logo'>
                            <img src={Logo} alt='' />
                        </li>

                        <li className='cate-item'>DV nông nghiệp</li>
                        <li className='cate-item'>R&D</li>
                        <li className='cate-item'>Liên hệ</li>
                        <li className='cate-item'>Tuyển dụng</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
