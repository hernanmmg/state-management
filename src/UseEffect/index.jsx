import { useEffect, useState } from 'react';

const UseEffect = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        console.log(t);
        return t + 1
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (<>
    <div>{time}</div>
  </>);
}

export default UseEffect;