import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
  return (
    <div className='container'>
      <h1>Crate Post</h1>
      <PostCreate />
      <hr/>
      <h1>Post List</h1>
      <PostList />
    </div>
  );
};

export default App;
