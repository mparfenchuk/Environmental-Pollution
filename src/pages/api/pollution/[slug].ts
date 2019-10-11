import { NextApiRequest, NextApiResponse } from 'next';

import Place from '../../../models/place';
import connectToDb from '../../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDb();

  const { query: { slug } } = req;

  const place = await Place.findOne({ slug }).lean();
  res.json(JSON.stringify(place))
};