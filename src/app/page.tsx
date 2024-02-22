import SectionMain from '@/components/section-main/SectionMain';
import classes from './page.module.css';
import SectionAbout from '@/components/section-about/SectionAbout';
import SectionExperiences from '@/components/section-experiences/SectionExperiences';
import SectionProjects from '@/components/section-projects/SectionProjects';
import SectionContact from '@/components/section-contact/SectionContact';
import SectionSocial from '@/components/section-social/SectionSocial';

export default function HomePage() {
  return (
    <div className={classes.container}>
      <SectionMain />
      <SectionAbout />
      <SectionExperiences />
      <SectionProjects />
      <SectionContact />
      <SectionSocial />
    </div>
  );
}
