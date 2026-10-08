const Loading = () => {
    return (
        <div className="bg-gray-100 py-10">

            <div className="container mx-auto px-6">

                {/* Back to Apps */}
                <div className="skeleton h-8 w-32 mb-5"></div>

                {/* App Details Card */}
                <div className="bg-base-100 p-8 rounded-lg shadow-sm">

                    {/* App Information */}
                    <div className="flex flex-col md:flex-row gap-8">

                        {/* App Image */}
                        <div className="shrink-0">
                            <div className="skeleton w-40 h-40 rounded-lg"></div>
                        </div>

                        {/* App Details */}
                        <div className="flex-1">

                            {/* Title */}
                            <div className="skeleton h-8 w-72"></div>

                            {/* Company */}
                            <div className="skeleton h-4 w-48 mt-3"></div>

                            <div className="divider my-3"></div>

                            {/* Statistics */}
                            <div className="flex flex-wrap gap-10">

                                {/* Downloads */}
                                <div>
                                    <div className="skeleton h-7 w-7"></div>

                                    <div className="skeleton h-3 w-20 mt-2"></div>

                                    <div className="skeleton h-7 w-16 mt-2"></div>
                                </div>

                                {/* Ratings */}
                                <div>
                                    <div className="skeleton h-7 w-7"></div>

                                    <div className="skeleton h-3 w-24 mt-2"></div>

                                    <div className="skeleton h-7 w-16 mt-2"></div>
                                </div>

                                {/* Reviews */}
                                <div>
                                    <div className="skeleton h-7 w-7"></div>

                                    <div className="skeleton h-3 w-24 mt-2"></div>

                                    <div className="skeleton h-7 w-20 mt-2"></div>
                                </div>

                            </div>

                            {/* Install Button */}
                            <div className="skeleton h-8 w-36 mt-5"></div>

                        </div>

                    </div>

                    {/* Ratings Section */}
                    <div className="divider"></div>

                    <div>

                        <div className="skeleton h-6 w-20 mb-5"></div>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">
                                <div className="skeleton h-4 w-12"></div>
                                <div className="skeleton h-4 flex-1"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="skeleton h-4 w-12"></div>
                                <div className="skeleton h-4 flex-1"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="skeleton h-4 w-12"></div>
                                <div className="skeleton h-4 flex-1"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="skeleton h-4 w-12"></div>
                                <div className="skeleton h-4 flex-1"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="skeleton h-4 w-12"></div>
                                <div className="skeleton h-4 flex-1"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>

                        </div>

                    </div>

                    {/* Description Section */}
                    <div className="divider"></div>

                    <div>

                        <div className="skeleton h-6 w-28 mb-5"></div>

                        <div className="space-y-3">

                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-5/6"></div>
                            <div className="skeleton h-4 w-4/6"></div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Loading;