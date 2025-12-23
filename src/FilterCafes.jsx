import React from 'react';

const FilterCafes = ({ onFilterChange }) => {
  const subwayOptions = [
    {
      name: "Арбатская",
      code: "Arbat",
    },
    {
      name: "Александровский сад",
      code: "Alexanders Garden",
    },
    {
      name: "Московская",
      code: "Moscow",
    },
    {
      name: "Парк Культуры",
      code: "Culture",
    },
    {
      name: "Театральная",
      code: "Theater",
    },
  ];

  const handleChange = (event) => {
    if (onFilterChange) {
      onFilterChange(event.target.value);
    }
  };

  return (
    <div className="controls">
      <select name="subway" id="subway" onChange={handleChange}>
        <option value="All" selected>Все</option>
        {subwayOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;
