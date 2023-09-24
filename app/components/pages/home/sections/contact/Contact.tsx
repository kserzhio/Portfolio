import React, { useState } from 'react';
import styles from './Contact.module.scss';
import cn from 'classnames';
const Contact = () => {
  // Define state variables to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Add other form fields here
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can perform actions with the form data here, like sending it to a server
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        setEmailSent(true);
        // Handle success (e.g., show a success message)
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <section id='contact' className={styles.contact}>
      <div className='container'>
        <div className={styles['contact__row']}>
          <div className={styles['contact__left']}>
            <div className={styles['contact__heading']}>
              <p
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='100'
                className='aos-init aos-animate'
              >
                Contact
              </p>
              <h2
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='200'
                className='aos-init aos-animate'
              >
                REACH OUT ME
              </h2>
            </div>
            <div className={styles['contact__info']}>
              <ul>
                <li
                  data-aos='fade-up'
                  data-aos-duration='800'
                  data-aos-delay='400'
                  className='aos-init aos-animate'
                >
                  <div className={styles['contact__info__icon']}>
                    <svg
                      aria-hidden='true'
                      role='img'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill='currentColor'
                        d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2z'
                      ></path>
                    </svg>
                  </div>
                  <div className={styles['contact__info__text']}>
                    <label>Chat to us</label>
                    <p>
                      Our friendly team is there to help.
                      <br />
                      <span>
                        <a
                          className='text-reset'
                          href='mailto:kserzhio@gmail.com'
                        >
                          kserzhio@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </li>
                <li
                  data-aos='fade-up'
                  data-aos-duration='800'
                  data-aos-delay='400'
                  className='aos-init aos-animate'
                >
                  <div className={styles['contact__info__icon']}>
                    <svg
                      aria-hidden='true'
                      role='img'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                    >
                      <g fill='currentColor'>
                        <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'></path>
                        <path d='M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z'></path>
                      </g>
                    </svg>
                  </div>
                  <div className={styles['contact__info__text']}>
                    <label>Call me</label>
                    <p>380687100550</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['contact__right']}>
            {emailSent ? (
              <p>Email sent successfully!</p>
            ) : (
              <div
                data-aos='fade-left'
                data-aos-duration='800'
                data-aos-delay='1000'
                className={cn(styles['contact__form'], 'aos-init aos-animate')}
              >
                <div className={styles['contact__form__head']}>
                  <h4>Got Ideas? We have got the skills. Lets team up.</h4>
                  <p>
                    Tell us more about yourself and what you are got in mind.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className={styles['form']}>
                  <div className={styles['form__row']}>
                    <div className={styles['form__item']}>
                      <label htmlFor='name'>FIRST NAME:</label>
                      <input
                        type='text'
                        id='name'
                        placeholder='Name *'
                        className={styles['form__control']}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles['form__item']}>
                      <label htmlFor='email'>YOUR EMAIL:</label>
                      <input
                        type='email'
                        id='email'
                        placeholder='Email *'
                        className={styles['form__control']}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='subject'>Subject:</label>
                    <input
                      type='text'
                      id='subject'
                      value={formData.subject}
                      className={styles['form__control']}
                      placeholder='Subject *'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='subject'>YOUR MESSAGE:</label>
                    <textarea
                      id='message'
                      value={formData.message}
                      placeholder='Your message *'
                      className={styles['form__control']}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type='submit'
                      className={cn(styles['form__btn'], 'btn')}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
