import "./home.scss";
import settings from "../../assets/img/coffeebank/settings_thumbnail.png";
import PortfolioCard from "../../components/portfolio/PortfolioCard";

function Home() {
    return (
        <div className="container">
            <PortfolioCard
                title={"CoffeeBank"}
                description={"An Android app to manage customers, products and transactions."}
                imgSrc={settings}
                link={"/coffeebank"}>
            </PortfolioCard>
        </div>
    );
}

export default Home;