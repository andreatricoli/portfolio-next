import Image from 'next/image';
import atFacebook from '../../../public/assets/icons/at_facebook.svg';
import atInstagram from '../../../public/assets/icons/at_instagram.svg';
import atLinkedin from '../../../public/assets/icons/at_linkedin.svg';
import Section from '../layout/section/Section';
import classes from './SectionSocial.module.css';

export default function SectionSocial() {
  return (
    <Section
      className={classes.SectionSocial__container}
      backgroundColor="--primaryColor1"
      color="--primaryColor4"
      //   height="100vh"
    >
      <h1 className={classes.SectionSocial__title}>Follow Me.</h1>
      <p>We also stay in touch on Social Networks.</p>
      <div className={classes.SectionSocial__followIcons}>
        <a href="https://www.instagram.com/andrea.tricoli/" target="_blank">
          <Image
            width={100}
            className={classes.SectionSocial__homeSocialsIcon}
            src={atInstagram}
            alt="at_instagram.svg"
          />
        </a>
        <a href="https://www.facebook.com/andrea.tricoli91" target="_blank">
          <Image
            width={100}
            className={classes.SectionSocial__homeSocialsIcon}
            src={atFacebook}
            alt="at_facebook.svg"
          />
        </a>
        <a href="https://www.linkedin.com/in/andrea-tricoli" target="_blank">
          <Image
            width={100}
            className={classes.SectionSocial__homeSocialsIcon}
            src={atLinkedin}
            alt="at_linkedin.svg"
          />
        </a>
      </div>
      <p>© 2024 Andrea Tricoli</p>
      <p>Powered by Andrea Tricoli</p>
    </Section>
  );
}
