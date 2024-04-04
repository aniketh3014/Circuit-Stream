import { Dot } from "./Dot";

export const BlogsSkeleton = () => {
    return (
        <div>
            <div className="w-screen max-w-screen-lg cursor-pointer bg-white border-b border-gray-200 shadow">
                <div className="p-5 px-16">
                    <div className="flex">
                        <div className="flex flex-col justify-center">
                            <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                        <div className="pl-1 flex flex-col justify-center h-2 w-2">
                            <Dot />
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                    <div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                </div>
            </div>
        </div>
    );
};