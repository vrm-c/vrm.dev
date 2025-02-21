import path from 'node:path';

export default function(context, options) {
  return {
    name: 'my-loaders',
    configureWebpack(config, isServer) {
      const rules = [];
      for (const rule of config.module.rules) {
        const copy = { ...rule };
        if (rule.test.test('hoge.svg')) {
          //
          rules.push({
            test: /\.svg$/,
            type: 'asset/resource',
            use: [
              {
                loader: path.resolve('custom_svg_loader.js'),
                options: {
                  /* ... */
                },
              },
            ],
          });
        }
        else {
          rules.push(copy);
        }
      }

      return {
        mergeStrategy: { 'module.rules': 'replace' },
        module: { rules },
      };
    },
  };
};
