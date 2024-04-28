import { useAuth } from "../store/Auth";
import { Footer } from "../components/Footer";

export const Services = () => {
  const { services } = useAuth;
  return (
    <>
        <section>
        <div>
          <div>
            <h1>Services </h1>
          </div>
        </div>

        <div className="container">
          {services.map((curEle, index) => {
            const { price, description, provider, service } = curEle;
            return (
              <div className="card-container" key={index}>
                <div className="grid ">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            );
          })}
          <div>
            <div>
              <img src="/home.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
// export default Services;
