import express from 'express';
import asyncHandler from 'express-async-handler';
import { addTrackToPlaylist, createPlaylist, removeTrackFromPlaylist, getAllPlaylists, deletePlaylist } from '../controllers/playlistController';

const playlist = express.Router();

// playlist.get('/', async(res: Response, req: Request) => {

// });
playlist.get('/', asyncHandler(getAllPlaylists));
playlist.post('/create', asyncHandler(createPlaylist));
playlist.post('/add-track', asyncHandler(addTrackToPlaylist));
playlist.post('/remove-track', asyncHandler(removeTrackFromPlaylist));
playlist.post('/delete-playlist', asyncHandler(deletePlaylist));

export default playlist;