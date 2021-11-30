import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';


const Cactus = () => {
    const [cactus, setCactus] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get('http://localhost:4000/products');
            setCactus(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []);
    return (
        <div className="container">
            <Navbar />
            <ul className="products">
                {cactus.filter((item) => item.type.includes("Cactus")).map(cactu => {
                    return (
                        <Link to={`/detail/${cactu._id}`} style={{ textDecoration: 'none', color:"#193E35" }}>
                            <li className="box" key={cactu.id}>
                                <div>
                                    <div>
                                        <img src={cactu.image} alt={cactu.name} />
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <h2>{cactu.name}</h2>
                                        <h3>{cactu.price}€</h3>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <Footer />
        </div>
    )
}
export default Cactus;
