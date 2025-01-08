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

export enum GlyphIcon {
  ARROW_BACK_IOS = 'arrow_back_ios',
  ARROW_DOWNWARD = 'arrow_downward',
  ARROW_FORWARD = 'arrow_forward',
  ASTERISK = 'asterisk',
  CHECKLIST = 'checklist',
  CLOSE = 'close',
  CONTRAST = 'contrast',
  DARK_MODE = 'dark_mode',
  DELETE = 'delete',
  FACE = 'face',
  FLAG = 'flag',
  GROUPS = 'groups',
  KEYBOARD_ARROW_UP = 'keyboard_arrow_up',
  LIGHT_MODE = 'light_mode',
  LINK = 'link',
  MENU = 'menu',
  NORTH_EAST = 'north_east',
  QR_CODE_SCANNER = 'qr_code_scanner',
  RESTART_ALT = 'restart_alt',
  SEARCH = 'search'
}

export const GlyphIconMap = {
  [GlyphIcon.ARROW_BACK_IOS]: ArrowBackIosGlyph,
  [GlyphIcon.ARROW_DOWNWARD]: ArrowDownwardGlyph,
  [GlyphIcon.ARROW_FORWARD]: ArrowForwardGlyph,
  [GlyphIcon.ASTERISK]: AsteriskGlyph,
  [GlyphIcon.CHECKLIST]: ChecklistGlyph,
  [GlyphIcon.CLOSE]: CloseGlyph,
  [GlyphIcon.CONTRAST]: ContrastGlyph,
  [GlyphIcon.DARK_MODE]: DarkModeGlyph,
  [GlyphIcon.DELETE]: DeleteGlyph,
  [GlyphIcon.FACE]: FaceGlyph,
  [GlyphIcon.FLAG]: FlagGlyph,
  [GlyphIcon.GROUPS]: GroupsGlyph,
  [GlyphIcon.KEYBOARD_ARROW_UP]: KeyboardArrowUpGlyph,
  [GlyphIcon.LIGHT_MODE]: LightModeGlyph,
  [GlyphIcon.LINK]: LinkGlyph,
  [GlyphIcon.MENU]: MenuGlyph,
  [GlyphIcon.NORTH_EAST]: NorthEastGlyph,
  [GlyphIcon.QR_CODE_SCANNER]: QrCodeScannerGlyph,
  [GlyphIcon.RESTART_ALT]: RestartAltGlyph,
  [GlyphIcon.SEARCH]: SearchGlyph
} as const

export enum BrandIcon {
  FIGMA = 'figma',
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  NPM = 'npm',
  REACT = 'react',
  TAPIE = 'tapie'
}

export const BrandIconMap = {
  [BrandIcon.FIGMA]: FigmaBrand,
  [BrandIcon.GITHUB]: GithubBrand,
  [BrandIcon.INSTAGRAM]: InstagramBrand,
  [BrandIcon.NPM]: NpmBrand,
  [BrandIcon.REACT]: ReactBrand,
  [BrandIcon.TAPIE]: TapieBrand
} as const
