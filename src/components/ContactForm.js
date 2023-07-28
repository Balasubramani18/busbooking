import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import '../components/Contact.css';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="inner contact">
      <div className="contact-form">
        <form id="contact-us" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} className="wow animated slideInLeft" data-wow-delay=".5s">
              <TextField
                type="text"
                name="name"
                id="name"
                required
                className="form"
                placeholder="Name"
              />
              <TextField
                type="email"
                name="mail"
                id="mail"
                required
                className="form"
                placeholder="Email"
              />
              <TextField
                type="text"
                name="subject"
                id="subject"
                required
                className="form"
                placeholder="Subject"
              />
            </Grid>
            <Grid item xs={6} className="wow animated slideInRight" data-wow-delay=".5s">
              <TextField
                name="message"
                id="message"
                className="form textarea"
                placeholder="Message"
                multiline
              />
            </Grid>
            <Grid item xs={12} className="relative fullwidth">
              <Button type="submit" id="submit" name="submit" className="form-btn semibold">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>

        <div className="mail-message-area">
          <div className="alert gray-bg mail-message not-visible-message">
            <strong>Thank You !</strong> Your email has been delivered.
          </div>
        </div>
      </div>

      <center>
        CONTACT{' '}
        <a href="stopbus@gmail.com" target="_blank" rel="noopener noreferrer">
          stopbus@gmail.com
        </a>
      </center>
    </div>
  );
};

export default ContactForm;