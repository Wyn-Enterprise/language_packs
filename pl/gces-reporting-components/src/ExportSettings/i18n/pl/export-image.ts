import { WatermarkColor } from "./common/WatermarkColor";
import { WatermarkFontFamily } from "./common/WatermarkFontFamily";

export const image = {
  "friendlyName": "Obraz",
  "tooltipName": "Obraz PNG",
  "settings": {
    "ImageType": {
      "label": "TypObrazu",
      "category": "Różne",
      "enum": {
        "Png": "PNG",
        "Jpeg": "JPEG",
        "Gif": "GIF",
        "Bmp": "BMP",
        "Tiff": "TIFF"
      }
    },
    "Pagination": {
      "label": "Paginacja",
      "category": "Różne"
    },
    "DpiX": {
      "label": "DpiX",
      "category": "Różne"
    },
    "DpiY": {
      "label": "DpiY",
      "category": "Różne"
    },
    "Quality": {
      "label": "Jakość",
      "category": "Różne"
    },
    "Dither": {
      "label": "PaletaBarw",
      "category": "Różne"
    },
    "PrintLayoutMode": {
      "label": "UkładWydruku",
      "category": "Różne",
      "enum": {
        "OneLogicalPageOnSinglePhysicalPage": "JednaStronaNaArkusz",
        "TwoLogicalPagesOnSinglePhysicalPage": "DwieStronyNaArkusz",
        "FourLogicalPagesOnSinglePhysicalPage": "CzteryStronyNaArkusz",
        "EightLogicalPagesOnSinglePhysicalPage": "OsiemStronLogicznychNaPojedynczejStronieFizycznej",
        "BookletMode": "TrybBroszury"
      }
    },
    "SizeToFit": {
      "label": "RozmiarDoDopasowania",
      "category": "Różne"
    },
    "StartPage": {
      "label": "StronaStartowa",
      "category": "Różne"
    },
    "EndPage": {
      "label": "StronaKońcowa",
      "category": "Różne"
    },
    "WatermarkAngle": {
      "label": "KątZnakuWodnego",
      "category": "Różne"
    },
    "WatermarkColor": {
      "label": "KolorZnakuWodnego",
      "category": "Różne",
      "enum": WatermarkColor
    },
    "WatermarkTitle": {
      "label": "TytułZnakuWodnego",
      "category": "Różne"
    },
    "WatermarkFontFamily": {
      "label": "CzcionkaZnakuWodnego",
      "category": "Różne",
      "enum": WatermarkFontFamily
    },
    "WatermarkFontSize": {
      "label": "RozmiarCzcionkiZnakuWodnego",
      "category": "Różne"
    },
    "WatermarkFontBold": {
      "label": "PogrubienieCzcionkiZnakuWodnego",
      "category": "Różne"
    },
    "WatermarkFontItalic": {
      "label": "KursywaCzcionkiZnakuWodnego",
      "category": "Różne"
    },
    "WatermarkFontStrikeout": {
      "label": "PrzekreślenieCzionkiZnakuWodnego",
      "category": "Różne"
    },
    "WatermarkFontUnderline": {
      "label": "PodkreślenieCzionkiZnakuWodnego",
      "category": "Różne"
    }
  }
}
