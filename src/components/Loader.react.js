import React, { Component } from 'react';
 
 class Loader extends React.Component{
    render(){
      return (
        <div className={"loader " + (this.props.paging ? "active" : "")}>
          <img src="svg/loader.svg" />
        </div>
      )
    }
  }
 
  export default Loader;