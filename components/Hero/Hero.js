import styles from "./Hero.module.scss";

export const Hero = () => (
  <div className={`container-fluid my-5 py-5 ${styles.hero}`}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <h1>
            Welcome to the <span>Pokedex.</span>
          </h1>
        </div>
        <div className="col-sm-12 col-lg-4 offset-lg-2">
          <p>
            The comprehensive database of Pokemon from the original Blue and Red
            version. <span>Find your favourite and check out their stats.</span> 
          </p>
          <form className="mt-5">
            <input type={"search"} placeholder="Search the Pokedex" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
