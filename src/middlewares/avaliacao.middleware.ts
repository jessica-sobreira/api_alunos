import { NextFunction, Request, Response } from "express";

export function verificarPermissaoAluno(req: Request, res: Response, next: NextFunction) {
    const aluno = req.body.aluno;


    if (!aluno || typeof aluno.tipo !== 'string') {
        return res.status(403).json({ ok: false, message: 'Acesso não autorizado: informações de aluno ausentes ou inválidas' });
    }

    if (aluno.tipo !== 'M' && aluno.tipo !== 'T') {
        return res.status(403).json({ ok: false, message: 'Acesso não autorizado: tipo de aluno não permitido' });
    }

    next();
}
