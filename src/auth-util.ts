import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';

export function configAuthentication() {

  const npmrcPath = path.resolve(process.cwd(), '.npmrc');
  const npmrcContents = [
    '@blackbaud-internal:registry=https://blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/registry/',
    '@blackbaud-internal:always-auth=true',
    '//blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/registry/:username=Blackbaud-npm',
    '//blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/registry/:_password="${NODE_AUTH_TOKEN}"',
    '//blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/registry/:email=none',
    '//blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/:username=Blackbaud-npm',
    '//blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/:_password="${NODE_AUTH_TOKEN}"',
    '//blackbaud.pkgs.visualstudio.com/_packaging/Blackbaud-npm/npm/:email=none'
  ].join('\n');

  fs.writeFileSync(npmrcPath, npmrcContents);

  core.exportVariable('NPM_CONFIG_USERCONFIG', npmrcPath);

  // Export empty node_auth_token if didn't exist so npm doesn't complain about not being able to find it
  core.exportVariable(
    'NODE_AUTH_TOKEN',
    process.env.NODE_AUTH_TOKEN || 'XXXXX-XXXXX-XXXXX-XXXXX'
  );

}
