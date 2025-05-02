
export const validateEmail = (emailUser)=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailUser) // devuelve  true o false
}
export const validatePass = ()=>{
    
}