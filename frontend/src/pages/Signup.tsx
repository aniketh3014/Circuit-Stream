import { Auth } from "../components/Authup"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return <div className="grid lg:grid-cols-2">
        <div>
            <Auth />
        </div>
        <div className="invisible lg:visible">
         <Quote/>
        </div>       
    </div>
}