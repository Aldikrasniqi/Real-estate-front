import React, { useState, useEffect } from 'react';

import { getPublicContent } from '@/services/user-service';
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
    <>
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    </>
  );
};

export default Home;