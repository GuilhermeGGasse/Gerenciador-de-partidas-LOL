export interface Player {
    name: string;
    nickname: string;
    role: 'TOP' | 'MID' | 'JUNGLE'| 'ADC' | 'SUPPORT';
    region: string;
    teamId: number;
}

export interface Team {
  id: number;
  name: string;
  region: string;
  country: string;
  founded: number;
  logo: string;
}

export interface Match{
    id: number;
    team1id: number;
    team2id: number;
    scoreTeam1: number;
    scoreTeam2: number;
    durationTime: number;
    date: string;
    hour: string;
    stage: string;
    winner: string;
}

export interface Standing {
  id: number;
  teamId: number;
  wins: number;
  losses: number;
  points: number;
  position: number;
}