
import React, { useState } from 'react';
import { USERS } from '../../constants/info-users';

const CardUser = () => {
  const [userList, setUserList] = useState(0);
  const userNext = () => {
   if (userList < USERS.length -1){
      setUserList(userList +1)
   }
  };
  const userPrev = () => {
   if (userList > 0){
      setUserList(userList -1)
   }
  };

  const currentUser = USERS[userList]

  return (
    <div>
		<img src={currentUser.profileImage} />
      <h1>Nombre: {currentUser.title} {currentUser.name} </h1>
      <p>Nombre de usuario: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <button onClick={userPrev} disabled={userList===0}>Previous</button>
      <button onClick={userNext}  disabled={userList === USERS.length - 1}>Next</button>
    </div>
  );
};

export default CardUser;
