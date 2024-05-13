import Header from "./components/Header";
import Card from "./components/Card";
import heroImage from "./images/hero.jpg";
import entertainmentImage from "./images/entertainment.jpg";
import financeImage from "./images/finance.jpg";
import politicsImage from "./images/politics.jpg";
import techImage from "./images/tech.jpg";
import sportImage from "./images/sport.jpg";
import religionImage from "./images/religion.jpg";
import styles from "./App.module.css";
import Footer from "./components/Footer";

function App() {
  const cards = [
    {
      image: entertainmentImage,
      title: "Entertainment",
      subtitle: "Music, movies and theatre",
    },
    {
      image: financeImage,
      title: "Finance",
      subtitle: "Financial news",
    },
    {
      image: politicsImage,
      title: "Politics",
      subtitle: "Political news",
    },
    {
      image: techImage,
      title: "Tech",
      subtitle: "Tech news from around the globe",
    },
    {
      image: sportImage,
      title: "Sport",
      subtitle: "Sporting news",
    },
    {
      image: religionImage,
      title: "Religion",
      subtitle: "Religion and spirituality news",
    },
  ];

  return (
    <div className={styles.App}>
      <Header />
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles["hero-wrapper"]}>
          <h2 className={styles["hero-text"]}>
            Lorem ipsum <br />
            dolor sit amet
          </h2>
          <div className={styles["search-bar"]}>
            <input type="text" placeholder="I'm looking for..." />
            <button>SEARCH</button>
          </div>
        </div>
      </div>
      <div className={styles["card-container"]}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
