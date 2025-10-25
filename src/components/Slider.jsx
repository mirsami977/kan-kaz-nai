import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
<<<<<<< HEAD

export default function Slider() {
    const slides = [
        " https://ei-ph.rdtcdn.com/videos/202408/02/455995071/original/(m=eag28f)(mh=OhdcMB2K11KRFCBG)0.jpg ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHxeSZI9wcEo04mnGxfPWGAxOc3OmSvXQ2g&s",
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzLOvzUNNgxVvrWP9xJ3QPcm-gUCdCyYTdA&s",
    ];

    return (
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden my-6">
            <Swiper loop={true} autoplay={{ delay: 3000 }}>
                {slides.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} className="w-full h-[300px] object-cover" alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
=======
import imgh from "../assets/Gemini_Generated_Image_2ohdvo2ohdvo2ohd.png";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import welig from "../assets/Gemini_Generated_Image_7l7zq17l7zq17l7z.png";
export default function Slider() {
  const slides = [
    welig,
    imgh,
    "https://images.unsplash.com/photo-1585224652632-5cfa1f38d184?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",

    "https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1193",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden my-6">
      <Swiper
        loop={true}
        autoplay={{ delay: 2000 }}
        effect="fade"
        speed={200}
        modules={[EffectFade, Autoplay]}
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              className="w-full h-[400px] object-cover"
              alt={`Slide ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
>>>>>>> 44ba30f ( Meaningful Message)
}
