import React from 'react'
import styled from 'styled-components'

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
`

const FormControl = styled.div`
  display: flex;
  flex-direction:column;
  box-sizing: border-box;
  width: 40%;
  margin-bottom: 12px;
  @media (max-width: 699px) {
      width: 55%;
  }
`

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #f1f1f1;
  border-radius: 2px;
  padding: 3px 6px;
  font-size: 14px;
  margin-top: 3px;
  background: transparent;
  &:focus {
    border-bottom: none;
    padding: 5px 8px;
    outline-color: azure;
  }
`

const FormTextArea = styled.textarea`
  border-radius: 5px;
  padding: 3px 6px;
  font-size: 14px;
  margin-top: 3px;
  background: transparent;
  border: 1px solid #f1f1f1;
  &:focus {
    padding: 5px 8px;
    outline-color: azure;
  }
`

const FormLabel = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`

const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid white;
  background: transparent;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    padding: ${({ isDisabled }) => isDisabled ? '8px' : '10px'};
    font-size: ${({ isDisabled }) => isDisabled ? '16px' : '18px'}
  }
`

const Text = styled.p`
  @media (max-width: 699px) {
      max-width: 230px;
      text-align: center
  }
`

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        detail: ''
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        const { name, email, detail } = this.state
        const disabled = !name || !email || !detail
        return (
            <Container>
                <h2>Contact</h2>
                <Text>{this.props.contact}</Text>
                <form 
                    name="contact" 
                    method="post" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <FormControl>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <FormInput 
                            type='text' 
                            id='name' 
                            name='name' 
                            value={name} 
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
                            value={email} 
                            placeholder='example@example.com'
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='detail'>Detail</FormLabel>
                        <FormTextArea 
                            type='text' 
                            id='detail' 
                            name='detail' 
                            value={detail} 
                            placeholder='Something so good!'
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        isDisabled={disabled}
                        disabled={disabled}
                    >
                    Send
                    </Button>
                </form>
            </Container>
        ) 
    }
}

export default Contact