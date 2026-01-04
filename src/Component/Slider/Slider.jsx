import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const sliderData = [
  {
    id: 1,
    image: "/img/banner_Hero1.jpg",
    subtitle: "MINI-X6U SPEAKER",
    title: "Led Bluetooth",
    highlight: "Speaker Lamp",
    description: "Support 3.5mm jack audio input",
  },
  {
    id: 2,
    image: "/img/banner_Hero2.jpg",
    subtitle: "NEW ARRIVAL",
    title: "Wireless Headphone",
    highlight: "Deep Bass 2024",
    description: "Experience high-quality sound wirelessly",
  },
  {
    id: 3,
    image: "/img/banner_Hero3.jpg",
    subtitle: "SMART WATCH",
    title: "Series 9 Pro",
    highlight: "Fitness Tracker",
    description: "Keep track of your health daily",
  },
];

function Slider() {
  return (
    <div className=" container mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliderData.map((data) => (
          <SwiperSlide key={data.id}>
            {/* جعلنا الـ container الأساسي relative للتحكم في مكان النص */}
            <div className="relative  flex flex-col  justify-center items-center w-full overflow-hidden">
              {/* الصورة: غيرنا العرض ليكون 100% في الموبايل و 80% في الشاشات الكبيرة */}
              <img
                className=" w-full  object-contain min-h-[300px] md:min-h-auto"
                src={data.image}
                alt={data.title}
              />

              <div className="absolute  left-4 right-4 top-1/2 -translate-y-1/2 md:left-[15%] md:top-20 md:translate-y-0 md:right-auto p-4 md:p-0 rounded-xl">
                <p className="italic text-black text-sm md:text-base">
                  {data.subtitle}
                </p>

                {/* تصغير حجم الخط في الموبايل (text-2xl) وتكبيره في الكمبيوتر (md:text-5xl) */}
                <h2 className="text-md md:text-5xl mt-2 text-blue-500 font-bold leading-tight">
                  {data.title} <br  />
                  {data.highlight}
                </h2>

                {/* إخفاء الوصف الطويل في الموبايل الصغير جداً لتقليل الزحمة */}
                <p className="mt-4 md:mt-10 text-gray-700 text-sm md:text-lg max-w-[250px] md:max-w-none line-clamp-2 md:line-clamp-none">
                  {data.description}
                </p>

                <button className="bg-blue-500 md:px-6 px-3 py-2 rounded-full mt-3 md:mt-10 hover:scale-110 ease-in-out duration-300 transition-all text-white  md:font-bold">
                  <Link to="/">Shop Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
