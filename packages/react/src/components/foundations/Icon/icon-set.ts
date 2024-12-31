import ArrowBackIosGlyph from './assets/glyph/arrow_back_ios.svg'
import ArrowDownwardGlyph from './assets/glyph/arrow_downward.svg'
import ArrowForwardGlyph from './assets/glyph/arrow_forward.svg'
import AsteriskGlyph from './assets/glyph/asterisk.svg'
import ChecklistGlyph from './assets/glyph/checklist.svg'
import CloseGlyph from './assets/glyph/close.svg'
import ContrastGlyph from './assets/glyph/contrast.svg'
import DarkModeGlyph from './assets/glyph/dark_mode.svg'
import DeleteGlyph from './assets/glyph/delete.svg'
import FaceGlyph from './assets/glyph/face.svg'
import FlagGlyph from './assets/glyph/flag.svg'
import GroupsGlyph from './assets/glyph/groups.svg'
import KeyboardArrowUpGlyph from './assets/glyph/keyboard_arrow_up.svg'
import LightModeGlyph from './assets/glyph/light_mode.svg'
import LinkGlyph from './assets/glyph/link.svg'
import MenuGlyph from './assets/glyph/menu.svg'
import NorthEastGlyph from './assets/glyph/north_east.svg'
import QrCodeScannerGlyph from './assets/glyph/qr_code_scanner.svg'
import RestartAltGlyph from './assets/glyph/restart_alt.svg'
import SearchGlyph from './assets/glyph/search.svg'

import FigmaBrand from './assets/brand/figma.svg'
import GithubBrand from './assets/brand/github.svg'
import InstagramBrand from './assets/brand/instagram.svg'
import NpmBrand from './assets/brand/npm.svg'
import ReactBrand from './assets/brand/react.svg'
import TapieBrand from './assets/brand/tapie.svg'

export const GlyphIconMap = {
  arrow_back_ios: ArrowBackIosGlyph,
  arrow_downward: ArrowDownwardGlyph,
  arrow_forward: ArrowForwardGlyph,
  asterisk: AsteriskGlyph,
  checklist: ChecklistGlyph,
  close: CloseGlyph,
  contrast: ContrastGlyph,
  dark_mode: DarkModeGlyph,
  delete: DeleteGlyph,
  face: FaceGlyph,
  flag: FlagGlyph,
  groups: GroupsGlyph,
  keyboard_arrow_up: KeyboardArrowUpGlyph,
  light_mode: LightModeGlyph,
  link: LinkGlyph,
  menu: MenuGlyph,
  north_east: NorthEastGlyph,
  qr_code_scanner: QrCodeScannerGlyph,
  restart_alt: RestartAltGlyph,
  search: SearchGlyph
} as const

export enum GlyphIcon {
  ArrowBackIos = 'arrow_back_ios',
  ArrowDownward = 'arrow_downward',
  ArrowForward = 'arrow_forward',
  Asterisk = 'asterisk',
  Checklist = 'checklist',
  Close = 'close',
  Contrast = 'contrast',
  DarkMode = 'dark_mode',
  Delete = 'delete',
  Face = 'face',
  Flag = 'flag',
  Groups = 'groups',
  KeyboardArrowUp = 'keyboard_arrow_up',
  LightMode = 'light_mode',
  Link = 'link',
  Menu = 'menu',
  NorthEast = 'north_east',
  QrCodeScanner = 'qr_code_scanner',
  RestartAlt = 'restart_alt',
  Search = 'search'
}

export const BrandIconMap = {
  figma: FigmaBrand,
  github: GithubBrand,
  instagram: InstagramBrand,
  npm: NpmBrand,
  react: ReactBrand,
  tapie: TapieBrand
} as const

export enum BrandIcon {
  Figma = 'figma',
  Github = 'github',
  Instagram = 'instagram',
  Npm = 'npm',
  React = 'react',
  Tapie = 'tapie'
}
