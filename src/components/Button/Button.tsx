import React, {FC} from "react";
import styles from "./Button.module.scss";
import styled from "styled-components";
import {TButtonProps} from "../../types";

const Button: FC<TButtonProps> = (props?) => {
    const {width, height, visible, caption} = props;
    const style = props ? {width: width + 'px', height: height + 'px', display: 'inline-block' ? '' : 'none'} : undefined;

    return (

        <button className={styles.button} style={style}>{caption}</button>
    );
};
export default Button;