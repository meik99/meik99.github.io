import "./home.scss";
import { NavLink, useNavigate } from "react-router-dom";
import settings from "../../assets/img/coffeebank/settings_thumbnail.png";
import { useCallback } from "react";

function Home() {
    const navigate = useNavigate();
    const coffeeLink = useCallback(() => navigate("/coffeebank"), [navigate]);

    return (
        <div className="container">
            <div className="card mt-4" onClick={coffeeLink}>
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
            <div className="card mt-4">
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
        </div>
    );
}

export default Home;