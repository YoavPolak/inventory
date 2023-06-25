

function DataDisplay (props) {
    
    function showItem(item){
        return(
            <tr key={item.key}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
                <td><button className="btn btn-danger" onClick={() => props.deleteItem(item)}>Delete</button></td>
            </tr>
        )
    }
    return (
        <div className="container">
            <div className="row"><h2  align="center">Items</h2></div>
            
            <div className="row mt-3">
                <table className="table table-striped">
                    <thead>
                        <tr className="table table-secondary">
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.items.map(showItem)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataDisplay;