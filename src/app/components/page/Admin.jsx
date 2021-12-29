import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from '../layout/NavBar';
import { Link } from 'react-router-dom';

function Admin() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get('http://localhost:4000/products');
            setProducts(res.data);
            setLoading(false)
        }
        fetchProduct()
    }, []);
    return (
        <div className="container">

            <NavBar />

            <div className="dashboardProductAdmin">
                <div className="addProduct">
                    <Link to="/ajout-produit"><button>Ajouter un produit</button></Link>
                </div>
                
                <table className="productTableAdmin">
                    <thead>
                        <tr>
                            <th colSpan="1">Image</th>
                            <th colSpan="1">Nom du produit</th>
                            <th colSpan="1">Prix</th>
                            <th colSpan="1"></th>
                            <th colSpan="1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return (
                                <tr>
                                    <td className="productListAdmin"><img src={product.image} /></td>
                                    <td className="productListAdmin">{product.name}</td>
                                    <td className="productListAdmin">{product.price}€</td>
                                    <td className="buttonUpdate"><button>Modifier</button></td>
                                    <td className="buttonUpdate"><button>Supprimer</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin
