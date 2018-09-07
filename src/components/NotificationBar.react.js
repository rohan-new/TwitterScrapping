import React, { Component } from 'react';


class NotificationBar extends React.Component{
    render(){
      var count = this.props.count;
      return (
        <div className={"notification-bar" + (count > 0 ? ' active' : '')}>
          <p>There are {count} new tweets! <a href="#top" onClick={this.props.onShowNewTweets}>Click here to see them.</a></p>
        </div>
      )
    }
  };

  export default NotificationBar;