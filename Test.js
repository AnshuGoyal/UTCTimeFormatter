
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default class Time extends Component {
  render(){

    var stampUTC = new Date().toISOString();
    console.log("stampUTC", stampUTC);
    console.log(extractDateElements(stampUTC));

    var year = 2017;
    var month = 9;
    var date = 7;
    var hours = 3;
    var minutes = 40;
    var seconds = 32;

    var params = {
      year,
      month: month < 10 ? '0' + month : month,
      date: date < 10 ? '0' + date : date,

      hours: hours < 10 ? '0' + hours : hours, // take in 24 hours format
      minutes,
      seconds
    };

    console.log(generateUTC(params));

    console.log( new Date( generateUTC(params) ).toISOString() );

    return(
      <View style = {{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <Text style = {{ fontSize: 24 }}>Time</Text>
      </View>
    );
  }
}

function generateUTC(params){

  const { year, month, date, hours, minutes, seconds } = params;

  var makeString = year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds + "Z" ;

  return makeString;

}

function extractDateElements(stringUTC){

  var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var weekdayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  var result = [];

  var dateUTC = new Date(stringUTC);

  var year = dateUTC.getFullYear();

  var month = dateUTC.getMonth();
  month = month < 10 ? '0' + month : month ;
  var monthNameFull = mL[parseInt(month)];
  var monthNameSmall = mS[parseInt(month)];

  var date = dateUTC.getDate();

  var hours = dateUTC.getUTCHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;

  var minutes = dateUTC.getUTCMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes ;

  var seconds = dateUTC.getUTCSeconds();

  var weekNameFull = weekdayName[dateUTC.getDay()];
  var weekNameSmall = weekNameFull.slice(0,3);

  result = {
    stringUTC,
    year,
    month,
    monthNameFull,
    monthNameSmall,
    weekNameFull,
    weekNameSmall,
    date,
    hours,
    minutes,
    seconds,
    ampm
  };

  return result;
}
