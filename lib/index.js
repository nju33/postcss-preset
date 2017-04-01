import autoprefixer from 'autoprefixer';
import fontMagician from 'postcss-font-magician';
import flexbugsFixes from 'postcss-flexbugs-fixes';
import yuGothic from 'postcss-yu-gothic';
import willChange from 'postcss-will-change';
import focus from 'postcss-focus';
import easings from 'postcss-easings';
import animation from 'postcss-animation';
import assets from 'postcss-assets';
import resembleImage from 'postcss-resemble-image';
import octicon from 'postcss-octicon';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';
import compact from 'lodash.compact';

const defaultOpts = {
  bases: ['.', '/'],
  browsers: ['> 3%', 'last 2 versions'],
  variants: {},
  imagePaths: [],
  minify: false
};

export default function preset(opts = defaultOpts) {
  opts = Object.assign({}, defaultOpts, opts);

  return compact([
    autoprefixer({browsers: opts.browsers}),
    fontMagician({variants: opts.variants}),
    assets({
      basePath: opts.bases[0] || '.',
      baseUrl: opts.bases[1] || '/',
      loadPaths: opts.imagePaths
    }),
    flexbugsFixes,
    yuGothic,
    willChange,
    focus,
    easings,
    animation,
    resembleImage,
    octicon,
    opts.minify ? mqpacker : null,
    opts.minify ? cssnano : null
  ]);
}
