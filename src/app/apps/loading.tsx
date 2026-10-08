const AppsLoading = () => {
    return (
        <div className="my-20 container mx-auto">

            {/* Heading Skeleton */}
            <div className="space-y-4 max-w-100 mx-auto text-center">
                <div className="skeleton h-10 w-80 mx-auto"></div>
                <div className="skeleton h-5 w-96 max-w-full mx-auto"></div>
            </div>

            {/* App Cards Skeleton */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {
                    Array.from({ length: 8 }).map((_, ind) => (
                        <div
                            key={ind}
                            className="card bg-base-100 shadow-md"
                        >

                            {/* Image */}
                            <div className="px-5 pt-5">
                                <div className="skeleton h-24 w-24 rounded-2xl"></div>
                            </div>

                            <div className="card-body">

                                {/* Title */}
                                <div className="skeleton h-6 w-3/4"></div>

                                {/* Company */}
                                <div className="skeleton h-4 w-1/2"></div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <div className="skeleton h-3 w-full"></div>
                                    <div className="skeleton h-3 w-5/6"></div>
                                </div>

                                {/* Info */}
                                <div className="flex justify-between mt-3">
                                    <div className="space-y-2">
                                        <div className="skeleton h-4 w-12"></div>
                                        <div className="skeleton h-3 w-16"></div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="skeleton h-4 w-12"></div>
                                        <div className="skeleton h-3 w-16"></div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="skeleton h-4 w-12"></div>
                                        <div className="skeleton h-3 w-16"></div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="card-actions justify-end mt-4">
                                    <div className="skeleton h-8 w-24"></div>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default AppsLoading;