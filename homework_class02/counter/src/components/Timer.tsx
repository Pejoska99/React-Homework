import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(1);

  useEffect(() => {

    //овде componentDidMount --deka efektot kje se izvrsi ednas , po prvoto renderiranje
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);


    // ovde componentWillUnmount -- deka ova funkcija za cistenje kje se izvrsi koga use 'useefect' kje treba potorno da se izvrsi poradi promena na zvisnosti
    return () => clearInterval(timer);
  }, []);

//    useEffect(() => {
//     //componentDidMount
//     console.log('Time updated:',time)
//    },[time])
// ova samo pecati poraki vo konzolata pri promena na 'time', logikata i funkcionalnosta moze i bez nego

  const resetTimer = () => {
    setTime(1);
  };

  return (
    <div id="timer-container">
      <div id="timer">{time}</div>
      <button id="reset-button" onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
