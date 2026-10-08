"use client";

import { IApp } from "@/types/apps.type";
import React, { createContext, ReactNode, useState } from "react";

type TAppContext = {
    installedApps: IApp[];
    setInstalledApp: React.Dispatch<React.SetStateAction<IApp[]>>;
    addInstalledApp: (app: IApp) => void;
    removeInstalledApp: (id: number) => void;
};

export const AppContext = createContext<TAppContext>({
    installedApps: [],
    setInstalledApp: () => {},
    addInstalledApp: () => {},
    removeInstalledApp: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {

    const [installedApps, setInstalledApp] = useState<IApp[]>([]);

    const addInstalledApp = (app: IApp) => {

        setInstalledApp((prevApps) => {

            const alreadyInstalled = prevApps.some(
                (installedApp) => installedApp.id === app.id
            );

            if (alreadyInstalled) {
                return prevApps;
            }

            return [...prevApps, app];
        });
    };

    const removeInstalledApp = (id: number) => {

        setInstalledApp((prevApps) =>
            prevApps.filter((app) => app.id !== id)
        );
    };

    const sharedData = {
        installedApps,
        setInstalledApp,
        addInstalledApp,
        removeInstalledApp,
    };

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;