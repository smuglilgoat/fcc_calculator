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
    this.state = {
      result: '0'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (e.target.id) {
      case 'zero':
        this.state.result === '0' ? this.setState({ result: '0' }) : this.setState({ result: this.state.result + '0' })
        break;
      case 'one':
        this.state.result === '0' ? this.setState({ result: '1' }) : this.setState({ result: this.state.result + '1' })
        break;
      case 'two':
        this.state.result === '0' ? this.setState({ result: '2' }) : this.setState({ result: this.state.result + '2' })
        break;
      case 'three':
        this.state.result === '0' ? this.setState({ result: '3' }) : this.setState({ result: this.state.result + '3' })
        break;
      case 'four':
        this.state.result === '0' ? this.setState({ result: '4' }) : this.setState({ result: this.state.result + '4' })
        break;
      case 'five':
        this.state.result === '0' ? this.setState({ result: '5' }) : this.setState({ result: this.state.result + '5' })
        break;
      case 'six':
        this.state.result === '0' ? this.setState({ result: '6' }) : this.setState({ result: this.state.result + '6' })
        break;
      case 'seven':
        this.state.result === '0' ? this.setState({ result: '7' }) : this.setState({ result: this.state.result + '7' })
        break;
      case 'eight':
        this.state.result === '0' ? this.setState({ result: '8' }) : this.setState({ result: this.state.result + '8' })
        break;
      case 'nine':
        this.state.result === '0' ? this.setState({ result: '9' }) : this.setState({ result: this.state.result + '9' })
        break;
      case 'divide':
        if (/[+*/]/gm.test(this.state.result.at(-1)))
          this.setState({ result: this.state.result.slice(0, -1) + '/' })
        else
          /[+\-*/][+\-*/]/gm.test(this.state.result) ? this.setState({ result: this.state.result.slice(0, -2) + '/' }) : this.setState({ result: this.state.result + '/' })
        break;
      case 'multiply':
        if (/[+*/]/gm.test(this.state.result.at(-1)))
          this.setState({ result: this.state.result.slice(0, -1) + '*' })
        else
          /[+\-*/][+\-*/]/gm.test(this.state.result) ? this.setState({ result: this.state.result.slice(0, -2) + '*' }) : this.setState({ result: this.state.result + '*' })
        break;
      case 'add':
        if (/[+*/]/gm.test(this.state.result.at(-1)))
          this.setState({ result: this.state.result.slice(0, -1) + '+' })
        else
          /[+\-*/][+\-*/]/gm.test(this.state.result) ? this.setState({ result: this.state.result.slice(0, -2) + '+' }) : this.setState({ result: this.state.result + '+' })
        break;
      case 'subtract':
        if (/-/gm.test(this.state.result.at(-1)))
          this.setState({ result: this.state.result.slice(0, -1) + '-' })
        else
          this.setState({ result: this.state.result + '-' })
        break;
      case 'clear':
        this.setState({ result: '0' })
        break;
      case 'decimal':
        this.state.result.includes('.') && !/[+\-*/]/gm.test(this.state.result) ? this.setState({ result: this.state.result }) : this.setState({ result: this.state.result + '.' })
        break;
      case 'equals':
        this.setState({ result: String(eval(this.state.result)) })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card border='light' bg='dark' style={{ width: '12em' }}>
            <Card.Body>
              <Container>
                <Row>
                  <Form.Control id="display" disabled className='col' value={this.state.result}></Form.Control>
                </Row>
                <Row>
                  <Button className='col' id="seven" onClick={this.handleClick}>7</Button>
                  <Button className='col' id="eight" onClick={this.handleClick}>8</Button>
                  <Button className='col' id="nine" onClick={this.handleClick}>9</Button>
                  <Button className='col' id="divide" variant='secondary' onClick={this.handleClick}>/</Button>
                </Row>
                <Row>
                  <Button className='col' id="four" onClick={this.handleClick}>4</Button>
                  <Button className='col' id="five" onClick={this.handleClick}>5</Button>
                  <Button className='col' id="six" onClick={this.handleClick}>6</Button>
                  <Button className='col' id="multiply" variant='secondary' onClick={this.handleClick}>*</Button>
                </Row>
                <Row>
                  <Button className='col' id="one" onClick={this.handleClick}>1</Button>
                  <Button className='col' id="two" onClick={this.handleClick}>2</Button>
                  <Button className='col' id="three" onClick={this.handleClick}>3</Button>
                  <Button className='col' id="subtract" variant='secondary' onClick={this.handleClick}>-</Button>
                </Row>
                <Row>
                  <Button className='col' id="zero" onClick={this.handleClick}>0</Button>
                  <Button className='col' id="decimal" variant='secondary' onClick={this.handleClick}>.</Button>
                  <Button className='col' id="clear" variant='danger' onClick={this.handleClick}>C</Button>
                  <Button className='col' id="add" variant='secondary' onClick={this.handleClick}>+</Button>
                </Row>
                <Row>
                  <Button className='col' id="equals" onClick={this.handleClick}>=</Button>
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
