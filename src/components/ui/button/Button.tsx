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
      className={[styles.button, switchColors && styles.black].filter((el) => el).join(" ")}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
