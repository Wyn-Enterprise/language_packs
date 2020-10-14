import { Encoding } from "./common/Encoding";

export const csv = {
  "friendlyName": "CSV",
  "tooltipName": "Dokument CSV",
  "settings": {
    "Encoding": {
      "label": "Kodowanie",
      "category": "Różne",
      "enum": Encoding
    },
    "NoHeader": {
      "label": "BrakNagłówka",
      "category": "Różne"
    },
    "ColumnsDelimiter": {
      "label": "OgranicznikKolumn",
      "category": "Różne"
    },
    "RowsDelimiter": {
      "label": "OgranicznikWierszy",
      "category": "Różne"
    },
    "QuotationSymbol": {
      "label": "SymbolCytowania",
      "category": "Różne"
    },
    "Extension": {
      "label": "Rozszerzenie",
      "category": "Różne",
      "enum": {
        "csv": ".csv",
        "txt": ".txt"
      }
    }
  }
}
