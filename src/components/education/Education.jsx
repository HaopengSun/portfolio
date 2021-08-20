import "./Education.scss";
import { educations } from "../../data"
import { useState } from "react";

const Education = function(){

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < educations.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="education" id="education">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

      {educations.map((education) => {
        return (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={education.img} alt="mobile icon" />
                  </div>
                  <h1>{education.school}</h1>
                  <h4>{education.subtitle}</h4>
                  <p>{education.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      </div>
      <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick()}/>
    </div>
  )
}

export default Education