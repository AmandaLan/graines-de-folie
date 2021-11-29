import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import "../stylesheets/products.scss";
import Navbar from './NavBar';
import Footer from './Footer';


const Cactus = () => {
    const [cactus, setCactus] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
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
                {cactus.filter((item) => item.type == "Cactus").map(cactu => {
                    return (
                        <li className="box" key={cactu.id}>
                            <div>
                                <div>
                                    <img src={cactu.image} alt={cactu.name} />
                                </div>

                            </div>
                            <div>
                                <div>
                                    <h4>{cactu.name}</h4>
                                    <p>{cactu.price}€</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Footer />
        </div>
    )
}
export default Cactus;
