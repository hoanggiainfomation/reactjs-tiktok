import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  primary = false,
  outline = false,
  href,
  children,
  small = false,
  lager = false,
  text = false,
  disable,
  className,
  onClick,
  rounded = false,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // remove event listener when btn is disabled
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    lager,
    text,
    disable,
    rounded,
    leftIcon,
    rightIcon,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("leftIcon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("rightIcon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
