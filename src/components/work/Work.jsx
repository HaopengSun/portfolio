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
                <h4>{d.name}</h4>
                <h4>{d.title}</h4>
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                {d.time}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Work