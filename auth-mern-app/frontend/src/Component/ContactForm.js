import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import '../Component/Contact.css'; // Adjust path if needed

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.error(e);
      setDisabled(false);
    }
  };

  return (
    <center>
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Please enter your name'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                      />
                      {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      />
                      {errors.email && (
                        <span className="errorMessage">Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Please enter the subject'
                          },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                      />
                      {errors.subject && (
                        <span className="errorMessage">{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        {...register('message', {
                          required: true
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <span className="errorMessage">Please enter your message</span>
                      )}
                    </div>
                  </div>
                  <button className="submit-btn" disabled={disabled} type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default ContactForm;
