import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'core-library',
      proxiesFile: '../vue-wrapper/lib/components.ts',
    }),
    reactOutputTarget({
      componentCorePackage: 'core-library',
      proxiesFile: '../react-wrapper/lib/components/stencil-generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: 'core-library',
      directivesProxyFile: '../angular-wrapper/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-wrapper/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
