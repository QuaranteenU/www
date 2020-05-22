import React from "react";
import styled, { withTheme } from "styled-components";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import scheduleRows from "../data/SchoolScheduleRows";
const session1Rows = [
  ["2020-05-22T09:00:00Z", "Australian National University"],
  ["2020-05-22T09:00:30Z", "Boston University (Session 1)"],
  ["2020-05-22T09:01:00Z", "Monash University"],
  ["2020-05-22T09:01:30Z", "The University of Queensland, Australia"],
  ["2020-05-22T09:02:00Z", "University of Melbourne"],
  ["2020-05-22T09:03:00Z", "University of Sydney"],
  ["2020-05-22T09:04:00Z", "University of Technology Sydney"],
  ["2020-05-22T09:04:30Z", "St Clare's Oxford"],
  ["2020-05-22T09:05:00Z", "University of Nottingham"],
  ["2020-05-22T09:05:30Z", "Ashoka University"],
  ["2020-05-22T09:07:00Z", "Forman Christian College"],
  ["2020-05-22T09:07:30Z", "Indian Institute of Foreign Trade"],
  ["2020-05-22T09:08:00Z", "University of the Arts London"],
  ["2020-05-22T09:08:30Z", "Bilkent University"],
  ["2020-05-22T09:09:30Z", "Middle East Technical University"],
  ["2020-05-22T09:10:00Z", "American University in Cairo"],
  ["2020-05-22T09:10:30Z", "King's College London, University of London"],
  ["2020-05-22T09:11:00Z", "Manchester University"],
  ["2020-05-22T09:12:00Z", "The Paris Institute of Political Studies"],
  ["2020-05-22T09:12:30Z", "University of Bristol"],
  ["2020-05-22T09:13:00Z", "University of Kent"],
  ["2020-05-22T09:13:30Z", "University of Strathclyde"],
  ["2020-05-22T09:15:00Z", "Imperial College London"],
  ["2020-05-22T09:15:30Z", "Quaranteen University"],
];
const session2Rows = [
  ["2020-05-22T18:45:00Z", "COMMENCEMENT SPEECH"],
  ["2020-05-22T19:00:00Z", "Brown University"],
  ["2020-05-22T19:02:00Z", "Quaranteen University"],
  ["2020-05-22T19:15:30Z", "Boston University (Session 2)"],
  ["2020-05-22T19:25:30Z", "New York University"],
  ["2020-05-22T19:31:00Z", "Ohio State University, Columbus"],
  ["2020-05-22T19:31:30Z", "Point Park University"],
  ["2020-05-22T19:32:00Z", "State University of New York at Canton"],
  ["2020-05-22T19:33:00Z", "The City University of New York"],
  ["2020-05-22T19:34:00Z", "William Peace University"],
  ["2020-05-22T19:35:00Z", "Alfred University"],
  ["2020-05-22T19:35:30Z", "Amherst College"],
  ["2020-05-22T19:36:00Z", "Appalachian State University"],
  ["2020-05-22T19:36:30Z", "Babson College"],
  ["2020-05-22T19:37:00Z", "Bishop's University"],
  ["2020-05-22T19:38:00Z", "Boston College"],
  ["2020-05-22T19:39:00Z", "Carnegie Mellon University"],
  ["2020-05-22T19:41:30Z", "Champlain College"],
  ["2020-05-22T19:42:00Z", "Colby College"],
  ["2020-05-22T19:42:30Z", "Colgate University"],
  [
    "2020-05-22T19:43:00Z",
    "Cooper Union for the Advancement of Science and Art",
  ],
  ["2020-05-22T19:43:30Z", "Cornell University"],
  ["2020-05-22T19:45:30Z", "Drexel University"],
  ["2020-05-22T19:46:00Z", "Duke University"],
  ["2020-05-22T19:48:00Z", "Eastern Kentucky University"],
  ["2020-05-22T19:48:30Z", "Eastern Michigan University"],
  ["2020-05-22T19:49:00Z", "Ecole Supérieure d'Electricité"],
  ["2020-05-22T19:49:30Z", "Embry-Riddle Aeronautical University"],
  ["2020-05-22T19:50:00Z", "Emerson College"],
  ["2020-05-22T19:51:00Z", "Florida Atlantic University"],
  ["2020-05-22T19:51:30Z", "Florida State University"],
  ["2020-05-22T19:53:00Z", "Fordham University"],
  ["2020-05-22T19:53:30Z", "Illinois Institute of Technology"],
  ["2020-05-22T19:54:00Z", "Ivey Business School"],
  ["2020-05-22T19:54:30Z", "Johns Hopkins University"],
  ["2020-05-22T19:57:00Z", "Lafayette College"],
  ["2020-05-22T19:57:30Z", "Laurentian University of Sudbury"],
  ["2020-05-22T19:58:00Z", "Lehigh University"],
  ["2020-05-22T19:58:30Z", "Liberty University"],
  ["2020-05-22T19:59:30Z", "Macalester College"],
  ["2020-05-22T20:00:00Z", "Middlebury College"],
  ["2020-05-22T20:01:00Z", "New College, Oxford"],
  ["2020-05-22T20:01:30Z", "North Carolina State University"],
  ["2020-05-22T20:02:00Z", "Northeastern University"],
  ["2020-05-22T20:06:00Z", "Northern Michigan University"],
  ["2020-05-22T20:06:30Z", "Oakland University"],
  ["2020-05-22T20:07:00Z", "Pennsylvania State University"],
  ["2020-05-22T20:07:30Z", "Princeton University"],
  ["2020-05-22T20:09:00Z", "Purdue University"],
  ["2020-05-22T20:10:30Z", "Ramapo College"],
  ["2020-05-22T20:11:00Z", "Rensselaer Polytechnic Institute"],
  ["2020-05-22T20:13:30Z", "Roger Williams University"],
  ["2020-05-22T20:14:00Z", "Rowan University"],
  ["2020-05-22T20:15:00Z", "Rutgers University"],
  ["2020-05-22T20:19:00Z", "Rutgers University, Newark"],
  ["2020-05-22T20:22:30Z", "Savannah College of Art and Design"],
  ["2020-05-22T20:23:00Z", "Simmons College"],
  ["2020-05-22T20:24:00Z", "Smith College"],
  ["2020-05-22T20:25:30Z", "State University of New York at Binghamton"],
  ["2020-05-22T20:26:30Z", "Stonehill College"],
  ["2020-05-22T20:27:00Z", "Suffolk University"],
  ["2020-05-22T20:27:30Z", "Swarthmore College"],
  ["2020-05-22T20:28:00Z", "The Ailey School"],
  ["2020-05-22T20:28:30Z", "The College of William and Mary"],
  ["2020-05-22T20:29:30Z", "The Ohio State University"],
  ["2020-05-22T20:30:00Z", "Towson University"],
  ["2020-05-22T20:31:00Z", "Tufts University"],
  ["2020-05-22T20:31:30Z", "University of Connecticut"],
  ["2020-05-22T20:32:00Z", "University of Delaware"],
  ["2020-05-22T20:33:00Z", "University of Florida"],
  ["2020-05-22T20:34:30Z", "University of Guelph"],
  ["2020-05-22T20:35:00Z", "University of Illinois at Chicago"],
  ["2020-05-22T20:35:30Z", "University of Kentucky"],
  ["2020-05-22T20:36:00Z", "University of Maryland"],
  ["2020-05-22T20:37:30Z", "University of Massachusetts at Lowell"],
  ["2020-05-22T20:38:00Z", "University of Michigan - Ann Arbor"],
  ["2020-05-22T20:43:30Z", "University of North Carolina at Asheville"],
  ["2020-05-22T20:44:00Z", "University of North Carolina at Chapel Hill"],
  ["2020-05-22T20:46:30Z", "University of Notre Dame"],
  ["2020-05-22T20:47:00Z", "University of Pittsburgh"],
  ["2020-05-22T20:48:00Z", "University of Puget Sound"],
  ["2020-05-22T20:48:30Z", "University of Rochester"],
  ["2020-05-22T20:49:30Z", "University of Tennessee, Knoxville"],
  ["2020-05-22T20:50:00Z", "University of Waterloo"],
  ["2020-05-22T20:54:30Z", "Vassar College"],
  [
    "2020-05-22T20:56:00Z",
    "Virginia Polytechnic Institute and State University",
  ],
  ["2020-05-22T20:58:30Z", "Washington University, Saint Louis"],
  ["2020-05-22T20:59:00Z", "Wayne State University"],
  ["2020-05-22T20:59:30Z", "Wellesley College"],
  ["2020-05-22T21:00:30Z", "Wingate University"],
  ["2020-05-22T21:01:00Z", "Yale University"],
  ["2020-05-22T21:02:00Z", "American University"],
  ["2020-05-22T21:03:00Z", "Arizona State University"],
  ["2020-05-22T21:05:00Z", "Austin Community College"],
  ["2020-05-22T21:05:30Z", "Brandeis University"],
  ["2020-05-22T21:07:00Z", "Carthage College"],
  ["2020-05-22T21:07:30Z", "Case Western Reserve University"],
  ["2020-05-22T21:09:00Z", "Cleveland Institution of Music"],
  ["2020-05-22T21:09:30Z", "Columbia University"],
  ["2020-05-22T21:11:00Z", "Dartmouth College"],
  ["2020-05-22T21:11:30Z", "Dominican University"],
  ["2020-05-22T21:12:00Z", "Emory University"],
  ["2020-05-22T21:13:30Z", "Georgia Institute of Technology"],
  ["2020-05-22T21:14:30Z", "Grinnell College"],
  ["2020-05-22T21:15:00Z", "Harvard University"],
  ["2020-05-22T21:15:30Z", "Illinois State University"],
  ["2020-05-22T21:16:00Z", "Iowa State University"],
  ["2020-05-22T21:16:30Z", "Loyola University New Orleans"],
  ["2020-05-22T21:17:00Z", "Missouri Western State University"],
  ["2020-05-22T21:19:00Z", "Northern Illinois University"],
  ["2020-05-22T21:19:30Z", "Northwestern University"],
  ["2020-05-22T21:22:00Z", "Oberlin College"],
  ["2020-05-22T21:24:00Z", "The University of Texas"],
  ["2020-05-22T21:24:30Z", "University of Arkansas - Fayetteville"],
  ["2020-05-22T21:25:00Z", "University of Chicago"],
  ["2020-05-22T21:26:30Z", "University of Illinois at Urbana-Champaign"],
  ["2020-05-22T21:30:30Z", "University of Iowa"],
  ["2020-05-22T21:31:00Z", "University of Minnesota - Twin Cities"],
  ["2020-05-22T21:32:00Z", "University of Missouri"],
  ["2020-05-22T21:33:00Z", "University of North Texas"],
  ["2020-05-22T21:33:30Z", "University of Oklahoma"],
  ["2020-05-22T21:34:00Z", "University of Pennsylvania"],
  ["2020-05-22T21:35:00Z", "University of Texas at Austin"],
  ["2020-05-22T21:40:00Z", "University of Toronto"],
  ["2020-05-22T21:44:30Z", "Vanderbilt University"],
  ["2020-05-22T21:45:00Z", "Colorado State University"],
  ["2020-05-22T21:45:30Z", "Massachusetts Institute of Technology"],
  ["2020-05-22T21:46:30Z", "Mount Royal University"],
  ["2020-05-22T21:47:00Z", "Regis University"],
  ["2020-05-22T21:47:30Z", "The University of Arizona"],
  ["2020-05-22T21:48:00Z", "University of Alberta"],
  ["2020-05-22T21:49:30Z", "University of Colorado at Boulder"],
  ["2020-05-22T21:50:00Z", "University of Denver"],
  ["2020-05-22T21:51:00Z", "Arizona Western College"],
  ["2020-05-22T21:51:30Z", "California Northstate University"],
  [
    "2020-05-22T21:52:00Z",
    "California Polytechnic State University, San Luis Obispo",
  ],
  ["2020-05-22T21:53:30Z", "California State University Channel Islands"],
  ["2020-05-22T21:54:00Z", "California State University, Bakersfield"],
  ["2020-05-22T21:54:30Z", "California State University, Fullerton"],
  ["2020-05-22T21:55:00Z", "California State University, Los Angeles"],
  ["2020-05-22T21:55:30Z", "California State University, Northridge"],
  ["2020-05-22T21:56:30Z", "Chapman University"],
  ["2020-05-22T21:57:00Z", "Claremont McKenna College"],
  ["2020-05-22T21:57:30Z", "DigiPen Institute of Technology"],
  ["2020-05-22T21:58:30Z", "Franciscan University of Steubenville"],
  ["2020-05-22T21:59:00Z", "George Fox University"],
  ["2020-05-22T21:59:30Z", "Gonzaga University"],
  ["2020-05-22T22:00:00Z", "Harvey Mudd College"],
  ["2020-05-22T22:00:30Z", "Minerva Schools at the Keck Graduate Institution"],
  ["2020-05-22T22:01:00Z", "Mt. San Antonio College"],
  ["2020-05-22T22:01:30Z", "Pacific Lutheran University"],
  ["2020-05-22T22:02:00Z", "Reed College"],
  ["2020-05-22T22:02:30Z", "Saint Mary's College of California"],
  ["2020-05-22T22:03:00Z", "San Diego State University"],
  ["2020-05-22T22:04:00Z", "San Jose State University"],
  ["2020-05-22T22:07:00Z", "Santa Clara University"],
  ["2020-05-22T22:07:30Z", "Stanford University"],
  ["2020-05-22T22:09:00Z", "The University of Auckland"],
  ["2020-05-22T22:09:30Z", "The University of British Columbia"],
  ["2020-05-22T22:10:00Z", "University of British Columbia"],
  ["2020-05-22T22:11:00Z", "University of California, Berkeley"],
  ["2020-05-22T22:27:00Z", "University of California, Davis"],
  ["2020-05-22T22:28:30Z", "University of California, Irvine"],
  ["2020-05-22T22:31:00Z", "University of California, Los Angeles"],
  ["2020-05-22T22:35:00Z", "University of California, San Diego"],
  ["2020-05-22T22:43:30Z", "University of California, Santa Barbara"],
  ["2020-05-22T22:45:30Z", "University of California, Santa Cruz"],
  ["2020-05-22T22:47:00Z", "University of Southern California"],
  ["2020-05-22T22:52:00Z", "University of Washington"],
  ["2020-05-22T22:57:30Z", "Wharton School of the University of Pennsylvania"],
  ["2020-05-22T22:58:00Z", "Willamette University"],
  ["2020-05-22T22:58:30Z", "Williams College"],
  ["2020-05-22T22:59:30Z", "Lewis & Clark College"],
];

