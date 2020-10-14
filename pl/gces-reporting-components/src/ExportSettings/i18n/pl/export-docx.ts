import { PaperSize } from './common/PaperSize';

export const docx = {
  "friendlyName": "Word",
  "tooltipName": "Dokument Word(.docx)",
  "settings": {
    "Title": {
      "label": "Tytuł",
      "category": "Różne"
    },
    "Author": {
      "label": "Autor",
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
    "DocumentCompatibilityVersion": {
      "label": "WersjaKompatybilnościDokumentu",
      "category": "Różne",
      "enum": {
        "Word2007": "Word2007",
        "Word2010": "Word2010",
        "Word2013": "Word2013"
      }
    },
    "TOCAutoUpdate": {
      "label": "TOCAutomatycznaAktualizacja",
      "category": "Różne"
    },
    "CompanyName": {
      "label": "NazwaFirmy",
      "category": "Różne"
    },
    "WritePassword": {
      "label": "WpiszHasło",
      "category": "UstawieniaZabezpieczeń"
    },
    "Password": {
      "label": "Hasło",
      "category": "UstawieniaZabezpieczeń"
    },
    "ReadOnlyRecommended": {
      "label": "ZalecanyTylkoOdczyt",
      "category": "UstawieniaZabezpieczeń"
    },
    "Orientation": {
      "label": "OrientacjaStrony",
      "category": "UstawieniaStrony",
      "enum": {
        "Default": "Domyślnie",
        "Portrait": "Portret",
        "Landscape": "Krajobraz"
      }
    },
    "PaperSize": {
      "label": "RozmiarPapieru",
      "category": "UstawieniaStrony",
      "enum": PaperSize
    }
  }
}
