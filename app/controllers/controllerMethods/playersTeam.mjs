import PlayerModel from '../../models/player.mjs';

export async function playersTeam(req, res) {
  try {
    const players = await PlayerModel.find({ idTeam: req.params.team })
      .populate({
        path: 'idStyle',
        select: 'name',
      })
      .select('name idStyle position med age contractLength salary')
      .exec();

    const formattedPlayers = players.map((player) => ({
      name: player.name,
      style: player.idStyle.name,
      position: player.position,
      med: player.med,
      age: player.age,
      salary: player.salary,
      contractLength: player.contractLength,
    }));

    return res.status(200).json({ players: formattedPlayers });
  } catch (error) {
    console.error('Error al obtener los jugadores del equipo:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
