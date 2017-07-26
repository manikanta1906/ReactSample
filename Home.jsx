import React from 'react';
import Links from './Links.jsx';
import HomeContent from './HomeContent.jsx';

class Home extends React.Component {
   render() {
      return (
     <div><Links></Links>
         <HomeContent></HomeContent></div>
      )
   }
}
export default Home;