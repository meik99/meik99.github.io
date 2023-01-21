import {NavLink, useNavigate} from "react-router-dom";
import {useCallback} from "react";

function PortfolioCard({title, description, imgSrc, link}) {
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate(link), [navigate]);

    return (
        <div className="card mt-4" onClick={onClick}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <NavLink className="btn btn-outline-dark" onClick={e => e.stopPropagation()} to={link}>Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;