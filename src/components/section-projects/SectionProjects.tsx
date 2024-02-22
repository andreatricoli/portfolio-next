import Image from 'next/image';
import projects from '../../../public/data/projects.json';
import Section from '../layout/section/Section';
import classes from './SectionProjects.module.css';
import atCoronaVirusApp from '../../../public/assets/images/at_coronavirus_app.png';

export default function SectionProjects() {
  return (
    <Section
      className={classes.SectionProjects__container}
      backgroundColor="--primaryColor4"
      color="--primaryColor1"
      //   height="100vh"
    >
      <h1 className={classes.SectionProjects__title}>Projects.</h1>
      <p>Look at my projects, from theory to practice.</p>
      <div className={classes.SectionProjects__projects}>
        {projects.map((project, index) => (
          <div className={classes.SectionProjects__project} key={index}>
            <Image
              width={150}
              height={150}
              style={{
                objectFit: 'cover',
              }}
              src={project.projectImage}
              alt={project.projectName}
            />
            <p>{project.projectName}</p>
            <p>{project.projectStatus}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
