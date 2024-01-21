import React, { useState, useEffect } from 'react';
import mFilterSvg from '../libs/images/mi_filter.svg';
import PropertyCard from './PropertyCard';
// import { propertyData } from '../libs/data';
import { Menu } from '@headlessui/react';
import useProperties from '../hooks/useProperties';
const FilterCards: React.FC = () => {
  const propertyData = useProperties();
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredData, setFilteredData] = useState(propertyData);
  const filters = ['All', 'Studio', '1 Bedroom', '2 Bedrooms'];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (!propertyData) {
      return;
    }
    console.log(activeFilter)
    console.log(filteredData)
    if (activeFilter === 'All') {
      console.log('true')
      setFilteredData(propertyData);
    } else {
      console.log('false')
      setFilteredData(
        propertyData.filter((property: any) =>
          activeFilter === 'Studio'
            ? property.bedrooms === 0
            : property.bedrooms.toString() === activeFilter[0]
        )
      );
    }
  }, [activeFilter, propertyData]);

  if (!propertyData) {
    // Show a loading indicator (spinner, loader animation, etc.)
    return <div className="text-center mt-4">Loading...</div>;
  }

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
        <div className="m-4 relative">
          <Menu>
            <Menu.Button
              className="border-none px-4 py-2 rounded-md text-semibold bg-[#1DAEFF]"
              style={{
                boxShadow: '0px 4px 40px 0px #1DAEFF',
                display: 'flex',
                alignItems: 'center',
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
                  height: '20px', // Adjust the height as needed
                  width: '20px', // Adjust the width as needed
                }}
              ></span>
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 space-y-2">
              {filters.map((filter) => (
                <Menu.Item key={filter}>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'text-black hover:bg-gray-200'
                      } py-2 px-4 w-full text-left text-white bg-[#1DAEFF] rounded-lg`}
                      onClick={() => handleFilterClick(filter)}
                    >
                      {filter}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mx-auto max-w-screen-xl justify-between">
      {Array.isArray(filteredData) && filteredData.length > 0 ? (
        <PropertyCard propertyData={filteredData} />
      ) : (
        <p>No properties found.</p>
      )}
      </div>
    </>
  );
};

export default FilterCards;
