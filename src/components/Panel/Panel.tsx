import styles from "./Panel.module.scss";
import {TPanelProps} from "../../types";

const Panel = (props: TPanelProps) => {
    const {width, height, visible, externalClass} = props;
    const fullClass = externalClass ? `${styles.panel} ${externalClass}` : styles.panel

    return (
        <div className={fullClass} style={{
            width: width + "px", height: height + "px",
            display: visible ? 'flex' : 'none'
        }}>
        </div>
    );
};

export default Panel;