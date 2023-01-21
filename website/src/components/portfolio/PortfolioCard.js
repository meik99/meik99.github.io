import {NavLink, useNavigate} from "react-router-dom";
import {useCallback} from "react";
import Pill from "../Pill";

function PortfolioCard({title, description, imgSrc, link, tags= []}) {
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate(link), [navigate, link]);

    return (
        <div className="card mt-4" onClick={onClick}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Tags:
                            <span className="ms-2"></span>
                            {
                                tags.map(tag => (
                                    <Pill text={tag}></Pill>
                                ))
                            }
                        </h6>
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