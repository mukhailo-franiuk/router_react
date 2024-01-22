import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Simple header</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
                    <li className="nav-item"><Link to="/pricing" className="nav-link">Pricing</Link></li>
                    <li className="nav-item"><Link to="/faq" className="nav-link">FAQs</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                </ul>
                <div className="col-md-3 text-end">
                    <Link to="/admin" type="button" className="btn btn-outline-primary me-2">Admin</Link>
                </div>
            </header>
        </div>
    );
}