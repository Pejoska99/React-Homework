import  { useContext } from 'react';
import './UserDetails.css';
import { ThemeContext } from '../../contex/ThemeContex';

const UserDetails = () => {
  const{ theme } = useContext(ThemeContext);

  const { fullName, age, profession, from } = {
    fullName: 'Biljana Pejoska',
    age: 39,
    profession: 'FullStack Developer',
    from: 'Struga'
  };

  return (
    <div className={`user-details ${theme}`}>
      <p><strong>Full Name:</strong> {fullName}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Profession:</strong> {profession}</p>
      <p><strong>From:</strong> {from}</p>
    </div>
  );
};

export default UserDetails;
