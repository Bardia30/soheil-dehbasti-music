import { useRef } from "react";
import Input from "../Input/Input";
import './Contact.scss';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                alert("Your Message Has Been Sent! We will contact you shortly.")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact">
            <section className="contact__left">
                <h3 className="contact__title">Contact Us</h3>
                <p className="contact__paragraph">Ready to embark on your musical journey? Contact us for any inquiries, to arrange a free consultation session, or to get more information about our classes. Our team is here to guide you through every step, from selecting the right course to answering all your questions. Reach out today and take the first step towards realizing your musical aspirations!</p>
            </section>
            <form onSubmit={sendEmail} ref={form} className="contact__form" action="submit">
                <Input name="user_name" isTextArea={false} type="text" placeholder="enter your name..." />
                <Input name="user_email" isTextArea={false} type="email" placeholder="enter your email..." />
                <Input name="message" isTextArea={true} placeholder="enter your message..." />
                <button type="submit" className="contact__submit">submit</button>
            </form>
        </div>
    )
}

export default Contact