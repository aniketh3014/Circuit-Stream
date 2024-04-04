interface prop {
    username: string
}

export const Avatar = ({username}: prop) => {

    return <div>
        <div>
        </div>
        <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 w-7 h-7">
            <span className="text-md text-gray-800">{username[0].toUpperCase()}</span>
        </div>
    </div>
}