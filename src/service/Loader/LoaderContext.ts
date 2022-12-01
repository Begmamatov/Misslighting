import { createContext } from "react";

type LoaderContextType = {
    onRun: () => void;
    onClose: () => void;
};


export const LoaderContext = createContext<LoaderContextType | null>(null)