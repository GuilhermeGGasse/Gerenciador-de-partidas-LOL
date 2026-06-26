import type { Team } from "../types/Champion.js";
import { teams } from "../data/teams.js";

export function get_all_itens(): Team[] {
    return teams;
}

export function get_team_by_id(id:number): Team | undefined {
    return teams.find(team => team.id === id);
}

export function get_teams_by_region(region: string): Team[] {
    return teams.filter(team => team.region.toLowerCase() === region.toLowerCase())
}
