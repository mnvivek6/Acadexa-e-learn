

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
}
export type CategoryType ={
    name:string
    description:string
    image:string
}

export type Course ={
    map(arg0: (classItem: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
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