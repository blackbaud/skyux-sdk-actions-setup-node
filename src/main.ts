import { arch } from 'os';
import { configAuthentication } from './auth-util';
import { getNode } from './installer';

async function run() {
  await getNode('10', true, false, undefined, arch());
  configAuthentication();
}

run();
