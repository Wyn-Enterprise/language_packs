import { PaperSize } from './common/PaperSize';

export const excel = {
  "friendlyName": "Excel",
  "tooltipName": "Arkusz Excel",
  "settings": {
    "UseCompression": {
      "label": "UżyjKompresji",
      "category": "Różne"
    },
    "OutputFormat": {
      "label": "StandardOpenXML",
      "category": "Różne",
      "enum": {
        "OpenXmlTransitional": "Przejściowy",
        "OpenXmlStrict": "Ścisły"
      }
    },
    "EnableToggles": {
      "label": "WłączPrzełącznik",
      "category": "Różne"
    },
    "Pagination": {
      "label": "Paginacja",
      "category": "Różne"
    },
    "UseDefaultPalette": {
      "label": "UżyjDomyślnejPalety",
      "category": "Różne"
    },
    "MultiSheet": {
      "label": "MultiArkusz",
      "category": "Różne"
    },
    "SheetName": {
      "label": "NazwaArkusza",
      "category": "Różne"
    },
    "ProtectedBy": {
      "label": "ChronionyPrzez",
      "category": "Bezpieczeństwo"
    },
    "WritePassword": {
      "label": "WpiszHasło",
      "category": "Bezpieczeństwo"
    },
    "ReadOnlyRecommended": {
      "label": "ZalecanyTylkoOdczyt",
      "category": "Bezpieczeństwo"
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
