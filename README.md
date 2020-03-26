
## Installation

```bash
$ npm start
```

## Deploy to AWS Elastic Beanstalk
Correct the deployment configuration at gulpfile.js
```javascript
function deploy(cb) {
    eb({
        region: 'ap-southeast-1',
        s3Bucket: {
            bucket: 'elasticbeanstalk-ap-southeast-1-705179926964',    // default: applicationName
        },
        applicationName:'blog-web',
        environmentName: 'tobi-blog',
        versionLabel: '1.2.2',
        sourceBundle: './dist_beanstalk.zip',
        description: 'Add authentication'
    }, cb);
}
```

Run build, zip and deploy
```bash
$ gulp publish
```


