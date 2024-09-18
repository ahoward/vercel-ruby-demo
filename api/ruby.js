//import {execa} from 'execa';

export default async function handler(request, response) {
    const execa = (await import('execa')).execaCommand;
    //const result = await execa('ruby -v');
    //return response.status(200).json(result);
    process.env['PATH'] = process.env['PATH'] + ':/ruby33/bin';
    const result = await execa('ls /');
    return response.status(200).json({env:process.env, result:result});
}
