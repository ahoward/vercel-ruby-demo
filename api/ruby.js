import {execa} from 'execa';

export default async function handler(request, response) {
  const result = await execa`ruby -v`;
  return response.status(200).json(result);
}
