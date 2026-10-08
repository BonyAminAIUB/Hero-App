"use client";

import { AppContext } from "@/context/AppProvider";
import { IApp } from "@/types/apps.type";
import React, { useContext } from "react";

type TInstallAppButtonProps = {
    app: IApp;
};

const InstallAppButton = ({ app }: TInstallAppButtonProps) => {

    const { installedApps, addInstalledApp } = useContext(AppContext);

    const isInstalled = installedApps.some(
        (installedApp) => installedApp.id === app.id
    );

    const handleInstall = () => {

        if (isInstalled) {
            return;
        }

        addInstalledApp(app);
    };

    return (
        <div>

            <button
                onClick={handleInstall}
                className={`btn btn-sm text-white mt-5 ${
                    isInstalled
                        ? "btn-disabled"
                        : "btn-success"
                }`}
            >
                {isInstalled
                    ? "Installed"
                    : `Install Now (${app.size} MB)`
                }
            </button>

        </div>
    );
};

export default InstallAppButton;