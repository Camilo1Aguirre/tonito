import TeamModel from '../../models/team.mjs';

export async function obtTeams() {
  try {
    const teams = await TeamModel.find();
    return teams.map((team) => ({
      name: team.name,
      id: team._id,
    }));
  } catch (error) {
    console.error('Error al obtener los equipos:', error.message);
    return res.status(500).json({ message: 'Error al obtener los equipos.' });
  }
}

export async function nameTeam(req, res) {
  try {
    const teams = await obtTeams();

    if (teams.length === 0) {
      return res.status(404).json({ message: 'No hay participantes disponibles.' });
    }

    return res.status(200).json({ teams });
  } catch (error) {
    console.error('Error al enviar equipos:', error.message);
    return res.status(500).json({ message: 'Error al enviar equipos.' });
  }
}
