import type { NextApiRequest, NextApiResponse } from 'next';
import DATA from '../../../../data/KITS_SHIPPING_DATA.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) {
    return res
      .status(400)
      .json({
        message:
          'Invalid request. Please provide an ID with at least one digit.',
      });
  }

  let stringId: string = '';
  if (Array.isArray(id)) {
    stringId = id[0];
  } else {
    stringId = id;
  }

  const results = DATA.filter((label) => label['label_id'].startsWith(stringId));
  res.status(200).json(results);
}
