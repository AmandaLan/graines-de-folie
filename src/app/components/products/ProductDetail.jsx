import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';

function ProductDetail() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:4000/products/${id}`);
            setProducts(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []);
    return (
        <div className="container">
            <NavBar />
            <div className="productDetail">
                <div className="productImg">
                    <img src={products.image} />
                    <h1>{products.name}</h1>
                    <h3>{products.price}€</h3>
                    <div className="img">
                        <img src={products.image} />
                        <h1>{products.name}</h1>
                        <h3>{products.price}€</h3>
                    </div>
                </div>
                <div className="productinfos">
                    <p>{products.description}</p>
                    <div className="infosIcone">
                        <div>
                            <img src="https://api.iconify.design/akar-icons:plant.svg" />
                            <p>{products.care}</p>
                        </div>
                        <div>
                            <img src="https://api.iconify.design/ion:waterdrop.svg" />
                            <p>{products.water}</p>
                        </div>
                        <div>
                            <img src="https://api.iconify.design/fluent:weather-sunny-24-regular.svg" />
                            <p>{products.place}</p>
                        </div>
                        <div>
                            <img src="https://api.iconify.design/fluent:resize-large-24-filled.svg" />
                            <div className="infoSize">
                                <p>Diamètre : {products.diameter}cm</p>
                                <p>Taille : {products.size}cm </p>
                            </div>
                        </div>
                    </div>
                    <div className="cartButton">
                        <button>Ajouter au Panier</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail;
