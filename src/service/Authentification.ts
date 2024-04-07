import { defaultAxiosInstance } from "./Api"

export const authenticate = async (email: string, password: string) => {
    try{
        const response = await defaultAxiosInstance.post("login", {
            email: email,
            password: password,
        })
    const {accessToken } = response.data
    localStorage.setItem("accessToken", accessToken)
    console.log(accessToken)
    return accessToken
} catch(error){
    throw error
}
}