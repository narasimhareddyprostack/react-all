const REGISTER_USER = 'REGISTER_USER'
let registerUSerAction = (user)=>{
    return { type:REGISTER_USER, payload:user}

}
export { REGISTER_USER, registerUSerAction}