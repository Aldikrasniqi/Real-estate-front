import { Link } from 'react-router-dom';
import Aldi from '../common/AldiiResized.jpg';
import Taulant from '../common/Taulant.jpeg';
const Developers: React.FC = () => {
  const developers = [
    {
      name: 'Aldi Krasniqi',
      description:
        'Front End Developer at Homeverse.io who loves to build web applications, focusing on technologies like React, TypeScript, and GraphQL.',
      image: Aldi,
      github: 'https://github.com/Aldikrasniqi',
    },
    {
      name: 'Taulant Avdiu',
      description:
        'Back End Developer at Homeverse.io who loves to build web applications, focusing on technologies like Java Springboot and databases like postgres.',
      image: Taulant,
      github: 'https://github.com/avdiutaulant',
    },
  ];
  return (
    <>
      <div className="flex  mx-auto max-w-screen-xl space-x-4 flex-wrap mt-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={developers[0].github}>
            <img className="rounded-t-lg" src={Aldi} alt="" />
          </Link>
          <div className="p-5">
            <span>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {developers[0].name}
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {developers[0].description}
            </p>
            <Link
              to={developers[0].github}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={developers[1].github}>
            <img className="rounded-t-lg" src={developers[1].image} alt="" />
          </Link>
          <div className="p-5">
            <Link to={developers[1].github}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {developers[1].name}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {developers[1].description}
            </p>
            <Link
              to={developers[1].github}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Developers;
