import React from "react";
import styled, { withTheme } from "styled-components";
import Card from "react-bootstrap/Card";

// import scheduleRows from "../data/SchoolScheduleRows";
const rows = [
  ["2020-05-30T16:00:00Z", "Colegio San Agustin - Makati"],
  ["2020-05-30T16:00:30Z", "Diocesan Girls’ School"],
  ["2020-05-30T16:01:00Z", "Immaculate Conception Academy"],
  ["2020-05-30T16:02:00Z", "University of Asia and the Pacific"],
  ["2020-05-30T16:02:30Z", "Yos Sudarso Catholic High School"],
  ["2020-05-30T16:03:00Z", "Hornsey School for Girls"],
  ["2020-05-30T16:04:00Z", "Westwood High School"],
  ["2020-05-30T16:04:30Z", "A Y Jackson Secondary School"],
  ["2020-05-30T16:05:00Z", "Academies at Englewood"],
  ["2020-05-30T16:05:30Z", "Arlington Catholic High School"],
  ["2020-05-30T16:06:00Z", "Belmont High School"],
  ["2020-05-30T16:06:30Z", "Brooklyn Technical High School"],
  ["2020-05-30T16:07:00Z", "Central Catholic High School"],
  ["2020-05-30T16:07:30Z", "Chandler Park Academy"],
  ["2020-05-30T16:08:00Z", "Comstock Park High School"],
  ["2020-05-30T16:09:00Z", "Detroit Country Day School"],
  ["2020-05-30T16:09:30Z", "East Coweta High School"],
  ["2020-05-30T16:10:30Z", "East Hampton High School"],
  ["2020-05-30T16:11:00Z", "Ferndale High School"],
  ["2020-05-30T16:11:30Z", "Harding University High School"],
  ["2020-05-30T16:12:00Z", "Lawton Chiles High School"],
  ["2020-05-30T16:12:30Z", "NMH"],
  ["2020-05-30T16:13:00Z", "Newton South High School"],
  ["2020-05-30T16:14:00Z", "North Meck High School"],
  ["2020-05-30T16:14:30Z", "Port Charlotte High School"],
  ["2020-05-30T16:15:00Z", "Robinson Secondary School"],
  ["2020-05-30T16:15:30Z", "Syosset High School"],
  ["2020-05-30T16:16:00Z", "The Mary Louis Academy"],
  ["2020-05-30T16:16:30Z", "Quaranteen University Academy"],
  ["2020-05-30T16:21:30Z", "Western Albemarle High School"],
  ["2020-05-30T16:22:00Z", "William Mason High School "],
  ["2020-05-30T16:22:30Z", "William Mason Highschool"],
  ["2020-05-30T16:23:00Z", "Ateneo de Manila Senior High "],
  ["2020-05-30T16:23:30Z", "Brookfield Academy"],
  ["2020-05-30T16:24:00Z", "Choate Rosemary Hall"],
  ["2020-05-30T16:24:30Z", "Clements High School"],
  ["2020-05-30T16:25:00Z", "Illinois Math and Science Academy"],
  ["2020-05-30T16:25:30Z", "Kickapoo High School"],
  [
    "2020-05-30T16:26:00Z",
    "Kinder High School for the Performing and Visual Arts",
  ],
  ["2020-05-30T16:27:00Z", "North Bay Haven Charter Academy"],
  ["2020-05-30T16:28:00Z", "Taipei American School"],
  ["2020-05-30T16:28:30Z", "Texas Academy of Mathematics and Science"],
  ["2020-05-30T16:29:30Z", "Vandegrift High School"],
  ["2020-05-30T16:30:00Z", "William P. Clements High School"],
  ["2020-05-30T16:30:30Z", "Bishop Carroll High School"],
  ["2020-05-30T16:31:00Z", "Hunting Hills High School "],
  ["2020-05-30T16:31:30Z", "Mountain View High School "],
  ["2020-05-30T16:32:00Z", "BCSS"],
  ["2020-05-30T16:33:00Z", "Bishop Garcia Diego High School"],
  ["2020-05-30T16:33:30Z", "Canyon Crest Academy"],
  ["2020-05-30T16:34:00Z", "Chief Sealth International High School"],
  ["2020-05-30T16:34:30Z", "Cupertino High School"],
  ["2020-05-30T16:35:00Z", "Del Norte High School"],
  ["2020-05-30T16:36:30Z", "Everett High School"],
  ["2020-05-30T16:37:00Z", "Garden Grove High School"],
  ["2020-05-30T16:37:30Z", "Henry M. Gunn High School"],
  ["2020-05-30T16:39:30Z", "Heritage Woods Secondary"],
  ["2020-05-30T16:40:00Z", "Irvington High School"],
  ["2020-05-30T16:41:00Z", "Marin Catholic High School"],
  ["2020-05-30T16:41:30Z", "Mission San Jose High School "],
  ["2020-05-30T16:42:00Z", "Orchard View High School"],
  ["2020-05-30T16:42:30Z", "Pacific Grove High School"],
  ["2020-05-30T16:43:00Z", "Piedmont High School"],
  ["2020-05-30T16:43:30Z", "Robert A. McMath Secondary"],
  ["2020-05-30T16:44:00Z", "San Juan Hills High School"],
  ["2020-05-30T16:44:30Z", "South Sutter Charter School"],
  ["2020-05-30T16:45:00Z", "Temple City High School"],
  ["2020-05-30T16:45:30Z", "Tesoro High School"],
  ["2020-05-30T16:46:30Z", "Tesoro High School "],
  ["2020-05-30T16:47:00Z", "Walnut High School"],
  ["2020-05-30T16:47:30Z", "Windsor High School"],
];

