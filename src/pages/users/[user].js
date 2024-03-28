import React from 'react';

const UserProfilePage = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.user}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserProfilePage;
