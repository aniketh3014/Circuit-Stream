interface prop {
    username: string
}

export const Avatar = ({username}: prop) => {

    return <div>
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-600">
            <span className="text-md text-gray-600 dark:text-gray-300">{username[0].toUpperCase()}</span>
        </div>
    </div>
}