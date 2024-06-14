import PlayerModel from '../../models/player.mjs';

// Controlador para actualizar el ID del equipo de un jugador por su ID
export async function changeTeam(req, res) {
  const { playerId } = req.params;
  const { idTeam } = req.body;

  try {
    // Verificar si el jugador existe
    const existingPlayer = await PlayerModel.findById(playerId);
    if (!existingPlayer) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }

    // Actualizar solo el ID del equipo del jugador
    existingPlayer.idTeam = idTeam;
    await existingPlayer.save();

    // Responder con el jugador actualizado
    res.status(200).json(existingPlayer);
  } catch (error) {
    // Manejar errores
    console.error('Error al actualizar el ID del equipo del jugador:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
