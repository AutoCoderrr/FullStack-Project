import { Statics } from "../components/Statics";
import { useAuth } from "../store/Auth";
import { Footer } from "../components/Footer";

export const Details = () => {
  const user = useAuth();
  const username = user.user.username;

  return (
    <>
      <main>
        <section className="section">
          <div className="container">
            <div className="content-about">
              <p>
                Welcome{" "}
                {user ? `${username} to our website ` : `to our website `}
              </p>
              <h1>why choose us?</h1>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam nostrum, consequatur quidem porro repellat obcaecati
                dolores optio eligendi nesciunt, quasi labore nulla corporis
                ducimus repellendus.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                ut veritatis nihil ullam iusto repellendus, molestias maxime
                atque, soluta voluptatum assumenda voluptatem deserunt sit.
                Dolorum ipsum dignissimos pariatur nulla consequuntur!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci provident numquam aliquid placeat, necessitatibus eius
                labore dignissimos voluptas excepturi, ab quam optio, omnis
                sequi debitis sapiente libero illum maiores est.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores possimus ea tempora sint magnam amet perspiciatis
                odio voluptatum. Magni corrupti rerum velit neque atque!
                Consequuntur aliquam doloremque animi harum cum.
              </p>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div>
            <img src="/home.webp" alt="image " />
          </div>
        </section>
     
      </main>
         <Statics></Statics>
         <Footer></Footer>
    </>
  );
};
