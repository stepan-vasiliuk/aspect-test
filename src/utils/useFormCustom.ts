import {ChangeEvent, useState} from "react";
import {ValueTypes} from "./getValueByType";

type TFormParams = {
    path: string;
    value: string;
    type: ValueTypes;
}

export const useFormCustom = (initial: TFormParams) => {
    const [form, setForm] = useState(initial);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setForm({...form, [e.target.name]: e.target.value});
    };

    return {form, setForm, handleChange};
};