import Styles from "./css modules/Button.module.css";

function Button({ text }) {
    return <button type="button" className={Styles.btn}>{text}</button>;
}

export default Button;
