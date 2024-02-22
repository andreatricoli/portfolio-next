import icons from '@/icons';
import jobHistory from '../../../public/data/job_history.json';
import Section from '../layout/section/Section';
import Button from '../ui/button/Button';
import Icon from '../ui/icon/Icon';
import classes from './SectionExperiences.module.css';

export default function SectionExperiences() {
  return (
    <Section
      className={classes.SectionExperiences__container}
      backgroundColor="--primaryColor3"
      color="--primaryColor1"
      //   height="100vh"
    >
      <div className={classes.SectionExperiences__left}>
        <div className={classes.SectionExperiences__timeline}>
          {/* <a
            href="#show"
            className={`${classes.show} ${classes.btn}`}
            id="show"
          >
            Show more
          </a>
          <a
            href="#hide"
            className={`${classes.hide} ${classes.btn}`}
            id="hide"
          >
            Hide
          </a> */}
          <h1 className={classes.SectionExperiences__title}>My Experiences.</h1>
          {/* <div className={classes.panel}> */}
          {jobHistory.map((job, index) => (
            <div
              key={index}
              className={classes.SectionExperiences__timelineCard}
            >
              <div className={classes.SectionExperiences__timelineCardInfo}>
                <div className={classes.SectionExperiences__timelineCardTitle}>
                  <Icon icon={icons.APARTMENT} />
                  {job.companyName}
                </div>

                <div className={classes.SectionExperiences__timelineCardDate}>
                  <Icon icon={icons.DATE_RANGE} />
                  {job.jobPeriod}
                </div>
                <div className={classes.SectionExperiences__timelineCardRole}>
                  <Icon icon={icons.ENGINEERING} />
                  {job.jobRole}
                </div>
                <div
                  className={classes.SectionExperiences__timelineCardLocation}
                >
                  <Icon icon={icons.LOCATION_ON} />
                  {job.jobMode} {job.jobLocation ? '- ' + job.jobLocation : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className={classes.fade}></div> */}
        {/* </div> */}
      </div>
      <div className={classes.SectionExperiences__right}>
        <div className={classes.SectionExperiences__downloadCV}>
          <p className={classes.SectionExperiences__findOutMoreTitle}>
            Find out more.
          </p>
          <p>Look at my experiences and all my skills</p>
          <Icon icon={icons.DOWNLOAD} fontSize="40px" color="--primaryColor3" />
          <Button
            text="DOWNLOAD MY CV"
            style="secondary"
            href="https://drive.google.com/file/d/1JAlad4amD5jHaxfiFrPo3grIQaNUVJ67/view"
            target="_blank"
          />
        </div>
      </div>
    </Section>
  );
}
