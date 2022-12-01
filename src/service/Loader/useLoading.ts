import { useContext } from "react";
import { LoaderContext } from "./LoaderContext";


const useLoading = () => useContext(LoaderContext);

export default useLoading;