import React from "react";
import Wrapper from "../Wrapper/Wrapper";
// import Main from "./components/Main/Main";
import {useSelector} from "react-redux";
import styles from "./App.module.scss";
import Form from "../Form/Form";
import Content from "../Content/Content";

function App() {
    // @ts-ignore
    const mainData = useSelector(state => state.content);

    return (
        <>
            <Wrapper>
                <main className={styles.app}>
                    <Form />
                    {mainData && mainData.length &&
                        <Content jsonData={mainData}/>
                    }
                </main>
            </Wrapper>
        </>
    );
}

export default App;
