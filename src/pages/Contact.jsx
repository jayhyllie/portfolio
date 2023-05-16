import React from 'react';
import style from '../styles/Contact.module.scss';

function Contact() {
    return ( 
        <section className={style.contact} id='contact'>
            <section className={style.contact__journey}>
                <h2>Let's start a journey together</h2>
            </section>
            <section className={style.contact__info}>
                <h3>Contact Me</h3>
                <section className={style.contact__infoSection}>
                    <h4 className={style.number}>+46 70 - 887 51 06</h4>
                    <h4 className={style.mail}>joakimsundman89@gmail.com</h4>
                </section>
            </section>
        </section>
     );
}

export default Contact;