import Image from 'next/image';
import projects from '../../../public/data/projects.json';
import Section from '../layout/section/Section';
import classes from './SectionContact.module.css';
import atCoronaVirusApp from '../../../public/assets/images/at_coronavirus_app.png';

export default function SectionContact() {
  return (
    <Section
      className={classes.SectionContact__container}
      backgroundColor="--primaryColor2"
      color="--primaryColor4"
      //   height="100vh"
    >
      <h1 className={classes.SectionContact__title}>Get in touch.</h1>
      <p>From a small gesture, great things can be born.</p>
      <div className={classes.SectionContact__email}>
        <div className={classes.letterImage}>
          <a href="mailto: tricoli.andrea@gmail.com">
            <div className={classes.animatedMail}>
              <div className={classes.backFold}></div>
              <div className={classes.letter}>
                <div className={classes.letterBorder}></div>
                <div className={classes.letterTitle}></div>
                <div className={classes.letterContext}></div>
                <div className={classes.letterStamp}>
                  <div className={classes.letterStampInner}></div>
                </div>
              </div>
              <div className={classes.topFold}></div>

              <div className={classes.body}></div>

              <div className={classes.leftFold}></div>
            </div>
          </a>
          <div className={classes.shadow}></div>
        </div>
        <div className={classes.SectionContact__emailMessage}>
          <p style={{ fontWeight: 'bold' }}>
            Click on the magic letter to send me an email
          </p>
          <p>tricoli.andrea@gmail.com</p>
        </div>
      </div>
    </Section>
  );
}
