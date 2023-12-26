// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div className="h-screen w-screen">
            <Swiper
                spaceBetween={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                
                ...
            </Swiper>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="bg-blue-500">Slide 1</SwiperSlide>
                <SwiperSlide className="bg-rose-500">Slide 2</SwiperSlide>
                <SwiperSlide className="bg-emerald-500">Slide 3</SwiperSlide>
                <SwiperSlide className="bg-indigo-500">Slide 4</SwiperSlide>
                <SwiperSlide className="bg-pink-500">Slide 4</SwiperSlide>
                <SwiperSlide className="bg-cyan-500">Slide 4</SwiperSlide>
                <SwiperSlide className="bg-yellow-500">Slide 4</SwiperSlide>
                <SwiperSlide className="bg-teal-500">Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default Slider