import React, { useEffect, useState } from "react";
import style from "../styles/Skills.module.scss";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("../../skills.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, [setData]);
  return (
    <>
    <section className={style.skills} id="skills">
    <ul>
      {data &&
        data.length > 0 &&
        data.map((skill, i) => <SkillsCard skill={skill} key={i} />)}
    </ul>
    </section>
    </>
  );
};

export default Skills;
