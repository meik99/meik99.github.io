import "./home.scss";
import { NavLink } from "react-router-dom";
import settings from "../assets/img/coffeebank/settings_thumbnail.png";

function Home() {
    return (
        <div className="container">
            <div className="card mt-5 mb-5">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={settings} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CoffeeBank</h5>
                            <p className="card-text">
                                An Android app to manage customers, products and transactions.
                            </p>
                            <NavLink className="btn btn-outline-dark" to="/coffeebank">Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <h3>CoffeeBank</h3>
                    <p>
                        An Android app to manage customers, products and transactions.
                    </p>
                    <NavLink className="btn">Details</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;