import { getNodeJsConfig } from '@gelatofm/webpack-configs'

export default getNodeJsConfig({
    rootPath: __dirname,
    excludeNodeModules: false,
    enableReact: false,
    mode: 'production',
    buildPath: 'build'
});
