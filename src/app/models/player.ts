export interface Player {
    _id: string;
    mobilePhone: string;
    email: string;
    name: string;
    ranking: string;
    rankingPosition: number;
    urlPlayerPicture: string;
}
  
export interface CreatePlayerDto {
    mobilePhone: string;
    email: string;
    name: string;
}