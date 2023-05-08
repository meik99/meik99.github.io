import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">RynkBit</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/"
                                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about"
                                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/privacy-policy"
                                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Privacy Policy</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    );
}

export default Navbar;