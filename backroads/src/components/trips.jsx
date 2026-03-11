import Tibet from "/images/tour-1.jpg";
import Java from "/images/tour-2.jpg";
import HongKong from "/images/tour-3.jpg";
import Kenya from "/images/tour-4.jpg";
import Madrid from "/images/Gran_Via.jpg";
import Mexico from "/images/mexico-city.jpg";

const Excursions = () => {
  const tours = [
    {
      id: 1,
      alt: "A stunning mountain view of Tibet.",
      image: Tibet,
      date: "august 26th, 2026",
      name: "tibet adventure",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      country: "china",
      days: "6 days",
      price: "from $2100",
    },
    {
      id: 2,
      alt: "Woman sitting in the middle of a road on Java Island, Indonesia.",
      image: Java,
      date: "october 1th, 2026",
      name: "best of java",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      country: "indonesia",
      days: "11 days",
      price: "from $1400",
    },
    {
      id: 3,
      alt: "A stunning night view of the city of Hong kong.",
      image: HongKong,
      date: "september 15th, 2026",
      name: "explore hong kong",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      country: "hong kong",
      days: "8 days",
      price: "from $5000",
    },
    {
      id: 4,
      alt: "An elephant tossing red dirt in Kenya.",
      image: Kenya,
      date: "december 5th, 2026",
      name: "kenya highlights",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      country: "china",
      days: "6 days",
      price: "from $2100",
    },
    {
      id: 5,
      alt: "A stunning view of Madrid's Gran Via.",
      image: Madrid,
      date: "july 18th, 2026",
      name: "the best of madrid",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      country: "spain",
      days: "7 days",
      price: "from $3000",
    },
    {
      id: 6,
      alt: "A night view of Mexico City's Angel of Independence monument.",
      image: Mexico,
      date: "april 23th, 2026",
      name: "explore mexico city",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      country: "mexico",
      days: "5 days",
      price: "from $1800",
    },
  ];

  return (
    <div className="section-center featured-center">
      {tours.map((tour) => (
        <article key={tour.id} className="tour-card">
          <div className="tour-img-container">
            <img src={tour.image} className="tour-img" alt={tour.alt} />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.name}</h4>
            </div>
            <p>{tour.info}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {tour.country}
              </p>
              <p>{tour.days}</p>
              <p>{tour.price}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Excursions;
