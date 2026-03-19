import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Achievers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Achievers = () => {
    const [achievers, setAchievers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/achievers").then(res => setAchievers(res.data)).catch(err => console.log(err));
    }, []);

    return (
        <section className="achieversSection">
            <h2 className="achieverTitle">Our Top Achievers</h2>
            <Swiper modules={[Autoplay, Navigation]} slidesPerView={3} spaceBetween={40} loop={true} navigation autoplay={{delay: 2500, disableOnInteraction: false}} breakpoints={{320:{slidesPerView:1}, 768:{slidesPerView:2}, 1024:{slidesPerView:3}}}>
                {achievers.map((item,index)=>(
                    <SwiperSlide key={item.id}>
                        <div className="achieverCard">
                            <div className="imageWrapper">
                                <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name}/>
                            </div>
                            <h3>{item.name}</h3>
                            <p className="score">{item.score}% | {item.board}</p>
                            <p className="class">{item.section} Section</p>
                            <span className="rankBadge">{item.rank_text}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Achievers;