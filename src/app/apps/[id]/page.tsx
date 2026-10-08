import Image from "next/image";
import Link from "next/link";
import { getAllApps } from "@/lib/app";
import { IApp } from "@/types/apps.type";
import InstallAppButton from "@/app/components/Apps/InstallAppButton";

type TAppDetailsProps = {
    params: Promise<{
        id: string;
    }>;
};

// Static side generation // static server generation
// export async function generatesStaticParams() {
//     const allApps = await getAllApps();
//     return allApps.map((app:IApp) => {
//         return {id:app.id.toString()};
//     })
// }


// {next: {revalidate:15}} => incremental static regeneration


const AppDetails = async ({ params }: TAppDetailsProps) => {

    const { id } = await params;

    const allApps = await getAllApps();

    const app = allApps.find(
        (app: IApp) => app.id === Number(id)
    );

    if (!app) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-error">
                        App Not Found
                    </h2>

                    <Link
                        href="/apps"
                        className="btn btn-primary mt-5"
                    >
                        ← Back to Apps
                    </Link>
                </div>
            </div>
        );
    }

    const maxRating = Math.max(
        ...app.ratings.map((rating) => rating.count)
    );

    return (
        <div className="bg-gray-100 py-10">

            <div className="container mx-auto px-6">

                {/* Back to Apps */}
                <Link
                    href="/apps"
                    className="btn btn-sm btn-outline btn-primary mb-5"
                >
                    ← Back to Apps
                </Link>

                {/* App Details Card */}
                <div className="bg-base-100 p-8 rounded-lg shadow-sm">

                    {/* App Information */}
                    <div className="flex flex-col md:flex-row gap-8">

                        {/* App Image */}
                        <div className="shrink-0">
                            <Image
                                src={app.image}
                                alt={app.title}
                                width={160}
                                height={160}
                                className="w-40 h-40 object-cover rounded-lg"
                            />
                        </div>

                        {/* App Details */}
                        <div className="flex-1">

                            <h1 className="text-2xl font-bold">
                                {app.title}
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                Developed by{" "}
                                <span className="text-primary font-medium">
                                    {app.companyName}
                                </span>
                            </p>

                            <div className="divider my-3"></div>

                            {/* Statistics */}
                            <div className="flex flex-wrap gap-10">

                                {/* Downloads */}
                                <div>
                                    <div className="text-success text-2xl">
                                        ↓
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        Downloads
                                    </p>

                                    <h3 className="text-2xl font-bold">
                                        {app.downloads}
                                    </h3>
                                </div>

                                {/* Average Ratings */}
                                <div>
                                    <div className="text-warning text-2xl">
                                        ★
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        Average Ratings
                                    </p>

                                    <h3 className="text-2xl font-bold">
                                        {app.ratingAvg}
                                    </h3>
                                </div>

                                {/* Total Reviews */}
                                <div>
                                    <div className="text-secondary text-2xl">
                                        ▣
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        Total Reviews
                                    </p>

                                    <h3 className="text-2xl font-bold">
                                        {app.reviews}
                                    </h3>
                                </div>

                            </div>

                            {/* Install Button */}
                            <InstallAppButton app={app}/>
                        </div>

                    </div>

                    {/* Ratings Section */}
                    <div className="divider"></div>

                    <div>

                        <h2 className="font-semibold text-lg mb-5">
                            Ratings
                        </h2>

                        <div className="space-y-3">

                            {
                                [...app.ratings]
                                    .reverse()
                                    .map((rating) => (
                                        <div
                                            key={rating.name}
                                            className="flex items-center gap-3"
                                        >

                                            <span className="w-12 text-xs text-gray-500">
                                                {rating.name}
                                            </span>

                                            <progress
                                                className="progress progress-warning w-full"
                                                value={rating.count}
                                                max={maxRating}
                                            ></progress>

                                            <span className="w-20 text-xs text-gray-400 text-right">
                                                {rating.count}
                                            </span>

                                        </div>
                                    ))
                            }

                        </div>

                    </div>

                    {/* Description Section */}
                    <div className="divider"></div>

                    <div>

                        <h2 className="font-semibold text-lg mb-5">
                            Description
                        </h2>

                        <p className="text-sm leading-7 text-gray-500">
                            {app.description}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AppDetails;