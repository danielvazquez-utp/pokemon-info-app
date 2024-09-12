import { useEffect, useState } from "react"

export const useFetch = ( url:string ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: {},
    });

    useEffect(() => {
        console.log("Entra al efect de useFetch");
      getFecth();
    }, [ url ]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: {},
        })
    }

    const getFecth = async() => {
        setLoadingState();
        const response = await fetch( url );
        console.log({response: response});

        if( !response.ok ) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: {}
        });
    }
    
    return {
        data        : state.data,
        isLoading   : state.isLoading,
        hasError    : state.hasError,
        error       : state.error
    }

}