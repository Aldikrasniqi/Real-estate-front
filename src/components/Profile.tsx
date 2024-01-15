import React from 'react';
import { getCurrentUser } from '../services/auth-service';
import ConnectButton from './ConnectButton';
import useBalance from '../hooks/useBalance';
// @ts-ignore
const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
  console.log(currentUser);
  const balance = useBalance();
  console.log(balance);
  if (!balance) {
    // Handle the case when balance is still undefined
    return <div>Loading...</div>  // Or return some placeholder;
  }

  return (
    <h1>test</h1>
    // <div className="container w-11/12 mx-auto mt-4">
    //   <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
    //     <div className="px-4 py-5 sm:px-6 flex justify-between">
    //       <div>
    //         <h3 className="text-lg leading-6 font-medium text-gray-900">
    //           {currentUser.username}'s Profile
    //         </h3>
    //         <p className="mt-1 max-w-2xl text-sm text-gray-500">
    //           Details and informations about user.
    //         </p>
    //       </div>
    //       <div>
    //         {/* {!adress ? <ConnectButton /> : <h1>Adress: {adress}</h1>} */}
    //         <ConnectButton />
    //       </div>
    //     </div>
    //     <div className="border-t border-gray-200">
    //       <dl>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Full name</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    //             Aldi Krasniqi
    //           </dd>
    //         </div>
    //         <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Roles</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    //             {currentUser.roles &&
    //               currentUser.roles.map((role: string, index: number) => (
    //                 <li key={index}>{role}</li>
    //               ))}
    //           </dd>
    //         </div>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">
    //             Email address
    //           </dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    //             {currentUser.username}
    //           </dd>
    //         </div>
    //         <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Salary</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    //             $10,000
    //           </dd>
    //         </div>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Account type</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    //                 {/* @ts-ignore */}
    //                 {balance.typeOfAccount}
    //           </dd>
    //         </div>
    //         <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Balance</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    //                 {/* @ts-ignore */}
    //             {balance.address}
    //           </dd>
    //         </div>
    //       </dl>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;
