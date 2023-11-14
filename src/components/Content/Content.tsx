import React, {FC} from "react";
import styles from "./Content.module.scss";
import Button from "../Button/Button";
import Panel from "../Panel/Panel";
import PanelComplex from "../PanelComplex/PanelComplex";
import { v4 as uuid} from 'uuid';

type TContentProps = {
    jsonData: Array<any>;
}
const Content: FC<TContentProps> = ({jsonData}) => {

    return (
        <div className={styles.content}>
            {jsonData.map((element) => {
                if (element.type === "panel") {
                    return (!element.props.content ?
                            <Panel
                                key={uuid()}
                                width={element.props.width}
                                height={element.props.height}
                                visible={element.props.visible}
                            /> :
                            <PanelComplex
                                key={uuid()}
                                width={element.props.width}
                                height={element.props.height}
                                visible={element.props.visible}
                                content={element.props.content}
                            />

                    );
                }
                if (element.type === "button") {
                    return (
                        <Button
                            key={uuid()}
                            caption={element.props.caption}
                            width={element.props.width}
                            height={element.props.height}
                            visible={element.props.visible}
                        />
                    );
                }
                if (element.type === "label") {
                    return (
                        <div key={uuid()} className={styles.label} style={{display: element.props.visible ? "inline" : "none"}}>
                            <span>{element.props.caption}</span>
                        </div>
                    );
                }
            })}
        </div>
    );
}
    ;

    export default Content;