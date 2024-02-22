import classes from './Button.module.css';

type ButtonProps = {
  text: string;
  style: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline';
  href?: string;
  target?: string;

  //   backgroundColor: string;
  //   borderColor: string;
  //   onClick: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <>
      {!props.href && (
        <button className={`${classes.button} ${classes[props.style]}`}>
          {props.text}
        </button>
      )}
      {props.href && (
        <a
          className={`${classes.button} ${classes[props.style]}`}
          href={props.href}
          target={props.target}
        >
          {props.text}
        </a>
      )}
    </>
  );
}
