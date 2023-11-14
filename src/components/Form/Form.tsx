import React from "react";
import styles from "./Form.module.scss";
import {useFormCustom} from "../../utils/useFormCustom";
import {changeElement} from "../../services/actions";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import {getValueByType, ValueTypes} from "../../utils/getValueByType";

const Form = () => {
    const dispatch = useDispatch();
    const initial = {
        path: "",
        value: "",
        type: ValueTypes.Number,
    };
    const {form, handleChange} = useFormCustom(initial);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = getValueByType(form.type, form.value);
        dispatch(changeElement(form.path, value));
    };

    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formFields}>
                <div className={styles.input}>
                    <span className={styles.label}>Путь</span>
                    <input name="path" onChange={handleChange} placeholder="Введете Путь"/>
                </div>
                <div className={styles.input}>
                    <span className={styles.label}>Новое значение</span>
                    <input name="value" onChange={handleChange} placeholder="Введете Новое значение"/>
                </div>
                <div className={styles.input}>
                    <span className={styles.label}>Тип данных</span>
                    <select className={styles.select} name="type" size={1} onChange={handleChange}>
                        <option value={ValueTypes.Number}>Number</option>
                        <option value={ValueTypes.String}>String</option>
                        <option value={ValueTypes.Boolean}>Boolean</option>
                        <option value={ValueTypes.Object}>Object</option>
                    </select>
                </div>
            </div>
            <button type="submit" value="Submit Button">Submit Button</button>
        </form>
    );
};

export default Form;