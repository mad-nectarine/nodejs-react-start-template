import {Express} from 'express';

export default function RouteConfig(app: Express) {
	
	app.use("/", require("/routes/index"));
	app.use("/", require("/routes/samples"));
	
}