import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import cookieParser from "cookie-parser"
import { AppModule } from "~/app/app.module"

const bootstrap = async () => {
	const app = await NestFactory.create( AppModule )
	app.enableCors()
	app.use( cookieParser() )

	const config = new DocumentBuilder().setTitle( "DRS" ).setVersion( "1.0" ).build()
	const documentFactory = () => SwaggerModule.createDocument( app, config )
	SwaggerModule.setup( "api/swaggar", app, documentFactory )

	const port = 8081

	const listener = app.listen( port )
	return listener
}

bootstrap()
