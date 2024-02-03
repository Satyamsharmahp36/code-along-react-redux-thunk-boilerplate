


export function showData(Data){
    return {
        type: "SUCESS",
        payLoad: Data
    }
}

export function showError(Data){
    return {
        type: "ERROR",
        payLoad: Data
    }
}