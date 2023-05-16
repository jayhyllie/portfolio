import style from '../styles/Skills.module.scss';

function SkillsCard({ skill }) {
  return (
    <aside className={style.skills__card}>
      <h5 className={style.skills__title}>
        <span className={`${skill.color}`}>{skill.name}</span>
      </h5>
      <img src={skill.image} alt={skill.name} className={style.skills__img} />
    </aside>
  );
}

export default SkillsCard;
