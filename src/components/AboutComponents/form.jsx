import React, { Component } from 'react';


const ContactForm = () => {
    return(
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/evanallen13@gmail.com" target='_blank' rel="noopener noreferrer" method="post">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <fieldset id="fs-frm-inputs">
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input>
                            <input type="email" name="_replyto" id="email-address" placeholder="Email" required=""></input>
                            <textarea rows="5" name="message" id="message" placeholder="Message" required=""></textarea>
                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                            </fieldset>
                        <input type="submit" value="Submit"></input>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;