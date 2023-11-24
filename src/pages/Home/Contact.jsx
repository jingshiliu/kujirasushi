import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [lastFiveEmails, setLastFiveEmails] = useState(()=>{
        const lastFiveEmails = localStorage.getItem('lastFiveEmails');
        return lastFiveEmails ? JSON.parse(lastFiveEmails) : [];
    }); // [ {name: '', email: '', message: '', date}]

    const form = useRef();

    const formDataToObject = (formData) => {
        const object = {};
        for (const [key, value] of formData.entries()) {
            object[key] = value;
        }
        return object;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if(lastFiveEmails[0]['datetime'] < Date.now() - 1000 * 60 * 60 * 24){
            alert('You have sent too many emails in the past 24 hours. Please try again later.');
            return;
        }

        const formData = new FormData(form.current);
        const formDataObj = formDataToObject(formData);
        formDataObj['datetime'] = Date.now();
        const newLastFiveEmails = [formDataObj, ...lastFiveEmails];
        if(newLastFiveEmails.length > 5) newLastFiveEmails.pop();
        localStorage.setItem('lastFiveEmails', JSON.stringify(newLastFiveEmails));
        setLastFiveEmails(newLastFiveEmails);

        emailjs.sendForm('kujira', 'kujira', form.current, 'e0g2gVdQDOZhcOcAw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className={"bg-[#264653] px-20 max-lg:px-0 py-20 text-slate-600 h-fit flex justify-center items-center lg:space-x-28 max-lg:flex-col-reverse "}>
            <iframe
                className={" 2xl:w-1/3 lg:w-1/2 w-3/4"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.9168496962525!2d-79.93452498239661!3d40.45128161035593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f2111db3ddcd%3A0x1ae321dd70615799!2s736%20Bellefonte%20St%2C%20Pittsburgh%2C%20PA%2015232!5e0!3m2!1szh-CN!2sus!4v1700813959039!5m2!1szh-CN!2sus"
                width="300" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className={'2xl:w-1/3 lg:w-1/2 w-3/4 max-lg:mb-20'}>
                <h2 className={"text-slate-200 text-[50px]"}>Contact Us</h2>
                <form
                    className={`flex flex-col `}
                    ref={form} onSubmit={sendEmail}>
                    <label className={'text-slate-300'} >Name</label>
                    <input className={"appearance-none border-none outline-none focus:ring-2 focus:ring-blue-400 mb-4 px-2 py-1"}
                           type="name"
                           name="user_name"
                           required={true}
                    />

                    <label className={'text-slate-300'} >Email</label>
                    <input className={"appearance-none border-none outline-none focus:ring-2 focus:ring-blue-400 mb-4 px-2 py-1"}
                           type="email"
                           name="user_email"
                           required={true}
                    />

                    <label className={'text-slate-300'}>Message</label>
                    <textarea className={"appearance-none border-none outline-none focus:ring-2 focus:ring-blue-400 mb-4 px-2 py-1 h-[200px]"}
                              placeholder={"Hi Kujira Team, my name is..."} name="message" required={true}
                    />

                    <input className={"bg-blue-400 py-4 px-8 hover:cursor-pointer hover:bg-blue-500 text-slate-300"} type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;