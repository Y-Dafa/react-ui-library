// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/workSpace/study/react-ui-library/src/Alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/workSpace/study/react-ui-library/src/Alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/workSpace/study/react-ui-library/src/Alert/style/index.less?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/workSpace/study/react-ui-library/src/Alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../../Alert","content":rawCode2},"style/index.less":{"import":"../style/index.less","content":rawCode3}},"dependencies":{"react":{"version":"17.0.2"},"prop-types":{"version":"15.8.1"}},"componentName":"Alert","identifier":"alert-basic"},
  },
};
