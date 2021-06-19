import React from "react";
import Title from "./Title";
import img from "../images/defaultBcg.jpeg";
const About = ()=>{

  return (

    <section>
      <Title title={"about"} subtitle={"bampi"}/>
      <div>
        <article>
          <div>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article>
          <h4>The abode of bygone ruins</h4>
          <p>
            Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys in the state of Karnataka, this place is a historical delight for travellers.
          </p>
          <p>
            Surrounded by 500 ancient monuments, beautiful temples, bustling street markets, bastions, treasury building and captivating remains of Vijayanagar Empire, Hampi is a backpacker's delight.
          </p>
          <a href={"https://en.wikipedia.org/wiki/Hampi"} target={"_blank"} rel={"noopener noreferrer"}>
            read more
          </a>
        </article>


      </div>
    </section>

  );

};

export default About;