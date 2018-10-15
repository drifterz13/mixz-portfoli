import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    background: #c2d6bb;
    color: #222;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`

const FormControl = styled.div`
  display: flex;
  flex-direction:column;
  box-sizing: border-box;
  width: 45%;
  max-width: 400px;
  margin-bottom: 22px;
  @media (max-width: 699px) {
      width: 55%;
  }
`

const FormInput = styled.input`
  border: none;
  border-bottom: 3px solid #f1f1f1;
  border-radius: 7px;
  padding: 3px 6px;
  font-size: 14px;
  margin-top: 3px;
  background: transparent;
  &:focus {
    border-bottom: none;
    padding: 5px 8px;
    outline: 3px solid azure;
  }
`

const FormTextArea = styled.textarea`
  border-radius: 5px;
  padding: 3px 6px;
  font-size: 14px;
  margin-top: 3px;
  background: transparent;
  border: 3px solid #f1f1f1;
  &:focus {
    padding: 5px 8px;
    outline: 3px solid azure;
  }
`

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`

const Button = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: 2px solid white;
  background: transparent;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    outline: 3px solid azure;
  }
`

const Text = styled.p`
  font-weight: 700;
  @media (max-width: 699px) {
      max-width: 230px;
      text-align: center
  }
`

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    state = {

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/contact?no-cache=1", { // fix form submission issue
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error));
    }

    render() {
        return (
            <Container>
                <h2>Contact</h2>
                <Text>{this.props.contact}</Text>
                <FormContainer
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/thanks/"
                    onSubmit={this.handleSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don’t fill this out:{" "}
                            <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </p>
                    <FormControl>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <FormInput
                            type='text'
                            id='name'
                            name='name'
                            placeholder='John Doe'
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput
                            type='email'
                            id='email'
                            name='email'
                            placeholder='example@example.com'
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='message'>Message</FormLabel>
                        <FormTextArea
                            type='text'
                            id='message'
                            name='message'
                            placeholder='Something so good!'
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <Button type='submit'>Send</Button>
                </FormContainer>
            </Container>
        )
    }
}

export default Contact