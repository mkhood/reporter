import { Component } from 'react';

function miliToMinAndSec(timeValue) {
    let sec = Math.floor(timeValue / 1000);
    let hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
  
    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
  
    if (hrs > 0) {
      min = '' + min;
      min = ('00' + min).substring(min.length);
      return hrs + ":" + min + ":" + sec;
    }
    else {
      return min + ":" + sec;
    }
  }

  class TimeConverter extends Component {

    render() {
    
        const { timeValue } = this.props
    
        return (
        miliToMinAndSec(timeValue)
        )
    }
}

export default TimeConverter