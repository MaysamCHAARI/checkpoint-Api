import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const cardList = ({ listOfUser }) => {
  return (
    <div>
      <div>
        <CardGroup
          style={{
            width: "30% !important",
            margin: "10px",
          }}
        >
          <Card>
            <Card.Header>{listOfUser.name}</Card.Header>
            <Card.Body>
              <Card.Title>{listOfUser.email} </Card.Title>
              <Card.Text>{listOfUser.username}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        {/* <Card
          className="bdark text-white"
          style={{ display: "flex", flexdirection: "column" }}
        >
          <Card.ImgOverlay>
            <Card.Title>{listOfUser.name}</Card.Title>
            <Card.Text>{listOfUser.adress}</Card.Text>
            <Card.Text>{listOfUser.email}</Card.Text>
          </Card.ImgOverlay>
        </Card> */}
      </div>
    </div>
  );
};

export default cardList;
