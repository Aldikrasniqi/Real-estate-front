import React, { useState, useEffect } from 'react';
import Header from '../layouts/Header';
import About from '../components/About';
import Map from '../components/Map';
import { getPublicContent } from '../services/user-service';
import Contact from '../components/Contact';
import Footer from '../layouts/Footer';
import FilterCards from '../components/FilterCards';
// @ts-ignore
const Home: React.FC = () => {
   
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (err) => {
        const _content =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className='bg-[#000] text-white'>
      {/* welcome header */}
      <div
        className="w-full h-screen"
        style={{
          
          backgroundImage: `url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div className="flex flex-col  justify-center items-start h-full" style={{
          background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
        }}>
          <h1 className="text-7xl text-white font-bold leading-[6rem] tracking-widest w-10/12 mx-auto">
            Find Your <span className="text-[#1DAEFF]">Dream Home</span> <br />{' '}
            with Crypto
          </h1>
        </div>
      </div>
      {/* propery listing container */}
      <div>
       
          <FilterCards />

      </div>

      {/* Map Listing Neighborhood */}
      <div className='h-auto max-w-screen-xl mx-auto'>
        <Map />
      </div>
      {/* about section */}
      <div
        id="about"
        className="flex flex-col w-full justify-center items-start h-[720px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1567018955753-472cad20a0d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <About />
      </div>
      <div className='max-w-screen-xl mx-auto'>
        <Contact />
      </div>
      <div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
