import LoadingModal from "@components/uikit/LoadingModal/LoadingModal"
import React, { useCallback } from "react"
import { LoaderContext } from "./LoaderContext"


const Loader = () => {
    return (
        <LoadingModal />
    )
}

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const onRun = useCallback(() => setIsLoading(() => true), [])
    const onClose = useCallback(() => setIsLoading(() => false), [])

    return (
        <LoaderContext.Provider value={{ onRun, onClose }}>
            {children}
            {
                isLoading && <Loader />
            }
        </LoaderContext.Provider>
    )
}