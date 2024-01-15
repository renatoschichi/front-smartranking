import { Sports } from "./sports";

export interface Player {
    _id: string;
    mobilePhone: string;
    email: string;
    name: string;
    ranking: number;
    sport: Sports;
    team: string;
}