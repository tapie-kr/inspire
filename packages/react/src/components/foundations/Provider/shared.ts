import packageJson from '@/../package.json';
import { bannerSvg } from './banner';

export function showSignature() {
  const scale = 0.65;
  const svgUrl = 'data:image/svg+xml;base64,' + btoa(bannerSvg);
  const cssProperties = [
    `padding: ${44 * scale}px ${129 * scale}px`,
    `background-image: url("${svgUrl}")`,
    'background-size: contain',
    'background-position: center top',
    'background-repeat: no-repeat',
  ];
  const content = [
    `%c %c`,
    `Made with INSPIRE v${packageJson.version} by TAPIE.`,
    'See more : https://tapie.kr/',
  ].filter(Boolean);
  // eslint-disable-next-line no-console
  console.log(
    content.join('\n'),
    cssProperties.join(';'),
    'font-family: INSPIRE Font Kit, sans-serif; font-size: 16px; line-height: 1.5;',
  );
}
