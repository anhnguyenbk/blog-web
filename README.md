# Blog Web

## Installation

```bash
npm start
```

## Deployment
### PM2 (IaaS)
1. Build

    ```npm run build```

2. Run the distribution application

    ```pm2 start ./dist/main.js --name=blog-web```

3. Setup domain

    Create nginx site `/etc/nginx/sites-available/anhng.net`

    ```
    server {
        listen 80;
        listen [::]:80;

        root /var/www/html/anhng.net;
        index index.html index.htm index.nginx-debian.html;

        server_name anhng.net www.anhng.net;
        
        access_log /var/log/nginx/anhng.net.access.log;
        error_log /var/log/nginx/anhng.net.error.log;
        
        location / {
                proxy_pass http://localhost:5000;
        }
    }
    ```

    Create site enabled
    
    ```sudo ln -s /etc/nginx/sites-available/anhng.net /etc/nginx/sites-enabled/anhng.net```

    Restart nginx

    ```sudo service nginx restart```

### AWS Elastic Beanstalk
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


