

export type UserType ={
    _id:string,
    name:string,
    email:string,
    phone:string,
    password:string,
    isBlocked:boolean,
    isMailvarified:boolean,
    isPremium:boolean,
}

export type adminType ={
    _id:string,
    name:string,
    email:string,
    phone:string,
    password:string,
}

export type tutorType ={
    _id:string,
    name:string,
    email:string,
    phone:string,
    password:string
    aboutme:string
}
export type CategoryType ={
    name:string
    description:string
    image:string
}

export type Course ={
    _id:string
    title: string
    description:string
    image:string
    level:string
    unlist:boolean
    coursefee:string
    duration:string
    
}