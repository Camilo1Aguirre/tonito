import StandingModel from '../../models/standing.mjs';
import LotteryModel from '../../models/lottery.mjs';

export async function probabilityLottery(req, res) {
  try {
    /* const standings = await StandingModel.find()
      .populate({
        path: 'idteam',
        select: 'name', // Seleccionamos únicamente el campo 'name' del modelo 'Team'
      })
      .select('position idteam') // Seleccionamos los campos 'position' e 'idteam' de 'Standing'
      .exec();

    // Transformar los standings para que idteam se reemplace con el nombre del equipo
    const transformedStandings = standings.map((standing) => ({
      position: standing.position,
      teamName: standing.idteam.name,
    }));
    return res.status(200).json({ transformedStandings }); */
    const lotteryData = await LotteryModel.find()
      .populate({
        path: 'idStanding',
        populate: {
          path: 'idteam',
          select: 'name', // solo trae el campo 'name' del equipo
        },
      })
      .select('probability idStanding')
      .exec(); // solo trae el campo 'probability' de lottery

    // Formatear los datos para incluir solo los campos necesarios
    const formattedLotteryData = lotteryData.map((lottery) => ({
      probability: lottery.probability,
      teamName: lottery.idStanding.idteam.name,
    }));
    return res.status(200).json({ formattedLotteryData });
  } catch (error) {
    console.error('Error al obtener los standings con nombres de equipos:', error);
  }
}
