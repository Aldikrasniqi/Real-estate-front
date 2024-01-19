import React, { useState, useEffect } from 'react';
import { useAgent } from '../hooks/useAgents';
import { Link, useParams } from 'react-router-dom';
import { updateAgent } from '../services/agent-service';
// @ts-ignore
type LoginProps = {};

const Agents: React.FC<LoginProps> = () => {
  // get the id from param
  const { id } = useParams();
  const idToNumber = Number(id);
  const agent = useAgent(idToNumber);
  const [name, setName] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [agentId, setAgentId] = useState<number>(0);
  useEffect(() => {
    if (agent) {
      setName(agent.name || '');
      setContactInfo(agent.contactInfo || '');
      setEmail(agent.email || '');
      setRating(agent.rating || '');
      setAgentId(agent.id);
    }
  }, [agent]);
  console.log(agent);
  const handleEditAgent = (e: any) => {
    e.preventDefault();
    const agent = {
      id: agentId,
      name,
      contactInfo,
      email,
      rating,
    };
    // console.log(agent);
    updateAgent(agent).then(
      () => {
        alert('You have successfully updated an agent!');
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

  if (!agent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex mx-auto max-w-screen-lg flex-col">
        <h1 className="text-4xl m-4 font-bold">Infos</h1>
        <form
          className="w-full max-w-screen-lg mt-10 p-4 mx-auto"
          onSubmit={handleEditAgent}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Contact Info
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={contactInfo}
                onChange={(e) => {
                  setContactInfo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Test@test.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                >
                  <option>FIVE_STARS</option>
                  <option>FOUR_STARS</option>
                  <option>THREE_STARS</option>
                  <option>TWO_STARS</option>
                  <option>ONE_STAR</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
// @ts-ignore
export default Agents;
