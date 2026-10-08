"use client";

import { AppContext } from "@/context/AppProvider";
import { IApp } from "@/types/apps.type";
import React, { useContext } from "react";
import Image from "next/image";

const InstallationPage = () => {

    const {
        installedApps,
        removeInstalledApp,
    } = useContext(AppContext);

    return (
        <div className="bg-gray-100 min-h-[70vh] py-10">

            <div className="container mx-auto px-6">

                {/* Heading */}
                <div className="text-center space-y-3">

                    <h2 className="font-bold text-3xl">
                        Your Installed Apps
                    </h2>

                    <p className="text-sm text-gray-500">
                        Explore All Trending Apps on the Market developed by us
                    </p>

                </div>

                {/* Top Section */}
                <div className="flex items-center justify-between mt-8 mb-4">

                    <h2 className="font-semibold text-sm">
                        {installedApps.length} Apps Found
                    </h2>

                    <select
                        className="select select-bordered select-xs w-28"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Sort By Size
                        </option>

                        <option value="low">
                            Low to High
                        </option>

                        <option value="high">
                            High to Low
                        </option>
                    </select>

                </div>

                {/* Installed Apps */}
                {
                    installedApps.length > 0 ? (

                        <div className="space-y-2">

                            {
                                installedApps.map((app: IApp) => (

                                    <div
                                        key={app.id}
                                        className="bg-white px-4 py-3 flex items-center justify-between rounded-sm"
                                    >

                                        {/* Left Side */}
                                        <div className="flex items-center gap-3">

                                            <Image
                                                src={app.image}
                                                alt={app.title}
                                                width={45}
                                                height={45}
                                                className="w-11 h-11 rounded-md object-cover"
                                            />

                                            <div>

                                                <h3 className="text-xs font-medium">
                                                    {app.title}
                                                </h3>

                                                <div className="flex items-center gap-3 mt-1">

                                                    <span className="text-[10px] text-green-500">
                                                        ↓ {app.downloads}
                                                    </span>

                                                    <span className="text-[10px] text-orange-500">
                                                        ★ {app.ratingAvg}
                                                    </span>

                                                    <span className="text-[10px] text-gray-400">
                                                        {app.size} MB
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                        {/* Uninstall */}
                                        <button
                                            onClick={() =>
                                                removeInstalledApp(app.id)
                                            }
                                            className="btn btn-success btn-xs text-white"
                                        >
                                            Uninstall
                                        </button>

                                    </div>

                                ))
                            }

                        </div>

                    ) : (

                        <div className="min-h-60 flex items-center justify-center">

                            <div className="text-center">

                                <h2 className="text-xl font-semibold text-gray-500">
                                    No Installed Apps
                                </h2>

                                <p className="text-sm text-gray-400 mt-2">
                                    Install an app to see it here.
                                </p>

                            </div>

                        </div>

                    )
                }

            </div>

        </div>
    );
};

export default InstallationPage;