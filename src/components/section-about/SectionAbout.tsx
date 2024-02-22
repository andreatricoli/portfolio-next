import Image from 'next/image';
import atAboutPhoto from '../../../public/assets/images/at_about_photo.jpg';
import Section from '../layout/section/Section';
import classes from './SectionAbout.module.css';

export default function SectionAbout() {
  return (
    <Section
      className={classes.SectionAbout__container}
      backgroundColor="--primaryColor4"
      color="--primaryColor1"
      //   height="100vh"
    >
      <div className={classes.SectionAbout__left}>
        <Image
          className={classes.SectionAbout__photo}
          src={atAboutPhoto}
          alt="at_about_photo.png"
        />
      </div>
      <div className={classes.SectionAbout__right}>
        <div>
          <h1 className={classes.SectionAbout__title}>About Me.</h1>
          <p className={classes.SectionAbout__aboutText}>
            Hi, I&apos;m Andrea Tricoli.<br></br>
            <br></br>I was born in Portogruaro (VE), but I lived my childhood in
            a small village, San Stino di Livenza (VE).<br></br>
            <br></br>At the age of 12 I moved to Sicily in Caltanissetta (CL),
            where I attended the last year of middle school and high school
            years. During these years I began to get more and more passionate
            about the world of development, so at the age of 19 I decided to
            move to Pisa to attend the faculty of Computer Engineering. There I
            tried many experiences and met fantastic people. <br></br>
            <br></br>After completing my studies, I moved to Milan, where I
            started working as a Web Developer.<br></br>
            <br></br> Today I&apos;m a full remote developer with 5+ years of
            experience in real Projects.<br></br>
            <br></br> Aside from my tech enthusiasm I like traveling and looking
            for new adventures, practicing sports, taking pictures of nature and
            challenging myself with new experiences.
          </p>
        </div>
      </div>
    </Section>
  );
}
