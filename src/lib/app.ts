import { IApp } from "@/types/apps.type";

export const getAllApps = async ():Promise<IApp[]> => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}