module.exports = [
  {
    byteSeq: new Buffer([0xff, 0xd8, 0xff]),
    extension: 'jpg',
    description: 'A commonly used method of lossy compression for digital photography (image).',
    mimeType: {
      mime: 'image/jpg',
      extensions: ['jpg', 'jpeg']
    }
  },
  {
    byteSeq: new Buffer([0x42, 0x4d]),
    extension: 'bmp',
    mimeType: {
      mime: 'image/bmp',
      extensions: ['bmp']
    }
  },
  {
    byteSeq: new Buffer([0x47, 0x49, 0x46, 0x38]),
    extension: 'gif',
    mimeType: {
      mime: 'image/gif',
      extensions: ['gif']
    }
  },
  {
    byteSeq: new Buffer([0x89, 0x50, 0x4e, 0x47]),
    extension: 'png',
    mimeType: {
      mime: 'image/png',
      extensions: ['png']
    }
  },
  {
    byteSeq: new Buffer([0x4d, 0x4d, 0x00, 0x2a]),
    extension: 'tif',
    mimeType: {
      mime: 'image/tiff',
      extensions: ['tif', 'tiff']
    }
  },
  {
    byteSeq: new Buffer([0x49, 0x49, 0x2a, 0x00]),
    extension: 'tif',
    mimeType: {
      mime: 'image/tiff',
      extensions: ['tif', 'tiff']
    }
  },
  {
    byteSeq: new Buffer([0x49, 0x20, 0x49]),
    extension: 'tif',
    mimeType: {
      mime: 'image/tiff',
      extensions: ['tif', 'tiff']
    }
  },
  {
    "byteSeq":new Buffer([0x00]),
    "extension":[
      "PIC",
      "PIF",
      "SEA",
      "YTR"
    ],
    "description":"IBM Storyboard bitmap file\nWindows Program Information File\nMac Stuffit Self-Extracting Archive\nIRIS OCR data file\n"
  },
  {
    "byteSeq":new Buffer([0xBE, 0xBA, 0xFE, 0xCA]),
    "extension":[
      "DBA"
    ],
    "description":"Palm Desktop Calendar Archive"
  },
  {
    "byteSeq":new Buffer([0x00, 0x01, 0x42, 0x44]),
    "extension":[
      "DBA"
    ],
    "description":"Palm Desktop To Do Archive"
  },
  {
    "byteSeq":new Buffer([0x00, 0x01, 0x44, 0x54]),
    "extension":[
      "TDA"
    ],
    "description":"Palm Desktop Calendar Archive"
  },
  {
    "byteSeq":new Buffer([0x00, 0x01, 0x00, 0x00]),
    "extension":[
      "..."
    ],
    "description":"Palm Desktop Data File (Access format)"
  },
  {
    "byteSeq":new Buffer([0x00, 0x00, 0x01, 0x00]),
    "extension":[
      "ico"
    ],
    "description":"Computer icon encoded in ICO file format[1]",
    "mimeType":{
      "mime":"image/x-icon",
      "extensions":[
        "ico"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x1F, 0x9D]),
    "extension":[
      "z",
      "tar.z"
    ],
    "description":"compressed file (often tar zip)\nusing Lempel-Ziv-Welch algorithm\n"
  },
  {
    "byteSeq":new Buffer([0x1F, 0xA0]),
    "extension":[
      "z",
      "tar.z"
    ],
    "description":"Compressed file (often tar zip)\nusing LZH algorithm\n"
  },
  {
    "byteSeq":new Buffer([0x47, 0x49, 0x46, 0x38, 0x37, 0x61, 0x47, 0x49, 0x46, 0x38, 0x39, 0x61]),
    "extension":[
      "gif"
    ],
    "description":"Image file encoded in the Graphics Interchange Format (GIF)[2]",
    "mimeType":{
      "mime":"image/gif",
      "extensions":[
        "gif"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x49, 0x49, 0x2A, 0x00, 0x4D, 0x4D, 0x00, 0x2A]),
    "extension":[
      "tif",
      "tiff"
    ],
    "description":"Tagged Image File Format",
    "mimeType":{
      "mime":"image/tiff",
      "extensions":[
        "tiff",
        "tif"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x4D, 0x5A]),
    "extension":[
      "exe"
    ],
    "description":"DOS MZ executable file format and its descendants (including NE and PE)",
    "mimeType":{
      "mime":"application/x-msdownload",
      "extensions":[
        "exe",
        "dll",
        "com",
        "bat",
        "msi"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x00]),
    "extension":[
      "rar"
    ],
    "description":"RAR archive version 1.50 onwards[3]",
    "mimeType":{
      "mime":"application/x-rar-compressed",
      "extensions":[
        "rar"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x01, 0x00]),
    "extension":[
      "rar"
    ],
    "description":"RAR archive version 5.0 onwards[4]",
    "mimeType":{
      "mime":"application/x-rar-compressed",
      "extensions":[
        "rar"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x7F, 0x45, 0x4C, 0x46]),
    "extension":[
      ""
    ],
    "description":"Executable and Linkable Format"
  },
  {
    "byteSeq":new Buffer([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
    "extension":[
      "png"
    ],
    "description":"Image encoded in the Portable Network Graphics format[5]",
    "mimeType":{
      "mime":"image/png",
      "extensions":[
        "png"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0xCA, 0xFE, 0xBA, 0xBE]),
    "extension":[
      "class"
    ],
    "description":"Java class file, Mach-O Fat Binary",
    "mimeType":{
      "mime":"application/java-vm",
      "extensions":[
        "class"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0xEF, 0xBB, 0xBF]),
    "extension":[
      ""
    ],
    "description":"UTF-8 encoded Unicode byte order mark, commonly seen in text files."
  },
  {
    "byteSeq":new Buffer([0xFE, 0xED, 0xFA, 0xCE]),
    "extension":[
      ""
    ],
    "description":"Mach-O binary (32-bit)"
  },
  {
    "byteSeq":new Buffer([0xFE, 0xED, 0xFA, 0xCF]),
    "extension":[
      ""
    ],
    "description":"Mach-O binary (64-bit)"
  },
  {
    "byteSeq":new Buffer([0xCE, 0xFA, 0xED, 0xFE]),
    "extension":[
      ""
    ],
    "description":"Mach-O binary (reverse byte ordering scheme, 32-bit)[6]"
  },
  {
    "byteSeq":new Buffer([0xCF, 0xFA, 0xED, 0xFE]),
    "extension":[
      ""
    ],
    "description":"Mach-O binary (reverse byte ordering scheme, 64-bit)[7]"
  },
  {
    "byteSeq":new Buffer([0xFF, 0xFE]),
    "extension":[
      ""
    ],
    "description":"Byte-order mark for text file encoded in little-endian 16-bit Unicode Transfer Format"
  },
  {
    "byteSeq":new Buffer([0xFF, 0xFE, 0x00, 0x00]),
    "extension":[
      ""
    ],
    "description":"Byte-order mark for text file encoded in little-endian 32-bit Unicode Transfer Format"
  },
  {
    "byteSeq":new Buffer([0x25, 0x50, 0x44, 0x46]),
    "extension":[
      "pdf"
    ],
    "description":"PDF documents",
    "mimeType":{
      "mime":"application/pdf",
      "extensions":[
        "pdf"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9, 0x00, 0xAA, 0x00, 0x62, 0xCE, 0x6C]),
    "extension":[
      "asf",
      "wma",
      "wmv"
    ],
    "description":"Advanced Systems Format[8]",
    "mimeType":{
      "mime":"video/x-ms-asf",
      "extensions":[
        "asf",
        "asx"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x24, 0x53, 0x44, 0x49, 0x30, 0x30, 0x30, 0x31]),
    "extension":[
      ""
    ],
    "description":"System Deployment Image, a disk image format used by Microsoft"
  },
  {
    "byteSeq":new Buffer([0x4F, 0x67, 0x67, 0x53]),
    "extension":[
      "ogg",
      "oga",
      "ogv"
    ],
    "description":"Ogg, an open source media container format",
    "mimeType":{
      "mime":"audio/ogg",
      "extensions":[
        "oga",
        "ogg",
        "spx"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x38, 0x42, 0x50, 0x53]),
    "extension":[
      "psd"
    ],
    "description":"Photoshop Document file, Adobe Photoshop's native file format",
    "mimeType":{
      "mime":"image/vnd.adobe.photoshop",
      "extensions":[
        "psd"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0xFF, 0xFB]),
    "extension":[
      "mp3"
    ],
    "description":"MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which's appended at the end of the file)",
    "mimeType":{
      "mime":"audio/mpeg",
      "extensions":[
        "mpga",
        "mp2",
        "mp2a",
        "mp3",
        "m2a",
        "m3a"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x49, 0x44, 0x33]),
    "extension":[
      "mp3"
    ],
    "description":"MP3 file with an ID3v2 container",
    "mimeType":{
      "mime":"audio/mpeg",
      "extensions":[
        "mpga",
        "mp2",
        "mp2a",
        "mp3",
        "m2a",
        "m3a"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x42, 0x4D]),
    "extension":[
      "bmp",
      "dib"
    ],
    "description":"BMP file, a bitmap format used mostly in the Windows world",
    "mimeType":{
      "mime":"image/bmp",
      "extensions":[
        "bmp"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x43, 0x44, 0x30, 0x30, 0x31]),
    "extension":[
      "iso"
    ],
    "description":"ISO9660 CD/DVD image file[9]",
    "mimeType":{
      "mime":"application/x-iso9660-image",
      "extensions":[
        "iso"
      ]
    }
  },
  {
    "byteSeq":new Buffer([0x53, 0x49, 0x4d, 0x50, 0x4c, 0x45, 0x20, 0x20, 0x3d, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x54]),
    "extension":[
      "fits"
    ],
    "description":"Flexible Image Transport System (FITS)[10]"
  },
  {
    "byteSeq":new Buffer([0x66, 0x4C, 0x61, 0x43]),
    "extension":[
      "flac"
    ],
    "description":"Free Lossless Audio Codec[11]",
    "mimeType":{
      "mime":"audio/x-flac",
      "extensions":[
        "flac"
      ]
    }
  }
];