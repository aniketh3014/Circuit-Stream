import { Dot } from "./Dot";

export const ReadSkeleton = () => {
    return (
        <div>
            <div className="min-w-full bg-gray-100">
                <div className="bg-gray-100 min-h-screen min-w-full max-w-screen-2xl">
                    <div className="py-4 min-w-full">
                        <div className="grid grid-cols-12 gap-6 min-w-full">
                            <div className="col-span-12 lg:col-span-9">
                                <div className="pl-40">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 ml-2"></div>
                                        <div className="pl-1 flex flex-col justify-center h-2 w-2">
                                            <Dot />
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full mb-2.5 ml-2"></div>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                                    <div>
                                        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                                <div>
                                    <div className="w-full">
                                        <div className="h-2 bg-gray-200 rounded-full max-w-[50px] mb-2.5"></div>
                                        <div className="font-bold text-2xl flex">
                                            <div className="pr-3 font-normal">
                                                <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full max-w-[150px] mb-2.5"></div>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5 pt-2"></div>
                                        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
