import { Navigate } from "react-router-dom"
import { useAppSelector } from "../Redux/hooks"

interface tutorProtectedProps{
    children:React.ReactElement
}
const TutorProtected:React.FC<tutorProtectedProps>=({children})=>{
    const tutorToken = useAppSelector(state=>state.tutor.accessToken)

    if (tutorToken) {
        return children
    }else{
        Navigate({to:'/login'})
        return null
    }
}

export default TutorProtected