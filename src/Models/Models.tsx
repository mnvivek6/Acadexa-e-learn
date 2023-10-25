

export type UserType ={
    _id:string,
    name:string,
    email:string,
    phone:string,
    password:string,
    isBlocked:boolean,
    isMailvarified:boolean,
    isPremium:boolean,
    image:string
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
    isBlocked:boolean,
    isMailvarified:boolean,
    isPremium:boolean,
    image:string
}
export type CategoryType ={
    _id: string
    name:string
    description:string
    image:string
}

export type Course ={
   
    length: number
    _id:string
    title: string
    description:string
    image:string
    level:string
    unlist:boolean
    coursefee:string
    tutor:string
    category:string
    duration:string
    classes:{
        title:string
        description:string
        video:string
    }
    
}
export type Payment ={
   
    length: number
    _id:string
    tutor:object
    amount:string
    user:object
    course:Course
}
export type Message ={
    _id:string
    user:UserType
    tutor:tutorType
    chat:Chat
    content:string
}

export type Chat ={
    _id:string
    Chatname:string
    user?:UserType
    tutor?:tutorType

}