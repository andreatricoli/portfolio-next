import classes from './Icon.module.css';

type IconProps = {
  icon: string;
  fontSize?: string;
  color?: string;
};

export default function Icon(props: IconProps) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: props.fontSize, color: `var(${props.color})` }}
    >
      {props.icon}
    </span>
  );
}