const SchoolScheduleTable = withTheme(styled.table`
  font-family: "Libre Baskerville", serif;
  background-color: ${props => props.theme.global.subpanel};

  & th {
    ${props =>
      props.theme.isDark && "border-bottom: 1px solid hsla(0, 0%, 100%, 0.12)"}
  }

  & td {
    ${props =>
      props.theme.isDark && "border-bottom: 1px solid hsla(0, 0%, 100%, 0.12)"}
  }

  & tr th:nth-child(2) {
    text-align: right;
  }

  & tr td:nth-child(2) {
    text-align: right;
  }
`);

const SSCard = withTheme(styled(Card)`
  background-color: ${props => props.theme.global.subpanel};
`);

// Takes in a number 0-6 and returns the corresponding day.
function formatDayOfWeek(date, useUTC) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (useUTC) {
    return days[date.getUTCDay()];
  }
  return days[date.getDay()];
}

// Returns the time part of a date with am/pm attached.
function formatAMPM(date, useUTC) {
  let hours, minutes, seconds, ampm;

  if (useUTC) {
    hours = date.getUTCHours();
    minutes = date.getUTCMinutes();
    seconds = date.getUTCSeconds();
  } else {
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
  }

  ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds + " " + ampm;
}

class AcademySchoolSchedule extends React.Component {
  render() {
    let tableContents;

    if (this.props.usingUTC) {
      tableContents = rows.map(element => (
        <tr>
          <td>{element[1]}</td>
          <td>
            {formatDayOfWeek(new Date(element[0]), true)},{" "}
            {formatAMPM(new Date(element[0]), true)}
          </td>
        </tr>
      ));
    } else {
      tableContents = rows.map(element => (
        <tr>
          <td>{element[1]}</td>
          <td>
            {formatDayOfWeek(new Date(element[0]), false)},{" "}
            {formatAMPM(new Date(element[0]), false)}
          </td>
        </tr>
      ));
    }

    return (
      <React.Fragment>
        <SSCard>
          <div style={{ margin: "15px 35px" }}>
            <SchoolScheduleTable>
              <thead>
                <tr>
                  <th>School</th>
                  <th>Start Time</th>
                </tr>
              </thead>
              <tbody>{tableContents}</tbody>
            </SchoolScheduleTable>
          </div>
        </SSCard>
      </React.Fragment>
    );
  }
}

export default AcademySchoolSchedule;
