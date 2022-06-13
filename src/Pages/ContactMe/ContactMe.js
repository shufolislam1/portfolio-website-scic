import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4qp48jp', 'template_5wzcrbp', form.current, '9TARF6Mk_gWsZUNsJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div data-aos="zoom-in-up">
            <h2 className='grid justify-items-center font-bold text-4xl'>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} id='c'>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div>
                                <textarea name="message" placeholder='Write Your Message' class="input input-bordered" />
                            </div>
                            <div class=" mt-6">
                                <input className='btn btn-primary mx-auto' type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};