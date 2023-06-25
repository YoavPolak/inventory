import "./App.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import DataDisplay from "./DataDisplay";
import { useState, useEffect } from "react";
import Test from "./Class";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });


  useEffect(() => {
    

    fetch("http://localhost:300/kids").then((respone) => respone.json()).then((data) => setData({items: data}))
    },[]
  )

  function updateFilters(searchParams) {
    setFilters(searchParams);
  }

  function addItemToData(item) {
    let items = data["items"];

    item.key = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:300/kids", requestOptions)
      .then((respone) => respone.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
  }

  function deleteData(item) {

    const items = data["items"]

    const requestOptions = {
      method: "DELETE"
    }

    fetch(`http://localhost:300/kids/${item.id}`, requestOptions).then((respone) => {
      if (respone.ok) {
        const idx =  items.indexOf(item);
        items.splice(idx, 1)
        setData({items: items})
        }
      }
    )
  }

  function filterData(data) {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      console.log(filters);
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }

      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }

      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }
    return filteredData;
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <DataDisplay items={filterData(data["items"])} deleteItem={deleteData} />
      </div>

      <div className="row mt-3">
        <SearchBar searchParams={updateFilters} />
      </div>

      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
      <Test />
    </div>
  );
}

export default App;
