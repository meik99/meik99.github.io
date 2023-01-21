import "./Home.scss";
import PortfolioCard from "../../components/portfolio/PortfolioCard";
import {SettingsThumbnail} from "../../assets/img/coffeebank";
import {DynatraceLogo} from "../../assets/img/dto";

function Home() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-12">
                    <h1>Projects</h1>
                </div>
            </div>
            <PortfolioCard
                title="CoffeeBank"
                description="An Android app to manage customers, products and transactions."
                imgSrc={SettingsThumbnail}
                link="/coffeebank"
                tags={["Android", "Kotlin", "OR-Mapping"]}>
            </PortfolioCard>
            <PortfolioCard
                title="Dynatrace Operator"
                description="
                The Dynatrace Operator can be used to automatically
                deploy and manage OneAgent and ActiveGate instances on a Kubernetes cluster.
                "
                imgSrc={DynatraceLogo}
                link={"/dynatrace-operator"}
                tags={["Cloud Computing", "Kubernetes", "Operator", "Golang"]}>
            </PortfolioCard>
        </div>
    );
}

export default Home;