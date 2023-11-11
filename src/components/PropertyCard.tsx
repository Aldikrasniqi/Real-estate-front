import React from 'react';

type Props = {
  id: string;
  propType: string;
  bedroom: number;
  bath: number;
  area: number;
  propImg: string[];
};

const PropertyCard = (props: { propertyData: Props[] }) => {
  return (
    <>
      <div className="flex justify-between mx-auto max-w-screen-xl flex-wrap">
        <div className="flex flex-1 gap-4 m-4">
          {props.propertyData.map((property, index) => (
            <div key={index}>
              <p>{property.propType}</p>
              <p>{property.bedroom}</p>
              <p>{property.bath}</p>
              <p>{property.area}</p>
              {property.propImg.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`Property ${index + 1} - Image ${imgIndex + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
