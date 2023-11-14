import styles from "./Wrapper.module.scss";
import React, {ReactNode} from "react";

type TWrapperProps = {
    children: ReactNode;
}
const Wrapper = ({children}: TWrapperProps) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};
export default Wrapper;