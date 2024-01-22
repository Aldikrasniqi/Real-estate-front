import React from 'react';
import Props from '../types/propertyTypes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = (props: { propertyData: Props[] }) => {
  const [loading, setLoading] = React.useState(false);
  const [cardsPerPage, setCardsPerPage] = React.useState(4);
  const [pageNumber, setPageNumber] = React.useState(1);

  const allCards = props.propertyData;
  const lastIndex = pageNumber * cardsPerPage;
  const currentCardsSlice = allCards.slice(0, lastIndex);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {currentCardsSlice.map((property: any, index: any) => (
        <div
          key={index}
          className="flex flex-col lg:w-1/2 p-4 h-[530px] rounded-lg overflow-hidden"
        >
            <img
              key={index}
              src={property.images}
              className="h-full rounded-t-lg object-cover object-center overflow-hidden"
            />

          <div className="bg-[#161616] p-4 rounded-lg">
            <div className="flex flex-row justify-between">
              <h1 className="text-[#FFFBFB] text-2xl font-semibold">
                {property.type === 'APARTMENT' ? 'For Sale' : 'For Rent'}
              </h1>
              <Link
                to={`/property/${property.id}`}
                style={{
                  borderRadius: '0.5rem',
                  background:
                    'linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)',
                  boxShadow: '0px 17px 33px 0px rgba(255, 255, 255, 0.20)',
                  padding: '0.5rem 1rem',
                  color: '#FFF',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                View details
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center rounded-lg pt-4 w-full">
              <span
                className="w-1/3 text-center border rounded-l-md p-2"
                style={{
                  borderRightWidth: '1px',
                  borderRightColor: 'rgba(255, 251, 251, 0.35)',
                  borderColor: 'rgba(255, 251, 251, 0.35)',
                  color: 'rgba(255, 251, 251, 0.65)',
                }}
              >
                {property.bedrooms} Bedroom
              </span>
              <span
                className="w-1/3 text-center border p-2"
                style={{
                  borderColor: 'rgba(255, 251, 251, 0.35)',
                  borderRightWidth: '0px',
                  borderRightColor: 'rgba(255, 251, 251, 0.35)',
                  borderLeftWidth: '0px',
                  borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                  color: 'rgba(255, 251, 251, 0.65)',
                }}
              >
                {property.bathrooms} Baths
              </span>
              <span
                className="w-1/3 text-center border rounded-r-md p-2"
                style={{
                  borderColor: 'rgba(255, 251, 251, 0.35)',
                  borderLeftWidth: '1px',
                  borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                  color: 'rgba(255, 251, 251, 0.65)',
                }}
              >
                {property.size} sq ft
              </span>
            </div>
          </div>
        </div>
      ))}
      {allCards.length > lastIndex && (
        <div className="flex justify-between mx-auto max-w-screen-xl flex-wrap mt-6">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faChevronCircleDown}
              className="text-4xl text-[#A6A3A3] bg-black cursor-pointer rounded-full"
              onClick={handleShowMore}
            />
            <span className="rounded-full "></span>

            <span className="text-[#fffbfbe3] text-sm font-medium mt-1">
              {loading ? 'Loading...' : 'View More'}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
