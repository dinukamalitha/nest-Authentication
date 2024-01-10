import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from './user.entity';
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '215016G',
            database: 'customer',
            entities: [User],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
          secret: "secret",
          signOptions: {expiresIn: '1d'}
        })

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

