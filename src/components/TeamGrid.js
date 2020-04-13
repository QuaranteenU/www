import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

import TeamImage from "./TeamImage";
import Team from "../data/Team";

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CustomCard = styled(Card)`
  width: 300px;
  margin: 25px;
`;

const MemberCard = ({ name, title, bio }) => {
  return (
    <CustomCard>
      <Card.Img variant="top" as="div">
        <TeamImage name={name.split(" ")[0]}/>
      </Card.Img>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </CustomCard>
  );
}

const TeamGrid = () => {

  return (
    <div>
      <h1>Meet the Team</h1>
      <Cards>
        {Team.map((member, i) => <MemberCard key={i} {...member} />)}
      </Cards>
    </div>
  );
}

export default TeamGrid;