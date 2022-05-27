import { Request, Response, NextFunction } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getAllPlaylists = async(req: Request, res: Response, next: NextFunction ) => {
    try{
        const playlists =  await prisma.playlist.findMany();
        const playlistTracks = await prisma.playlistTracks.findMany();
  
        res.status(200).json({
            data: {
                playlists,
                playlistTracks
            }
        });
    }catch(e){
        console.error(e);
        res.status(500).json({
            success: false
        });
    }

    next();
}

export const createPlaylist = async(req: Request, res: Response, next: NextFunction ) => {
    const data = req.body;

    try{
        const playlist = await prisma.playlist.create({
            data: {
                ...data.meta
            }
        });

        res.status(200).json({
            success: true,
            playlistId: playlist.id,
            creationDate: playlist.creationDate
        });

    }catch(e){
        console.error(e);
        res.status(500).json({
            success: false
        });
    }

    next();
};

export const addTrackToPlaylist = async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    try{
        if(prisma.playlistTracks.playlistId !== data.playlistId && prisma.playlistTracks.trackId !== data.trackId ){
            await prisma.playlistTracks.create({
                data
            });

            res.status(200).json({
                success: true,
            });
        }else{
            res.status(400).json({
                success: false
            })
        }
    }catch(e){
        console.error(e);
        res.status(500).json({
            success: false
        });
    }

    next();
};

export const removeTrackFromPlaylist = async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try{
        const playlistTracks = await prisma.playlistTracks.deleteMany({
            where: {
                playlistId: data.playlistId,
                trackId: data.trackId
            }
        });

        res.status(200).json({
            success: true,
        });

    }catch(e){
        console.error(e);
        res.status(500).json({
            success: false
        });
    }

    next();
};

export const deletePlaylist = async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try{
        // clean playlistTracks
        await prisma.playlistTracks.deleteMany({
            where: {
                playlistId: data.playlistId
            }
        });

        await prisma.playlist.delete({
            where: {
                id: data.playlistId
            }
        })

        res.status(200).json({
            success: true,
        });

    }catch(e){
        console.error(e);
        res.status(500).json({
            success: false
        });
    }

    next();
};

export { prisma };