import React, { useState } from 'react';

const data = [
  { name: "john", age: 23 },
  { name: "vijay", age: 45 },
  { name: "salman", age: 53 },
  { name: "ajay", age: 34 },
];

function filterData(data, search) {
  if (search.trim() === "") {
    return data;
  }
  return data.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.age.toString().includes(search)
  );
}

export function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = filterData(data, search);

  return (
    <div className="App">
      <h1>Data</h1>
      <input 
        id="search1" 
        type="search" 
        placeholder="Search by name or age" 
        value={search} 
        onChange={handleSearchChange} 
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
