export const convertStringToNumber = (string: string | undefined)=>{
    if (string === undefined) {
        return NaN;
    }
    return parseInt(string)
}