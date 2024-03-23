interface prop {
    username: string
}

export const Avatar = ({username}: prop) => {

    return <div>
        <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-700 w-9 h-9">
            <span className="text-md text-gray-600 dark:text-gray-300">{username[0].toUpperCase()}</span>
        </div>
    </div>
}