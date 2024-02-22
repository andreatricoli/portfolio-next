import { ReactNode } from 'react';
import classes from './Section.module.css';

type SectionProps = {
  className: string;
  backgroundColor: string;
  height?: string;
  color: string;
  children: ReactNode;
};

export default function Section(props: SectionProps) {
  return (
    <div
      className={classes.section}
      style={{
        backgroundColor: `var(${props.backgroundColor})`,
        color: `var(${props.color})`,
        height: props.height,
      }}
    >
      <div className={`${classes.section__container} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
}
