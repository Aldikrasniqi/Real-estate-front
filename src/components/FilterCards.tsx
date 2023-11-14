import mFilterSvg from '../libs/images/mi_filter.svg';
import PropertyCard from './PropertyCard';
import {propertyData} from '../libs/data';
const FilterCards: React.FC = () => {
  // handle active state
  // handle filter state with data
  return (
    <>
      <div className="flex justify-between mx-auto max-w-screen-xl flex-wrap">
        <div className="flex flex-1 gap-4 m-4 ">
          <button
            className="border px-4 py-2 rounded-md text-semibold font-semibold text-sm text-[#1DAEFF]"
            style={{
              border: '1.5px solid #1DAEFF',
            }}
          >
            All
          </button>
          <button
            className="border px-4 py-2 rounded-md text-semibold font-semibold text-sm"
            style={{
              border: '1.5px solid rgba(255, 251, 251, 0.35)',
            }}
          >
            Studio
          </button>
          <button
            className="border px-4 py-2 rounded-md text-semibold font-semibold text-sm"
            style={{
              border: '1.5px solid rgba(255, 251, 251, 0.35)',
            }}
          >
            1 Bedroom
          </button>
          <button
            className="border px-4 py-2 rounded-md text-semibold font-semibold text-sm"
            style={{
              border: '1.5px solid rgba(255, 251, 251, 0.35)',

            }}
          >
            2 Bedrooms
          </button>
        </div>
        <div className="m-4 ">
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
      <div className='flex flex-row flex-wrap mx-auto max-w-screen-xl justify-between'>
        <PropertyCard propertyData={propertyData} />
      </div>
    </>
  );
};
export default FilterCards;