const ToggleButton = withTheme(styled(Button)`
  height: 100%;
  width: 100%;
  text-align: left;

  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
  }
`);

const SchoolScheduleTable = withTheme(styled.table`
  font-family: "Libre Baskerville", serif;
  background-color: ${props => props.theme.global.subpanel};

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

const SSCardHeader = withTheme(styled(Card.Header)`
  background-color: ${props => props.theme.global.panel};
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

class SchoolSchedule extends React.Component {
  render() {
    let session1TableContents, session2TableContents;

    if (this.props.usingUTC) {
      session1TableContents = session1Rows.map(element => (
        <tr>
          <td>{element[1]}</td>
          <td>
            {formatDayOfWeek(new Date(element[0]), true)},{" "}
            {formatAMPM(new Date(element[0]), true)}
          </td>
        </tr>
      ));
      session2TableContents = session2Rows.map(element => (
        <tr>
          <td>{element[1]}</td>
          <td>
            {formatDayOfWeek(new Date(element[0]), true)},{" "}
            {formatAMPM(new Date(element[0]), true)}
          </td>
        </tr>
      ));
    } else {
      session1TableContents = session1Rows.map(element => (
        <tr>
          <td>{element[1]}</td>
          <td>
            {formatDayOfWeek(new Date(element[0]), false)},{" "}
            {formatAMPM(new Date(element[0]), false)}
          </td>
        </tr>
      ));
      session2TableContents = session2Rows.map(element => (
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
      <>
        <Accordion>
          <SSCard>
            <SSCardHeader>
              <Accordion.Toggle as={ToggleButton} variant="link" eventKey="0">
                Session 1: Europe, Asia, Africa, and Oceania
              </Accordion.Toggle>
            </SSCardHeader>
            <Accordion.Collapse eventKey="0">
              <div style={{ margin: "15px 35px" }}>
                <SchoolScheduleTable>
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Start Time</th>
                    </tr>
                  </thead>
                  <tbody>{session1TableContents}</tbody>
                </SchoolScheduleTable>
              </div>
            </Accordion.Collapse>
          </SSCard>

          <SSCard>
            <SSCardHeader>
              <Accordion.Toggle as={ToggleButton} variant="link" eventKey="1">
                Session 2: Americas
              </Accordion.Toggle>
            </SSCardHeader>
            <Accordion.Collapse eventKey="1">
              <div style={{ margin: "15px 35px" }}>
                <SchoolScheduleTable>
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Start Time</th>
                    </tr>
                  </thead>
                  <tbody>{session2TableContents}</tbody>
                </SchoolScheduleTable>
              </div>
            </Accordion.Collapse>
          </SSCard>
        </Accordion>
      </>
    );
  }
}

export default SchoolSchedule;
