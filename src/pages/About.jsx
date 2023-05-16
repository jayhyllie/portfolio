import React from "react";
import style from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <section className={style.about} id="about">
        <section className={style.about__section}>
          <section className={style.about__left}>
            <figure className={style.about__figure}>
              <figcaption className={style.about__caption}>
                Me, Myself & I
              </figcaption>
            </figure>
          </section>
          <section className={style.about__right}>
            <p>
              Since I was a kid I always been{" "}
              <span className={style.purple}>creative</span> and{" "}
              <span className={style.purple}>curious</span> to try new stuff.
              When I was 8 I started to sing & dance, this followed me through
              my time in school, and ended up to be my profession for{" "}
              <span className={style.purple}>10+</span> years.<br></br>
              <br></br>
              During all those years I've always been curious about building &
              designing application. So when Covid hit, I decided to really dig
              into Front-End Development. It landed me a job in 2021 as a{" "}
              <span className={style.purple}>
                Implementation Specialist
              </span>{" "}
              for E-commerce. So my day to day have been to work with HTML & CSS
              for 2 years.<br></br>
              <br></br>
              Fall of 2022 I took decision to learn more, so I applied to
              Front-End Developer education at Folkuniversitetet in Gothenburg.
              <br></br>
              <br></br>
              I've found my calling...
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
