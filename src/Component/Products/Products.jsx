import SlideProducts from "./SlideProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

function Products({ category, data }) {
  return (
    <div className=" mt-28 mb-12 container mx-auto">
      <h1 className=" text-blue-500 text-3xl mx-3 md:mx-0 font-semibold capitalize ">
        {category.replace(/-/g, " ")}
      </h1>
      <p className="mt-2 mx-3 md:mx-0 text-[#6a6a6a] border-b-[1px] pb-3 border-black/10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maxime?
      </p>
      <div className="border-[1px] mx-3 md:mx-0 border-blue-400 md:w-1/8 w-1/4" />
      <Swiper
        // الإعدادات الافتراضية لأصغر شاشة موبايل
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // تأكد من إضافة Pagination هنا إذا كنت تحتاجه
        modules={[Navigation, Autoplay]}
        // البريك بوينت تبدأ من الصغير للكبير
        breakpoints={{
          // عندما يكون عرض الشاشة أكبر من أو يساوي 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // عندما يكون عرض الشاشة أكبر من أو يساوي 768px (التابلت العريض)
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // عندما يكون عرض الشاشة أكبر من أو يساوي 1024px (الكمبيوتر)
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideProducts item={item} />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </div>
  );
}

export default Products;
