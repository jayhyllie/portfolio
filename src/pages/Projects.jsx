import React from "react";
import style from "../styles/Projects.module.scss";
import space from "../assets/spaceFront.jpeg";
import sunny from "../assets/sunnyside.jpg";
import todo from "../assets/todo.png";
import where from "../assets/whereitsat.png";

const Projects = () => {
  return (
    
    <section className={style.projects} id="projects">
      <div className={style.projects__grid}>
        <a
          href="https://space-tourism-by-js.netlify.app/"
          className={style.card} target="_blank"
        >
          <img src={space} alt="space" className={style.card__image} />
          <h2>Space Tourism &rarr;</h2>
          <div className={style.card__langList}>
            <span className={style.html}>HTML</span>
            <span className={style.css}>CSS</span>
            <span className={style.js}>JavaScript</span>
          </div>
        </a>

        <a href="https://where-its-at-by-js.netlify.app" className={style.card} target="_blank">
          <img src={where} alt="where" className={style.card__image} />
          <h2>Where It's At &rarr;</h2>
          <div className={style.card__langList}>
            <span className={style.react}>React</span>
            <span className={style.css}>CSS</span>
          </div>
        </a>

        <a href="https://todo-app-by-js.netlify.app" className={style.card} target="_blank">
          <img src={todo} alt="todo" className={style.card__image} />
          <h2>ToDo App &rarr;</h2>
          <div className={style.card__langList}>
            <span className={style.html}>HTML</span>
            <span className={style.css}>CSS</span>
            <span className={style.js}>JavaScript</span>
          </div>
        </a>

        <a
          href="https://sunnyside-landing-page-by-js.netlify.app"
          className={style.card} target="_blank"
        >
          <img src={sunny} alt="sunny" className={style.card__image} />
          <h2>Sunnyside Landing Page &rarr;</h2>
          <div className={style.card__langList}>
            <span className={style.html}>HTML</span>
            <span className={style.css}>CSS</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
