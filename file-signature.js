/**
 *
 * Get file information based on file signature
 *
 * This utility is used to get file information based on the file signature.
 *
 * Data for this script was generated from:
 * http://en.wikipedia.org/wiki/List_of_file_signatures
 *
 * Example use:
 *
 * fileSignature = require('file-signature');
 * fileSignature.identify('path/to/file');
 *
 * {
 *   extension: 'jpg',
 *   description: 'A commonly used method of lossy compression for digital photography (image).',
 *   mimeType: 'image/jpg'
 * }
 *
 */

var fs = require('fs'),
    signatures = require('./signatures.js');

/**
 * bufferIsEqual compares two buffers and returns true or false based on their
 * equality
 */
var bufferIsEqual = function(buf1, buf2) {
  var i;
  if (buf1.length != buf2.length)
    return false;
  for (i = buf1.length - 1; i >= 0; i--)
    if (buf1[i] != buf2[i])
      return false;
  return true;
};

function FileSignature() {
}

/**
 * Looks for a signature match, and returns information about the signature
 *
 * returns undefined if no match
 */
FileSignature.prototype.identify = function(pathTo) {
  var fd,
      buf = new Buffer(256),
      i;

  fd = fs.openSync(pathTo, 'r');
  fs.readSync(fd, buf, 0, buf.length, 0);
  fs.closeSync(fd);

  for (i = signatures.length - 1; i >= 0; i--) {
    if (bufferIsEqual(buf.slice(0, signatures[i].byteSeq.length), signatures[i].byteSeq)) {
      return {
        extension: signatures[i].extension,
        description: signatures[i].description || '',
        mimeType: signatures[i].mimeType.mime || 'application/octet-stream'
      };
    }
  }

  return undefined;
};

module.exports = new FileSignature();