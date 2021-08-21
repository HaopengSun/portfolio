import { useState } from "react";
import "./Contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange1 = (event) => {
    setEmail(event.target.value);
  }

  const handleChange2 = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    console.log(email);
    console.log(message);
    emailjs.sendForm('service_5cq8jnb', 'template_yrdbe9h', e.target, 'user_qBoTLA9q7oLwjp7wCoIis')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="email" onChange={handleChange1}/>
          <textarea placeholder="Message" name="message" onChange={handleChange2}></textarea>
          <button type="submit">Send</button>
          {send && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}