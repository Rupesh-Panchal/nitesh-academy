import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/WhyChoose.css";

const WhyChoose = () => {

  const [features,setFeatures] = useState([]);

  useEffect(()=>{

    axios
      .get("http://localhost:5000/api/features")
      .then(res => setFeatures(res.data))
      .catch(err => console.log(err));

  },[]);

  return (

    <section className="whySection">

      <h2 className="whyTitle">
        Why Choose Our Classes
      </h2>

      <div className="whyGrid">

        {features.map((item)=>(
          
          <div className="whyCard" key={item.id}>

            <div className="iconWrapper">

              <img
                src={`http://localhost:5000/uploads/icons/${item.icon}`}
                alt={item.title}
              />

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default WhyChoose;