import {useState} from "react";

function AddItem(props) {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    function addItemButtonPressed() {
        props.addItem({name: name, price: price, type: type, brand: brand})

        setName("")
        setPrice(0)
        setType("")
        setBrand("")
    }
    
    return (
        <div className="container">
            <div className="row mt-3">
                <h2>Add your own Item</h2>
            </div>

            <div className="row">
                <labal htmlFor="name-field">Name:</labal>
                <input id="name-field" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>

                <labal htmlFor="price-field">Price:</labal>
                <input id="price-field" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>

                <labal htmlFor="type-field">Type:</labal>
                <input id="type-field" type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)}/>

                <labal htmlFor="brand-field">Brand:</labal>
                <input id="brand-field" type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)}/>
            </div>
            
            <div className="row mt-3">
                <button type="button" className="btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
            </div>
        </div>
    );
}

export default AddItem;