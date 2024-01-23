import React from 'react';
import Map from './Map';
import { Popover, Transition } from '@headlessui/react';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import AddressItem from '../types/agentAdress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {deleteProperty} from '../services/property-service';
import { useAlertContext } from '../context/alert.context';
function PropertyDetailCard(propertyDetail: any) {
  console.log(propertyDetail);
  const user = localStorage.getItem('user');
  const { onOpen } = useAlertContext();
  if (!propertyDetail || !propertyDetail.props) {
    return <div className="text-center mt-4">Loading...</div>;
  }
  const handleDelete = (id: any, agentName: string) => {
    console.log(id);
    console.log(agentName);
    deleteProperty(id).then(
      () => {
        onOpen(
          'success',
          `Agent "${agentName}" property has been deleted.`
        );
      },
      (err: any) => {
        const resMessage =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        onOpen('Error', resMessage);
      }
    );
  }
  return (
    <>
      {propertyDetail.props && (
        <div className="lg:w-[1000px] w-auto p-6">
          <img
            src={propertyDetail.props.images}
            alt=""
            style={{ width: '100%', borderRadius: '0.625rem' }}
          />
          <div className="flex flex-wrap justify-between mt-4">
            <img
              src={propertyDetail.props.images}
              alt=""
              style={{ width: '300px', borderRadius: '0.625rem' }}
            />
            <img
              src={propertyDetail.props.images}
              alt=""
              style={{ width: '300px', borderRadius: '0.625rem' }}
            />
            <img
              src={propertyDetail.props.images}
              alt=""
              style={{ width: '300px', borderRadius: '0.625rem' }}
            />
          </div>
          <div className="flex flex-row justify-center items-center rounded-lg pt-4 w-full">
            <span
              className="w-1/3 text-center border rounded-l-md p-2 flex justify-center items-center gap-2"
              style={{
                borderRightWidth: '1px',
                borderRightColor: 'rgba(255, 251, 251, 0.35)',
                borderColor: 'rgba(255, 251, 251, 0.35)',
                color: '#fff',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M6.04543 1.93553H7.9541C8.83734 1.93633 9.60421 2.54408 9.80677 3.40378C9.82377 3.47545 9.88769 3.52611 9.96135 3.52628H12.8862C12.9284 3.52643 12.9689 3.50979 12.9988 3.48001C13.0286 3.45024 13.0454 3.40979 13.0454 3.36761V1.77628C13.0454 1.43876 12.9113 1.11507 12.6726 0.876456C12.4339 0.637846 12.1101 0.503874 11.7726 0.504028H2.22693C1.88941 0.503874 1.56566 0.637846 1.32694 0.876456C1.08822 1.11507 0.954102 1.43876 0.954102 1.77628V3.36761C0.954101 3.40979 0.970898 3.45024 1.00078 3.48001C1.03066 3.50979 1.07117 3.52643 1.11335 3.52628H4.03818C4.11199 3.52654 4.17616 3.47569 4.19277 3.40378C4.39532 2.54408 5.1622 1.93633 6.04543 1.93553Z"
                  fill="white"
                />
                <path
                  d="M0.636417 4.4812C0.467581 4.48105 0.305616 4.54805 0.186231 4.66743C0.0668464 4.78682 -0.000154698 4.94878 2.68218e-07 5.11762V8.45837C-2.50467e-07 8.76083 0.212885 9.02151 0.50925 9.08195C0.583199 9.09716 0.636306 9.1622 0.636417 9.2377V10.5263C0.636417 10.8778 0.92135 11.1627 1.27283 11.1627C1.62432 11.1627 1.90925 10.8778 1.90925 10.5263V9.25403C1.9091 9.21185 1.92574 9.17135 1.95552 9.14146C1.98529 9.11158 2.02573 9.09478 2.06792 9.09478H11.9321C11.9743 9.09478 12.0147 9.11158 12.0445 9.14146C12.0743 9.17135 12.0909 9.21185 12.0908 9.25403V10.5263C12.0908 10.8778 12.3757 11.1627 12.7272 11.1627C13.0787 11.1627 13.3636 10.8778 13.3636 10.5263V9.2377C13.3637 9.1622 13.4168 9.09716 13.4908 9.08195C13.7871 9.02151 14 8.76083 14 8.45837V5.11762C14.0002 4.94878 13.9332 4.78682 13.8138 4.66743C13.6944 4.54805 13.5324 4.48105 13.3636 4.4812H0.636417Z"
                  fill="white"
                />
              </svg>
              {propertyDetail.props.bedrooms}
            </span>
            <span
              className="w-1/3 text-center border p-2 flex justify-center items-center gap-2 flex justify-center items-center gap-2"
              style={{
                borderColor: 'rgba(255, 251, 251, 0.35)',
                borderRightWidth: '0px',
                borderRightColor: 'rgba(255, 251, 251, 0.35)',
                borderLeftWidth: '0px',
                borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                color: '#fff',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3331 9.33335C15.5176 9.33468 15.6933 9.41183 15.8191 9.54668C15.9453 9.67886 16.0108 9.85761 15.9998 10.04C15.7995 13.3874 13.0266 15.9997 9.67315 16H6.32648C2.97306 15.9997 0.200142 13.3874 -0.000188023 10.04C-0.00897117 9.85806 0.0559115 9.68023 0.179812 9.54668C0.304733 9.41018 0.481445 9.33272 0.666479 9.33335H3.07848C3.22547 9.33473 3.35601 9.23967 3.39981 9.09935C3.57391 8.54572 4.08613 8.1683 4.66648 8.16601H8.00315C8.5835 8.1683 9.09571 8.54572 9.26981 9.09935C9.31325 9.23849 9.44205 9.33327 9.58781 9.33335H13.1658C13.3499 9.33335 13.4991 9.18411 13.4991 9.00001V2.00001C13.4999 1.73655 13.3454 1.49736 13.105 1.38968C12.8645 1.282 12.5832 1.32602 12.3871 1.50201L12.1138 1.77535C12.0249 1.86493 11.9942 1.99706 12.0345 2.11668C12.2669 2.80327 12.0905 3.56229 11.5791 4.07601L11.4458 4.21268C11.1855 4.47294 10.7635 4.47294 10.5031 4.21268L8.73981 2.44868C8.47956 2.18835 8.47956 1.76635 8.73981 1.50601L8.87648 1.36935C9.3963 0.872756 10.1468 0.701707 10.8305 0.924014C10.9492 0.96174 11.0791 0.930112 11.1671 0.842014L11.4758 0.533348C12.0591 -0.00563735 12.906 -0.148438 13.6338 0.169491C14.3616 0.487419 14.8323 1.20583 14.8331 2.00001V9.00001C14.8331 9.18411 14.9824 9.33335 15.1665 9.33335H15.3331ZM7.66648 13.5C7.85057 13.5 7.99981 13.3508 7.99981 13.1667V9.83335C7.99981 9.64925 7.85057 9.50001 7.66648 9.50001H4.99981C4.81572 9.50001 4.66648 9.64925 4.66648 9.83335V13.1667C4.66648 13.3508 4.81572 13.5 4.99981 13.5H7.66648Z"
                  fill="white"
                />
                <path
                  d="M5.99976 4.05868C6.09602 4.05952 6.19131 4.03951 6.27909 4.00002L7.48976 3.44135C7.70638 3.34191 7.8535 3.13446 7.87569 2.89714C7.89789 2.65982 7.79179 2.42869 7.59736 2.2908C7.40293 2.15292 7.14972 2.12924 6.93309 2.22868L5.72043 2.78668C5.43613 2.91786 5.28143 3.2292 5.34859 3.53501C5.41575 3.84082 5.68666 4.05869 5.99976 4.05868Z"
                  fill="white"
                />
                <path
                  d="M9.41461 7.67267C9.75316 7.81709 10.1447 7.65982 10.2893 7.32134L10.8133 6.09467C10.9484 5.7582 10.7899 5.37542 10.4564 5.23306C10.1229 5.09071 9.73678 5.241 9.58728 5.57134L9.06661 6.8C8.92312 7.1371 9.07853 7.52682 9.41461 7.67267Z"
                  fill="white"
                />
                <path
                  d="M6.99039 6.05068C7.24943 6.31223 7.67144 6.31432 7.93306 6.05534L8.88106 5.11801C9.1356 4.85792 9.13454 4.44176 8.87867 4.18298C8.6228 3.9242 8.20668 3.91843 7.94372 4.17001L6.99572 5.10801C6.73399 5.36687 6.7316 5.78887 6.99039 6.05068Z"
                  fill="white"
                />
              </svg>{' '}
              {propertyDetail.props.bathrooms}
            </span>

            <span
              className="w-1/3 text-center border p-2 flex justify-center items-center gap-2"
              style={{
                borderColor: 'rgba(255, 251, 251, 0.35)',
                borderRightWidth: '0px',
                borderRightColor: 'rgba(255, 251, 251, 0.35)',
                borderLeftWidth: '1px',
                borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                color: '#fff',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.8 3.94466L8.13333 0.611331C8.04846 0.573567 7.95154 0.573567 7.86667 0.611331L0.2 3.94466C0.0785815 3.99766 6.82525e-05 4.11752 0 4.25V5.25C0 5.43409 0.149238 5.58333 0.333333 5.58333H15.6667C15.8508 5.58333 16 5.43409 16 5.25V4.25C15.9999 4.11752 15.9214 3.99766 15.8 3.94466Z"
                  fill="white"
                />
                <path
                  d="M11.5002 9.58331H4.8335C4.55735 9.58331 4.3335 9.80717 4.3335 10.0833C4.3335 10.3595 4.55735 10.5833 4.8335 10.5833H11.5002C11.7763 10.5833 12.0002 10.3595 12.0002 10.0833C12.0002 9.80717 11.7763 9.58331 11.5002 9.58331V9.58331Z"
                  fill="white"
                />
                <path
                  d="M11.5002 11.9167H4.8335C4.55735 11.9167 4.3335 12.1405 4.3335 12.4167C4.3335 12.6928 4.55735 12.9167 4.8335 12.9167H11.5002C11.7763 12.9167 12.0002 12.6928 12.0002 12.4167C12.0002 12.1405 11.7763 11.9167 11.5002 11.9167Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3333 14.0833C15.7015 14.0833 16 14.3818 16 14.75C16 15.1182 15.7015 15.4166 15.3333 15.4166H0.666667C0.298477 15.4166 0 15.1182 0 14.75C0 14.3818 0.298477 14.0833 0.666667 14.0833H1C1.18409 14.0833 1.33333 13.9341 1.33333 13.75V6.91665C1.33333 6.73255 1.48257 6.58331 1.66667 6.58331H14.3333C14.5174 6.58331 14.6667 6.73255 14.6667 6.91665V13.75C14.6667 13.9341 14.8159 14.0833 15 14.0833H15.3333ZM4 8.24998C3.63181 8.24998 3.33333 8.54846 3.33333 8.91665V13.75C3.33333 13.9341 3.48257 14.0833 3.66667 14.0833H12.6667C12.8508 14.0833 13 13.9341 13 13.75V8.91665C13 8.54846 12.7015 8.24998 12.3333 8.24998H4Z"
                  fill="white"
                />
              </svg>{' '}
              {propertyDetail.props.amentities}
            </span>
            <span
              className="w-1/3 text-center border rounded-r-md p-2 flex justify-center items-center gap-2"
              style={{
                borderColor: 'rgba(255, 251, 251, 0.35)',
                borderLeftWidth: '1px',
                borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                borderRightWidth: '1px',
                borderRightColor: 'rgba(255, 251, 251, 0.35)',
                color: '#fff',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g clip-path="url(#clip0_514_1587)">
                  <path
                    d="M1.41667 2.83333C2.19907 2.83333 2.83333 2.19907 2.83333 1.41667C2.83333 0.634263 2.19907 0 1.41667 0C0.634263 0 0 0.634263 0 1.41667C0 2.19907 0.634263 2.83333 1.41667 2.83333Z"
                    fill="white"
                  />
                  <path
                    d="M1.41667 17C2.19907 17 2.83333 16.3657 2.83333 15.5833C2.83333 14.8009 2.19907 14.1666 1.41667 14.1666C0.634263 14.1666 0 14.8009 0 15.5833C0 16.3657 0.634263 17 1.41667 17Z"
                    fill="white"
                  />
                  <path
                    d="M15.5832 2.83333C16.3656 2.83333 16.9998 2.19907 16.9998 1.41667C16.9998 0.634263 16.3656 0 15.5832 0C14.8008 0 14.1665 0.634263 14.1665 1.41667C14.1665 2.19907 14.8008 2.83333 15.5832 2.83333Z"
                    fill="white"
                  />
                  <path
                    d="M2.12516 0.708374H0.708496V16.2917H2.12516V0.708374Z"
                    fill="white"
                  />
                  <path
                    d="M16.2918 0.708374H0.708496V2.12504H16.2918V0.708374Z"
                    fill="white"
                  />
                  <path
                    opacity="0.5"
                    d="M16.2918 14.3629V0.708374H14.8752V14.3629C14.6627 14.4869 14.487 14.6625 14.363 14.875H0.708496V16.2917H14.363C14.6088 16.7139 15.06 17 15.5835 17C16.3655 17 17.0002 16.3654 17.0002 15.5834C17.0002 15.0606 16.714 14.6087 16.2918 14.3629Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_514_1587">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>{' '}
              {propertyDetail.props.size} sq ft
            </span>
          </div>
          <div className="mt-10 p-6">
            <div>
              <h1 className="text-[#1DAEFF] font-medium text-xl mb-2">
                Description
              </h1>
              <p
                style={{ color: 'rgba(255, 251, 251, 0.75)' }}
                className="font-normal leading-7 mb-10 text-md"
              >
                {propertyDetail.props.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L5 6.8L1.8 4.3C1.4 3.9 0.7 3.9 0.3 4.3C-0.1 4.7 -0.1 5.4 0.3 5.9L3.7 10.5C4.1 10.8 4.6 11 5.1 11C5.6 11 6.1 10.8 6.5 10.5L13.8 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z"
                  fill="#1DAEFF"
                />
              </svg>
              <span className="text-gray-300">
                {propertyDetail.props.address
                  ? 'State'
                  : propertyDetail.props.address}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L5 6.8L1.8 4.3C1.4 3.9 0.7 3.9 0.3 4.3C-0.1 4.7 -0.1 5.4 0.3 5.9L3.7 10.5C4.1 10.8 4.6 11 5.1 11C5.6 11 6.1 10.8 6.5 10.5L13.8 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z"
                  fill="#1DAEFF"
                />
              </svg>
              <span className="text-gray-300">
                {propertyDetail.props.address
                  ? 'City'
                  : propertyDetail.props.address}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  d="M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L5 6.8L1.8 4.3C1.4 3.9 0.7 3.9 0.3 4.3C-0.1 4.7 -0.1 5.4 0.3 5.9L3.7 10.5C4.1 10.8 4.6 11 5.1 11C5.6 11 6.1 10.8 6.5 10.5L13.8 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z"
                  fill="#1DAEFF"
                />
              </svg>
              <span className="text-gray-300">
                {propertyDetail.props.address
                  ? 'Street Address'
                  : propertyDetail.props.address}
              </span>
            </div>
            <div className="mt-4">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                    >
                      <span>Whatch Address</span>
                      <FontAwesomeIcon
                        icon={faChevronCircleDown}
                        className={`${
                          open ? 'text-orange-300' : 'text-orange-300/70'
                        }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/3 top-[-20px] z-10 mt-20 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            <span className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  State: {propertyDetail.props.address.state}
                                </p>
                                <p className="text-sm text-gray-500">
                                  City: {propertyDetail.props.address.city}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Street Address:{' '}
                                  {propertyDetail.props.address.streetAddress}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Zip Code:{' '}
                                  {propertyDetail.props.address.zipCode}
                                </p>
                              </div>
                            </span>
                          </div>

                          <div className="bg-gray-50 p-4 flex gap-3">
                            {user && (
                              <>
                                <button
                                  type="button"
                                  className="flow-root rounded-md px-6 py-2 bg-gray-300 hover:text-white transition duration-150 ease-in-out hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                >
                                  <span className="text-gray-900">Edit</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(propertyDetail.props.id, propertyDetail.props.agentName)}
                                  className="flow-root bg-red-600 rounded-md px-6 py-2 transition duration-150 ease-in-out hover:bg-red-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                >
                                  <span className="text-white">Delete</span>
                                </button>
                              </>
                            )}
                            {!user && (
                              <h1>
                                Detailed Address is only available for logged in
                              </h1>
                            )}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <div className="mt-10 mb-20 p-6">
            <h1 className="text-[#1DAEFF] font-medium text-xl mb-2">
              Property Video
            </h1>
            <img
              src={propertyDetail.props.images}
              alt=""
              style={{
                width: '100%',
                height: '400px',
                borderRadius: '0.625rem',
              }}
            />
          </div>
          <div className="mt-20 mb-20">
            <Map title="Kosova" subtitle="Testing" />
          </div>
        </div>
      )}
    </>
  );
}

export default PropertyDetailCard;
