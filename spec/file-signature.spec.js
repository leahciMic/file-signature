var fileSignature = require('../file-signature.js');

describe('File signatures', function() {
  it('should get correct mime type for gif', function() {
    var info = fileSignature.identify('spec/example.gif');
    expect(info.mimeType).toEqual('image/gif');
  });
  it('should get correct mime type for jpg', function() {
    var info = fileSignature.identify('spec/example.jpg');
    expect(info.mimeType).toEqual('image/jpg');
  });
  it('should get correct mime type for png', function() {
    var info = fileSignature.identify('spec/example.png');
    expect(info.mimeType).toEqual('image/png');
  });
})
