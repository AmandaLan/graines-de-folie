import React from 'react';
import NavBar from './NavBar';
import formBG from "../../assets/img/formBG.jpg"

function ProductFormAdmin() {
    return (
        <div className="container formAdmin">
            <NavBar />
            <div className="formBG" >
                <img src={formBG} />
                <form className="productForm">
                    <h1>Ajoutez un produit</h1>
                    <div className="productFormColumn">
                        <div className="form">
                            <label>Nom</label>
                            <input type="text" name="name" />
                            <label>Description</label>
                            <textarea type="text" name="description" />
                            <label>Prix</label>
                            <input type="text" name="price" />
                            <label>Image</label>
                            <input type="text" name="image" />
                            <label>Soin</label>
                            <input type="text" name="care" />
                            <label>Diamètre</label>
                            <input type="text" name="diameter" />
                        </div>
                        <div className="form">
                            <label>Taille</label>
                            <input type="text" name="size" />
                            <label>Luminosité</label>
                            <select>
                                <option hidden selected></option>
                                <option value="Ensolleillé">Ensolleillé</option>
                                <option value="Mi-ombragé">Mi-ombragé</option>
                                <option value="Ombragé">Ombragé</option>
                            </select>
                            <label>Eau</label>
                            <input type="text" name="water" />
                            <label>Emplacement</label>
                            <input type="text" name="place" />
                            <label>Type</label>
                            <select>
                                <option hidden selected></option>
                                <option value="Cactus">Cactus</option>
                                <option value="Fruit">Fruit</option>
                                <option value="Fleur">Fleur</option>
                                <option value="Tropical">Tropical</option>
                                <option value="Aloès">Aloès</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" value="Envoyer" className="btnSubmit" />
                </form>


            </div>

        </div>
    )
}

export default ProductFormAdmin
