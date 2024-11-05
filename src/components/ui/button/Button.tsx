import classNames from "classnames";
import styles from "./Button.module.scss";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset";
  switchColors?: boolean;
  height?: string;
  minWidth?: string;
  onClick: () => void;
};

export default function Button(props: Props) {
  const {
    text = "",
    type = "button",
    switchColors = false,
    height = "55px",
    minWidth = "fit-content",
    onClick = () => {},
  } = props;

  return (
    <button
      type={type}
      style={{ height, minWidth }}
      className={classNames(styles.button, { [styles.black]: switchColors })}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
