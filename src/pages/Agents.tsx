import React, { useState } from 'react';
import { createAgent } from '../services/agent-service';
import useAgents from '../hooks/useAgents';
import { Link } from 'react-router-dom';
import { deleteAgent } from '../services/agent-service';
// @ts-ignore
type LoginProps = {};

const Agents: React.FC<LoginProps> = () => {
  const agents = useAgents();
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropdown = (agentId: string) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [agentId]: !prevStates[agentId],
    }));
  };
  const handleDelete = (agentId: number) => () => {
    deleteAgent(agentId).then(
      () => {
        alert('You have successfully deleted an agent!');
        window.location.reload();
      },
      (err: any) => {
        const resMessage =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        alert(resMessage);
      }
    );
  };
  return (
    <>
      <div className="flex mx-auto max-w-screen-xl items-center justify-between space-x-4 flex-wrap mt-8">
        <h1 className="text-3xl font-bold">Agents</h1>

        <Link
          to={'/agents/create'}
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add More
        </Link>
      </div>
      <div className="flex mx-auto gap-4 max-w-screen-xl items-center justify-center flex-wrap mt-10">
        {agents.map((agent: any) => (
          <div
            key={agent.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                aria-label="Open dropdown"
                onClick={() => toggleDropdown(agent.id)}
                id={`dropdownButton-${agent.id}`}
                data-dropdown-toggle={`dropdown-${agent.id}`}
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              {dropdownStates[agent.id] && (
                <div
                  id={`dropdown-${agent.id}`}
                  className="z-10 text-base absolute m-8 list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2"
                    aria-labelledby={`dropdownButton-${agent.id}`}
                  >
                    <li>
                      <Link
                        to={`edit/${agent.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleDelete(agent.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://w7.pngwing.com/pngs/415/765/png-transparent-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert-moustache.png"
                alt="Image of test"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {agent.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {agent.contactInfo}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {agent.email}
              </span>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Property
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
// @ts-ignore
export default Agents;
