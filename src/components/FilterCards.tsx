import React, { useState, useEffect } from 'react';
import mFilterSvg from '../libs/images/mi_filter.svg';
import PropertyCard from './PropertyCard';
import { propertyData } from '../libs/data';
import { usePropertyContext } from '../context/context.store';

const FilterCards: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredData, setFilteredData] = useState(propertyData);
  const filters = ['All', 'Studio', '1 Bedroom', '2 Bedrooms'];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredData(propertyData);
    } else {
      setFilteredData(
        propertyData.filter((property) =>
          activeFilter === 'Studio'
            ? property.bedroom === 0
            : property.bedroom.toString() === activeFilter[0]
        )
      );
    }
  }, [activeFilter]);
  console.log(activeFilter)
  return (
    <>
      <div className="flex justify-between mx-auto max-w-screen-xl flex-wrap">
        <div className="flex flex-1 gap-4 m-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`border px-4 py-2 rounded-md text-semibold font-semibold text-sm ${
                activeFilter === filter
                  ? 'text-[#1DAEFF] border-1.5px'
                  : 'text-gray-500'
              }`}
              style={{
                border:
                  activeFilter === filter
                    ? '1.5px solid #1DAEFF'
                    : '1.5px solid rgba(255, 251, 251, 0.35)',
              }}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="m-4">
          <button
            className="border-none px-4 py-2 rounded-md text-semibold bg-[#1DAEFF]"
            style={{
              boxShadow: '0px 4px 40px 0px #1DAEFF',
            }}
          >
            Filters
            <span
              style={{
                backgroundImage: `url(${mFilterSvg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                paddingRight: '20px',
                marginLeft: '10px',
              }}
            ></span>
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mx-auto max-w-screen-xl justify-between">
        <PropertyCard propertyData={filteredData} />
      </div>
    </>
  );
};

export default FilterCards;
