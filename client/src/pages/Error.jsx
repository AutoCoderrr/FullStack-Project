import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Error=()=>{
    return  (<>
    
    <section id="error-page">
        <div className="content">
            <h2 className="header">404</h2>
            <h4>Sorry! page not found </h4> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate repudiandae quasi, hic, error, reprehenderit repellendus quam dolorem quibusdam odio culpa. Nesciunt minima sequi possimus!</p>
      <div className="btns">

     <NavLink to="/">return Home </NavLink>
     <NavLink to="/contact">report problem </NavLink>
      </div>
      
       </div>
    </section>
    <Footer></Footer>
    
    
    
    </>
    );
};