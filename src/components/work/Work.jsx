import "./Work.scss";
import { works } from '../../data'

const Work = function(){
    return (
      <div className="work" id="work">
        <h1>Work experience</h1>
        <div className="container">
          {works.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img
                  className="user"
                  src={d.img}
                  alt=""
                />
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
              </div>
              <div className="center">
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Work