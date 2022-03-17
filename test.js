const s3empty = require('./index');

const bucket = 'mybucketname';
const s3Conf = {
  "S3_SECRET": "BLAH",
  "S3_ACCESS_KEY": "BLAH",
  "S3_REGION": "eu-west-1"
};

s3empty.empty(s3Conf, bucket)
  .then(() => console.log('s3empty done'));

