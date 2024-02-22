import Section from '../layout/section/Section';
import classes from './SectionMain.module.css';
import atProfilePhoto from '../../../public/assets/images/at_profile_photo.png';
import Image from 'next/image';
import Button from '../ui/button/Button';
import Icon from '../ui/icon/Icon';
import icons from '@/icons';

export default function SectionMain() {
  return (
    <Section
      className={classes.SectionMain__container}
      backgroundColor="--primaryColor1"
      color="--primaryColor4"
      //   height="100vh"
    >
      <div className={classes.SectionMain__left}>
        <div className={classes.SectionMain__mainText}>
          <h1 className={classes.SectionMain__greeting}>
            Hi, I&apos;m{' '}
            <span className={classes.SectionMain__name}>Andrea</span>.
          </h1>
          <p className={classes.SectionMain__role}>a software developer</p>
          <p className={classes.SectionMain__description}>
            Always interested in the IT world, I undertook my studies in
            computer engineering and once completed I started mine working
            career as a front-end developer. To date, I have matured an
            experience of 6+ years and I have been lucky enough to work with
            many several projects with clients that allowed me to learn and
            deepen your knowledge of the main front-end frameworks and of the
            entire technological stack that revolves around this fantastic
            world. Every day I try to improve myself and learn new things
            skills. In my free time I like to train, travel and try new things
            experiences.
          </p>
          <div className={classes.SectionMain__buttons}>
            <Button
              text="Download CV"
              style="primary-outline"
              href="https://drive.google.com/file/d/1JAlad4amD5jHaxfiFrPo3grIQaNUVJ67/view"
              target="_blank"
            />
            <Button text="Contact me" style="secondary-outline" />
          </div>
        </div>
      </div>
      <div className={classes.SectionMain__right}>
        <Image
          className={classes.SectionMain__photo}
          src={atProfilePhoto}
          alt="at_profile_photo.png"
          priority
        />
      </div>
      <div className={classes.SectionMain__bottom}>
        <p>Find out more</p>
        <Icon
          icon={icons.EXPAND_MORE}
          fontSize="30px"
          color="--primaryColor3"
        />
      </div>
    </Section>
  );
}
