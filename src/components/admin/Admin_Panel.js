import { Routes, Route, Link } from 'react-router-dom';

// import pages admin
import Category from "./category/Category";
import Product from './product/Product';
import Shared from './shared/Shared';
import Order from './order/Order';

export default function AdminPanel() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={`category`}>Active</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="shared">Shared</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="orders">List orders</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-8">
                        <Routes>
                            <Route path="category" element={<Category />} />
                            <Route path="product" element={<Product />} />
                            <Route path="shared" element={<Shared />} />
                            <Route path="orders" element={<Order />} />
                        </Routes>
                </div>
            </div>
        </div>
    );
}