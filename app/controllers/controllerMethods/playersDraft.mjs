import DraftModel from '../../models/draft.mjs';
import PickModel from '../../models/pick.mjs';

// Controlador para manejar la solicitud de jugadores
export async function playersDraft(req, res) {
  try {
    // Consulta para obtener jugadores
    const players = await DraftModel.find({ position: { $gt: 8 } })
      .populate({
        path: 'idPlayer',
      })
      .select('position idPlayer')
      .exec();

    // Formatear jugadores
    const formattedPlayers = players.map((player) => ({
      position: player.position,
      player: player.idPlayer,
    }));

    // Devolver respuesta con los jugadores formateados
    return res.status(200).json({ players: formattedPlayers });
  } catch (error) {
    console.error('Error al obtener los jugadores del equipo:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
