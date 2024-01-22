import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        Logo
                    </Link>
                    <p className="text-body-secondary">&copy; 2023</p>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-body-secondary">Features</Link></li>
                        <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                        <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-body-secondary">Features</Link></li>
                        <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                        <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-body-secondary">Features</Link></li>
                        <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                        <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}