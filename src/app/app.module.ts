import { Module, UseInterceptors } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { LogInterceptor } from 'src/interceptors/log.interceptor';

@Module({
	imports: [UserModule],
	controllers: [AppController],
	providers: [AppService],
})

export class AppModule {

	
}
