import { NextApiRequest, NextApiResponse } from 'next';

import Geo from '../../models/geo';
import connectToDb from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDb();

  const places = await Geo.find().lean();
  res.json(JSON.stringify(places));
};