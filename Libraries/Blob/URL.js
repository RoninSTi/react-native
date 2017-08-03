/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule URL
 * @flow
 */
<<<<<<< HEAD
'use strict';

const Blob = require('Blob');
const { BlobModule } = require('react-native').NativeModules;
=======

'use strict';

const Blob = require('Blob');

const { BlobModule } = require('NativeModules');
>>>>>>> master

let BLOB_URL_PREFIX = null;

if (typeof BlobModule.BLOB_URI_SCHEME === 'string') {
  BLOB_URL_PREFIX = BlobModule.BLOB_URI_SCHEME + ':';
  if (typeof BlobModule.BLOB_URI_HOST === 'string') {
    BLOB_URL_PREFIX += `//${BlobModule.BLOB_URI_HOST}/`;
  }
}

/**
 * To allow Blobs be accessed via `content://` URIs,
 * you need to register `BlobProvider` as a ContentProvider in your app's `AndroidManifest.xml`:
 *
 * ```xml
 * <manifest>
 *   <application>
 *     <provider
 *       android:name="com.facebook.react.modules.blob.BlobProvider"
 *       android:authorities="@string/blob_provider_authority"
 *       android:exported="false"
 *     />
 *   </application>
 * </manifest>
 * ```
<<<<<<< HEAD
 * And then define the `blob_provider_authority` string in `res/values/strings.xml`. Use a dotted name that's entirely unique to your app:
=======
 * And then define the `blob_provider_authority` string in `res/values/strings.xml`.
 * Use a dotted name that's entirely unique to your app:
>>>>>>> master
 *
 * ```xml
 * <resources>
 *   <string name="blob_provider_authority">your.app.package.blobs</string>
 * </resources>
 * ```
 */
class URL {
  constructor() {
<<<<<<< HEAD
    throw new Error('Creating URL objects is not supported yet.');
=======
    throw new Error('Creating BlobURL objects is not supported yet.');
>>>>>>> master
  }

  static createObjectURL(blob: Blob) {
    if (BLOB_URL_PREFIX === null) {
      throw new Error('Cannot create URL for blob!');
    }
<<<<<<< HEAD
    return `${BLOB_URL_PREFIX}${blob.data.blobId}?offset=${blob.data.offset}&size=${blob.size}`;
=======
    return `${BLOB_URL_PREFIX}${blob.blobId}?offset=${blob.offset}&size=${blob.size}`;
>>>>>>> master
  }

  static revokeObjectURL(url: string) {
    // Do nothing.
  }
}

module.exports = URL;
