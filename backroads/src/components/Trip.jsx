import Excursions from "./trips";

const Trip = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <Excursions />
    </section>
  );
};

export default Trip;
