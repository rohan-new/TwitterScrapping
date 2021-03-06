import React, { Component } from 'react';
 
 class Tweets extends React.Component{

    // Render our tweets
    render(){
  
      // Build list items of single tweet components using map
      var content = this.props.tweets.map(function(tweet){
        return (
          <Tweet key={tweet._id} tweet={tweet} />
        )
      });
  
      // Return ul filled with our mapped tweets
      return (
        <ul className="tweets">{content}</ul>
      )
  
    }
  
  };
  
  export default Tweets;