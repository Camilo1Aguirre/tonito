import PlayerModel from '../models/PlayerModel'; // Asegúrate de que la ruta sea correcta

const tradePlayers = async (req, res) => {
  const { playerId1, playerId2 } = req.body;

  try {
    // Verificar que ambos jugadores existan
    const player1 = await PlayerModel.findById(playerId1);
    const player2 = await PlayerModel.findById(playerId2);

    if (!player1 || !player2) {
      return res.status(404).json({ message: 'Uno o ambos jugadores no existen' });
    }

    // Comparar los ratings de ambos jugadores
    const ratingDifference = Math.abs(player1.rating - player2.rating);

    // Definir un margen aceptable de diferencia de rating, por ejemplo, 5 puntos
    const acceptableDifference = 0.5;

    if (ratingDifference > acceptableDifference) {
      return res
        .status(400)
        .json({ message: 'La diferencia de rating entre los jugadores es demasiado alta' });
    }

    // Realizar el intercambio de equipos
    const player1TeamId = player1.idTeam;
    player1.idTeam = player2.idTeam;
    player2.idTeam = player1TeamId;

    await player1.save();
    await player2.save();

    return res
      .status(200)
      .json({ message: 'Intercambio realizado exitosamente', player1, player2 });
  } catch (error) {
    return res.status(500).json({ message: 'Error al realizar el intercambio', error });
  }
};

export default { tradePlayers };
