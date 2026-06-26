import type { Request, Response } from "express";
import { get_all_itens, get_team_by_id, get_teams_by_region } from '../services/teamService.js'

export function index(req: Request, res: Response): void {
    const teams = get_all_itens();
    res.status(200).json(teams);
}

export function show(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const team = get_team_by_id(id);

    if (!team) {
        res.status(404).json({ message: 'Time não encontrado' });
        return;
    }

    res.status(200).json(team);
}

export function filterByRegion(req: Request, res: Response): void {
    const { region } = req.query;

    if (!region || typeof region !== 'string') {
        res.status(400).json({ message: 'Região não informada' });
        return;
    }

    const teams = get_teams_by_region(region);

    if (teams.length === 0) {
        res.status(404).json({ message: 'Nenhum time encontrado para esta região' });
        return;
    }

    res.status(200).json(teams);
}