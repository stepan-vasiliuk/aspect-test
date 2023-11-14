import {TComplexPanelProps} from "../../types";
import styles from "./PanelComplex.module.scss";
import Button from "../Button/Button";
import React, {FC} from "react";
import Panel from "../Panel/Panel";
import {v4 as uuid} from "uuid";

const PanelComplex: FC<TComplexPanelProps> = (
    {width, height, visible, content}) => {

    return (
        <>
            <div className={styles.complexPanel} style={{
                width: width + "px", height: height + "px",
                display: visible ? "flex" : "none"
            }}>
                {content && content.map((element) => {
                    if (element.type === "button") {
                        return (
                            <Button
                                key={uuid()}
                                caption={element.props.caption!}
                                width={element.props.width!}
                                height={element.props.height!}
                                visible={element.props.visible!}
                            />
                        );
                    }
                    if (element.type === "label") {
                        return (
                            <div key={uuid()} className={styles.label}>
                                <span>{element.props.caption}</span>
                            </div>
                        );
                    }
                    if (element.type === "panel") {
                        return (
                            <Panel
                                key={uuid()}
                                width={element.props.width!}
                                height={element.props.height!}
                                visible={element.props.visible!}
                                externalClass={styles.externalClass}
                            />
                        );
                    }
                })}
            </div>
        </>
    );
};

export default PanelComplex;