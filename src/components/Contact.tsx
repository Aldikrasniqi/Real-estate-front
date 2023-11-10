const Contact: React.FC = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center lg:justify-between justify-center mx-auto w-11/12 h-full">
        <div className="lg:w-2/4">
          <h1 className="font-bold text-7xl">Did You Find Your </h1>
          <span className="text-[#1DAEFF] font-bold text-6xl">Dream Home?</span>
          <p className="text-3xl w-3/4 font-light" style={{
            color: 'rgba(255, 251, 251, 0.50)',
          }}>
            Thank you for getting in touch! if you find your dream home connect
            with us
          </p>
        </div>
        <div className="lg:w-2/5 w-full mt-16 mb-10">
          <form action="">
            <h1 className="mb-8 text-4xl">Contact us</h1>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Your name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/* interesed in */}
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#1DAEFF] text-white font-medium hover:text-white rounded-lg transition duration-300"
                  style={{ boxShadow: '0px 4px 40px 0px #1DAEFF' }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
