import React from "react";
import img from "../img/nat-8.jpg";
import img2 from "../img/nat-9.jpg";
import video1 from "../img/video.mp4";
import video2 from "../img/video.webm";

const SectionStories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">WE MAKE PEOPLE GENUINELY HAPPY</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={img} alt="Person on a tour" className="story__image" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className=".heading-tertiary u-margin-bottom-small">
              I HAD THE BEST WEEK EVER WITH MY FAMILY
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={img2} alt="Person on a tour" className="story__image" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className=".heading-tertiary u-margin-bottom-small">
              WOW! MY LIFE IS COMPLETELY DIFFERENT NOW
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionStories;
