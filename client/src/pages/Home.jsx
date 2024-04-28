// import { analytics } from "../components/analytics"

// import  Footer  from "../components/Footer";

import { Statics } from "../components/Statics";
import { Footer } from "../components/Footer";
import "../CSS/Home.css";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                <h1>welcome to site </h1>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                perspiciatis voluptatem placeat totam, ullam mollitia,
                voluptatum velit, ratione corrupti voluptatibus assumenda optio
                adipisci voluptas rerum. Corporis aut eaque sequi adipisci?
              </p>
              <div className="btn-group">
                <a href="/contact">
                  {"    "}
                  <button>Contact Now</button>
                </a>
                <a href="/services">
                  {"    "}
                  <button>learn more </button>
                </a>
              </div>
            </div>

            {/* //images */}
            <div className="hero-image">
              <img
                src="/home.webp"
                alt="coding"
               
              ></img>
            </div>
          </div>
        </section>
      </main>
 
      {<Statics />}
      <Footer></Footer>
    </>
  );
};
