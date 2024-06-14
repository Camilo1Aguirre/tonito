// Función para obtener participantes de la base de datos
import LotteryModel from '../../models/lottery.mjs';
import StandingModel from '../../models/standing.mjs';

export async function tankingTeams() {
  try {
    const tankings = await LotteryModel.find()
      .populate({
        path: 'idStanding',
        populate: {
          path: 'idteam',
          select: 'name', // solo trae el campo 'name' del equipo
        },
      })
      .select('probability idStanding')
      .exec();

    // Mezclar aleatoriamente los participantes
    tankings.sort(() => Math.random() - 0.5); // Orden aleatorio

    return tankings.map((tanking, index) => ({
      nombre: tanking.idStanding.idteam.name,
      orden: index + 1,
    }));
  } catch (error) {
    console.error('Error al obtener tankings:', error.message);
    throw new Error('Error al obtener tankings de la lotería');
  }
}

export async function playoffsTeams() {
  try {
    const playoffs = await StandingModel.find()
      .sort({ _id: 1 })
      .limit(16)
      .populate({
        path: 'idteam',
        select: 'name',
      })
      .select('probability idteam')
      .exec();

    // Obtener la cantidad de equipos obtenidos
    const totalEquipos = playoffs.length;

    // Mapear y agregar el campo "orden" de forma descendente
    const equiposConOrden = playoffs.map((playoff, index) => ({
      nombre: playoff.idteam.name,
      orden: totalEquipos - index + 14, // Asignar el orden descendente
    }));

    return equiposConOrden;
  } catch (error) {
    console.error('Error al obtener playoff team:', error.message);
    throw new Error('Error al obtener playoff team de la lotería');
  }
}

// Función para simular la lotería y devolver toda la lista con posiciones
export async function simulateLottery(req, res) {
  try {
    // Obtener participantes desde la base de datos y mezclar aleatoriamente
    const tankings = await tankingTeams();
    const playoffs = await playoffsTeams();
    const teams = tankings.concat(playoffs);
    teams.sort((a, b) => a.orden - b.orden);

    // Verificar si hay participantes
    if (teams.length === 0) {
      return res.status(404).json({ message: 'No hay participantes disponibles.' });
    }

    // Devolver la lista completa con posiciones aleatorias
    return res.status(200).json({ teams });
  } catch (error) {
    console.error('Error al simular lotería:', error.message);
    return res.status(500).json({ message: 'Error al simular lotería.' });
  }
}
