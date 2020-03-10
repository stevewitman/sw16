module.exports = {
  name: 'sw16',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw16',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
