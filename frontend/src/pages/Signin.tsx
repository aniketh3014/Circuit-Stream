import { Auth } from "../components/Authin"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div className="grid lg:grid-cols-2">
    <div>
        <Auth />
    </div>
    <div className="invisible lg:visible">
     <Quote />
    </div>       
</div>
}