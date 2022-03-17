S3 Bucket empty
---------------

Deletes all files and directories in an AWS S3 Bucket.  

## Installation:

    npm install s3-bucket-empty --save-dev 

## Usage:

    const s3empty = require('s3-bucket-empty');
    const s3Conf = {
      "S3_SECRET": "BLAH",
      "S3_ACCESS_KEY": "BLAH",
      "S3_REGION": "eu-west-1"
    };
    s3empty.empty(s3Conf, 'mybucketname')
           .then(() => console.log('s3empty done'));
 