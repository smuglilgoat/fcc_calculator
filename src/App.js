import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card border='light' bg='dark' style={{ width: '12em' }}>
            <Card.Body>
              <Container>
                <Row>
                  <Form.Control id="display" disabled className='col'></Form.Control>
                </Row>
                <Row>
                  <Button className='col' id="seven">7</Button>
                  <Button className='col' id="eight">8</Button>
                  <Button className='col' id="nine">9</Button>
                  <Button className='col' id="divide">/</Button>
                </Row>
                <Row>
                  <Button className='col' id="four">4</Button>
                  <Button className='col' id="five">5</Button>
                  <Button className='col' id="six">6</Button>
                  <Button className='col' id="multiply">*</Button>
                </Row>
                <Row>
                  <Button className='col' id="one">1</Button>
                  <Button className='col' id="two">2</Button>
                  <Button className='col' id="three">3</Button>
                  <Button className='col' id="subtract">-</Button>
                </Row>
                <Row>
                  <Button className='col' id="zero">0</Button>
                  <Button className='col' id="decimal">.</Button>
                  <Button className='col' id="clear" variant='danger'>C</Button>
                  <Button className='col' id="add">+</Button>
                </Row>
                <Row>
                  <Button className='col' id="equals">=</Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
