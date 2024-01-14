export interface Player {
    _id: string;
    mobilePhone: string;
    email: string;
    name: string;
    ranking: string;
    sport: string;
    team: string;
}
  
export interface CreatePlayerDto {
    mobilePhone: string;
    email: string;
    name: string;
}