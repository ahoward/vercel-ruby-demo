//import {execa} from 'execa';

export default async function handler(request, response) {
    const execa = (await import('execa')).execaCommand;
    //const result = await execa('ruby -v');
    //return response.status(200).json(result);
    return response.status(200).json(JSON.stringify(process.env));
}
