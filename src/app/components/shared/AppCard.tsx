import { IApp } from '@/types/apps.type';
import Image from 'next/image';
import Link from 'next/link';

interface IAppProps{
    app : IApp
}

const AppCard = ({app}:IAppProps) => {
    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">

            <figure className="px-5 pt-5">
                <Image
                    src={app.image}
                    alt={app.title}
                    width={100}
                    height={100}
                    className="h-24 w-24 rounded-2xl object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title text-xl">
                    {app.title}
                </h2>

                <p className="text-sm text-gray-500">
                    {app.companyName}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2">
                    {app.description}
                </p>

                <div className="flex items-center justify-between mt-3">

                    <div>
                        <p className="text-sm text-gray-500">
                            ⭐ {app.ratingAvg}
                        </p>
                        <p className="text-xs text-gray-400">
                            {app.reviews} reviews
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">
                            {app.downloads}
                        </p>
                        <p className="text-xs text-gray-400">
                            Downloads
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">
                            {app.size} MB
                        </p>
                        <p className="text-xs text-gray-400">
                            Size
                        </p>
                    </div>

                </div>

                <div className="card-actions justify-end mt-4">
                    <Link
                        href={`/apps/${app.id}`}
                        className="btn btn-primary btn-sm"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AppCard;