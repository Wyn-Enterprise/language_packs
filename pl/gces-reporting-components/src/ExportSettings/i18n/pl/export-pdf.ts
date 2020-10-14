import { WatermarkColor } from "./common/WatermarkColor";
import { WatermarkFontFamily } from "./common/WatermarkFontFamily";

export const pdf = {
  "friendlyName": "PDF",
  "tooltipName": "Dokument PDF",
  "settings": {
    "Version": {
      "label": "Wersja",
      "category": "Różne",
      "enum": {
        "Pdf12": "PDF-1.2",
        "Pdf13": "PDF-1.3",
        "Pdf14": "PDF-1.4",
        "Pdf15": "PDF-1.5",
        "Pdf16": "PDF-1.6",
        "Pdf17": "PDF-1.7",
        "PdfA1a": "PDF/A-1a",
        "PdfA1b": "PDF/A-1b",
        "PdfA2a": "PDF/A-2a",
        "PdfA2b": "PDF/A-2b",
        "PdfA2u": "PDF/A-2u",
        "PdfA3a": "PDF/A-3a",
        "PdfA3b": "PDF/A-3b",
        "PdfA3u": "PDF/A-3u",
        "PdfUA1": "PDF/UA-1"
      }
    },
    "EmbedFonts": {
      "label": "OsadźCzcionki",
      "category": "Różne",
      "enum": {
        "Partial": "Częściowo",
        "All": "Wszystko",
        "None": "Żadne"
      }
    },
    "NeverEmbedFonts": {
      "label": "NieOsadzajCzcionek",
      "category": "Różne"
    },
    "PrintOnOpen": {
      "label": "DrukujPrzyOtwarciu",
      "category": "Różne"
    },
    "Title": {
      "label": "Tytuł",
      "category": "Różne"
    },
    "Author": {
      "label": "Autor",
      "category": "Różne"
    },
    "Subject": {
      "label": "Temat",
      "category": "Różne"
    },
    "Keywords": {
      "label": "SłowaKluczowe",
      "category": "Różne"
    },
    "Application": {
      "label": "Aplikacja",
      "category": "Różne"
    },
    "Permissions": {
      "label": "Uprawnienia",
      "category": "Różne",
      "enum": {
        "None": "Brak",
        "AllowPrint": "Drukowanie",
        "AllowModifyContents": "Modyfikacja",
        "AllowCopy": "Kopiowanie",
        "AllowModifyAnnotations": "ModyfikacjaAdnotacji",
        "AllowFillIn": "Wypełnianie",
        "AllowAccessibleReaders": "DostępCzytnikówEkranu",
        "AllowAssembly": "WstawianieStron",
        "Default": "Domyślne"
      }
    },
    "Use128Bit": {
      "label": "Use128Bit",
      "category": "Różne"
    },
    "HideToolbar": {
      "label": "UkryjPasekNarzędzi",
      "category": "Różne"
    },
    "HideMenubar": {
      "label": "UkryjMenu",
      "category": "Różne"
    },
    "HideWindowUI": {
      "label": "UkryjInterfejs",
      "category": "Różne"
    },
    "FitWindow": {
      "label": "DopasujOkno",
      "category": "Różne"
    },
    "CenterWindow": {
      "label": "WyśrodkujOkno",
      "category": "Różne"
    },
    "DisplayTitle": {
      "label": "WyświetlTytuł",
      "category": "Różne"
    },
    "DisplayMode": {
      "label": "TrybWyświetlania",
      "category": "Różne",
      "enum": {
        "None": "Brak",
        "Outlines": "Podgląd",
        "Thumbs": "Miniaturka",
        "FullScreen": "PełnyEkran"
      }
    },
    "DuplexMode": {
      "label": "TrybDwustronny",
      "category": "Różne",
      "enum": {
        "Simplex": "Jednostronny",
        "DuplexFlipLongEdge": "DwustronnyWzdłużDługiejKrawędzi",
        "DuplexFlipShortEdge": "DwustronnyWzdłużKrótkiejKrawędzi"
      }
    },
    "NumberOfCopies": {
      "label": "LiczbaKopii",
      "category": "Różne"
    },
    "ImageInterpolation": {
      "label": "InterpolacjaObrazu",
      "category": "Różne",
      "enum": {
        "Default": "Domyślne",
        "None": "Żadne"
      }
    },
    "PaperSourceByPageSize": {
      "label": "ŹródłoPapieruWedługRozmiaruStrony",
      "category": "Różne"
    },
    "PrintPageRange": {
      "label": "DrukujZakresStron",
      "category": "Różne"
    },
    "IsPaginated": {
      "label": "CzyJestPaginowany",
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
    },
    "Encrypt": {
      "label": "Szyfruj",
      "category": "UstawieniaZabezpieczeń"
    },
    "OwnerPassword": {
      "label": "HasłoWłaściciela",
      "category": "UstawieniaZabezpieczeń"
    },
    "UserPassword": {
      "label": "HasłoUżytkownika",
      "category": "UstawieniaZabezpieczeń"
    }
  }
}
