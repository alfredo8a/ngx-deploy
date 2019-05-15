# Deploy project to hosting server

This is a console command for deploy your aungular project to a hosting server.

### Install

You only need run 
```bash
ng add ngx-deploy
```
this will make a new file where you should put que config of hosting server for each environments, this configuration is taken of your angular application.

```
src/enviroments/deploy.json
"dev": {
		"source": "dist/folder",    <-- this automaticaly set 
		"dest": "folder",           <-- this automaticaly set 
		"host": "",                 <-- you can use ip or dns
		"user": "",                 <-- user for connect 
		"path": ""                  <-- htdocs path in server
	}
```

### Deploy
Inside folder run
```bash
ngx-deploy          <-- deploy DEV
ngx-deploy -c env   <-- especific ENV to deploy 
```

That's it!
 