 # file-signature [![Build Status](https://travis-ci.org/leahciMic/file-signature.svg?branch=master)](https://travis-ci.org/leahciMic/file-signature)

 Get file information based on file signature.  This utility is used to get file
 information based on the file signature. It does so by looking at "magic numbers"
 common formats contain.

 Data for this script was generated from:
 http://en.wikipedia.org/wiki/List_of_file_signatures

 ## Example use:
 ```js

var fileSignature = require('file-signature');
console.log(fileSignature.identify('path/to/file.jpg'));

// outputs:
// {
//   extension: 'jpg',
//   description: 'A commonly used method of lossy compression for digital photography (image).',
//   mimeType: 'image/jpg'
// }
```
