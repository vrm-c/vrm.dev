import fs from 'node:fs';
import path from 'node:path';

export default function loader(source) {

  console.log('from-loader', this.context);

  source = source.replace(/"([^"]+?\.(png|jpg))"/, (all, unquoted, ext) => {
    const img_path = path.join(this.context, unquoted);
    const img_content = fs.readFileSync(img_path);
    return `"data:image/png;base64,${img_content.toString('base64')}"`;
  });

  return source;
}
