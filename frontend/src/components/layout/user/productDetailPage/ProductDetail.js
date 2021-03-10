import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

//Images banner
import banner3 from '../../../../assets/images/banner/banner-3.jpg';
import banner2 from '../../../../assets/images/banner/banner-2.jpg';
import banner1 from '../../../../assets/images/banner/banner-1.jpg';
import banner from '../../../../assets/images/banner/banner.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function ProductDetail() {
    return (
        <>
            <h1 className='category-title'>
                Thông tin sản phẩm
                <div className='underlined-category-title'></div>
            </h1>

            <div className='info-box'>
                {/* ===== Slide ===== */}
                <div style={{ marginLeft: '3.6rem', width: '60rem' }}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}>
                        <SwiperSlide>
                            <div
                                className='banner'
                                // style={{
                                //   backgroundImage: `url(${banner1})`,
                                //   backgroundPosition: "center",
                                //   backgroundSize: "cover",
                                // }}
                            >
                                <img src={banner3} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='banner'>
                                <img src={banner2} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='banner'>
                                <img src={banner1} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* ===x=== Slide ===x=== */}

                <div className='info-detail'>
                    <h3>Giống lúa thuần chất lượng Thiên ưu 8</h3>
                    <ul>
                        <li>
                            <strong>Thời gian sinh trưởng</strong>:&nbsp;Vụ Xuân 125-130 ngày; vụ Mùa 100-105 ngày&nbsp;
                        </li>
                        <li>
                            <strong>Năng suất</strong>:&nbsp;Năng suất trung bình 70 – 75 tạ/ha, thâm canh đạt 85- 90
                            tạ/ha.
                        </li>
                        <li>
                            <strong>Đặc&nbsp;điểm:</strong>&nbsp;Chiều cao cây 100-110 cm, phiến lá phẳng đứng, gọn
                            khóm, màu xanh đậm, đẻ nhánh trung bình. Chống đổ khá, chống chịu trung bình với một số loại
                            sâu bệnh hại chính (đạo ôn, khô vằn, bạc lá…), phạm vi thích ứng rộng.
                        </li>
                        <li>
                            <strong>Chất lượng</strong>:&nbsp;Hạt thon, dài, mỏ cong, màu vàng sáng, khối lượng 1000 hạt
                            20-21 gram, hạt gạo trong, cơm trắng, bóng, mềm, vị đậm.
                        </li>
                    </ul>

                    <h3>Giá: 13 000 đ</h3>
                </div>
            </div>
        </>
    );
}
export default ProductDetail;
