import requests from "@api/requests";
import { RegisterResponseErrors } from "@api/types";
import { ROUTES } from "@constants/routes";
import { useAppDispatch } from "@store/hooks";
import { validatePhoneNumber } from "@constants/validation";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Alert } from "react-native";

export interface RegisterState {
    account: string;
    inn: string;
    bank: string;
    address_legal: string;
    oked: string;
    okohx: string;
    mfo: string;
    name: string;
    phone: string;
    type: 'fiz' | 'yur';
    password: string;
}

const useRegisterHook = () => {
    let navigation = useNavigation();
    //TODO remove initial value
    const [state, setState] = useState<RegisterState>({
        phone: "",
        name: "",
        password: "",
        type: "fiz",
        account: "",
        inn: "",
        bank: "",
        address_legal: "",
        oked: "",
        okohx: "",
        mfo: "",
    });

    const [loading, setLoading] = useState<boolean>(false);

    const [errTxt, setErrTxt] = useState("");

    let dispatch = useAppDispatch();

    let onStateChange = (key: string) => (value: string) => {
        setState({ ...state, [key]: value });
    };

    const onRegister = async (type: 'fiz' | 'yur') => {
        setState((prev) => ({ ...prev, type }));
        //validate phone matches +998 ** *** ** **
        if (validatePhoneNumber(state.phone)) {
            //send data to remote
            try {
                setLoading(true);
                let res = await requests.auth.register(state);
                // let res = await axios.get("http://qwerty.uz");
                //write these data to redux and AsyncStorage
                //@ts-ignore
                navigation.navigate(ROUTES.VERIFICATION, {
                    phone: state.phone,
                    token: res.data.data.token,
                });
            } catch (error) {
                let err = error as AxiosError<RegisterResponseErrors>;
                Alert.alert("Этот номер уже зарегистрирован.");
                if (axios.isAxiosError(err)) {
                    // Access to config, request, and response
                    // err.response?.data.errors[0].phone;
                    let errText = err.response?.data.errors.phone.join(", ");
                    Alert.alert(err.response?.data.errors.phone.join(", ") as string);
                    // console.log(errText);
                    setErrTxt(errText || "");
                } else {
                    // Just a stock error
                }
            } finally {
                setLoading(false);
            }
        } else {
            // TODO warn that data is incorrect
            console.log("INCORRECT PHONE NUMBER");
        }
    };

    let onRegisterNavigation = () => navigation.navigate(ROUTES.VERIFICATION as never);

    return {
        onRegister,
        onStateChange,
        state,
        loading,
        onRegisterNavigation,
        errTxt,
        setState,
    };
};

export default useRegisterHook;
