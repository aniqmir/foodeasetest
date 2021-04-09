import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const services = [
  { name: "Pick-Up" },
  { name: "Dine In" },
  { name: "Delivery" },
];
const otherInformation = [
  { name: "Wheelchair available " },

  { name: " Kids play area" },
  { name: "Rocking chair" },
  { name: " Washroom " },
  { name: "Nappy changing room " },
  { name: "Family sitting area" },
  { name: " Boys sitting area" },
  { name: " Smoking allowed " },
  { name: "No smoking allowed" },
  { name: "Only Ac's" },
  { name: "Reversible Ac's" },
  { name: "Outdoor sitting" },
  { name: "Indoor sitting" },
  { name: "Rooftop view" },
  { name: "Lift available " },
  { name: "Accepts Debit/Credit cards" },
  { name: " Environment friendly " },
  { name: " Free wifi available" },
  { name: "Offers sanitizer" },
  { name: "Mobile Charging facility " },
];
const SubmissionForm = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="name" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Please Enter name of your Restaurant"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="address" sm={2}>
          Address
        </Label>
        <Col sm={10}>
          <Input
            type="address"
            name="address"
            id="address"
            placeholder="Please Enter Address of your Restaurant"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="Phone" sm={2}>
          Phone
        </Label>
        <Col sm={10}>
          <Input
            type="phone"
            name="Phone"
            id="phone"
            placeholder="Please Enter Phone of your Restaurant"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="average-cost" sm={2}>
          Average Cost
        </Label>
        <Col sm={10}>
          <Input
            name="Average Cost"
            id=""
            placeholder="Please Enter Average Cost of your Restaurant"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Cuisines Offered
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="cusines"
            id="cuisines"
            placeholder="Cuisines offered"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Select
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>
          Select Multiple
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleFile" sm={2}>
          File
        </Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="checkbox2" sm={2}>
          Services
        </Label>
        <Col sm={{ size: 10 }}>
          {services.map((item, index) => (
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />
                {item.name}
              </Label>
            </FormGroup>
          ))}
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="checkbox2" sm={2}>
          Other Information
        </Label>
        <Col sm={{ size: 10 }}>
          {otherInformation.map((items, index) => (
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />
                {items.name}
              </Label>
            </FormGroup>
          ))}
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default SubmissionForm;
