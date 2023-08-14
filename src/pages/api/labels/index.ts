import type { NextApiRequest, NextApiResponse } from 'next'
import DATA from '../../../../data/KITS_SHIPPING_DATA.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO This data needs to paginated so we're only returning a subset of
  //   records, not all of them.
  res.status(200).json(DATA);
}
