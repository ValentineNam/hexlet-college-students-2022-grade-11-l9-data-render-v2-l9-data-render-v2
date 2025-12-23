import React, { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState('All');

  useEffect(() => {
    fetch('/cafes')
      .then(response => response.json())
      .then(data => {
        setCafes(data.cafes);
        setFilteredCafes(data.cafes);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных о кафе:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedSubway === 'All') {
      setFilteredCafes(cafes);
    } else {
      const filtered = cafes.filter(cafe => cafe.subwayCode === selectedSubway);
      setFilteredCafes(filtered);
    }
  }, [selectedSubway, cafes]);

  const handleFilterChange = (subwayCode) => {
    setSelectedSubway(subwayCode);
  };

  return (
    <div className="cafesTable">
      <FilterCafes onFilterChange={handleFilterChange} />
      <ul className="cardsList">
        {filteredCafes.map(cafe => (
          <li className="card" key={cafe.id}>
            <img src={cafe.img || 'https://imgholder.ru/150'} alt="" />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;
