import { ROLES } from "./Config"

export const user_groups=()=>{
    //let temp=[]
    let groups = localStorage.getItem(ROLES).split(',')
    return groups
}

export const has_group=(group)=>{
    let groups = user_groups()
    if(groups.includes(group)){
        return true
    }
    return false
}