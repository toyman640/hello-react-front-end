import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/store/reducer/greetSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.message.message);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchRandomGreeting())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors here if needed
        console.error('Error:', error);
      });
  }, [dispatch]);

  if (isLoading) {
    return <p>greeting...</p>;
  }

  return (
    <div>
      <h1>{greet}</h1>
    </div>
  );
};

export default Greeting;
