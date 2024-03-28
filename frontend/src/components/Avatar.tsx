interface prop {
    username: string
}

export const Avatar = ({username}: prop) => {

    return <div>
        <div>
        </div>
        <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-600 w-7 h-7">
            <span className="text-md text-gray-600 dark:text-gray-300">{username[0].toUpperCase()}</span>
        </div>
    </div>
}