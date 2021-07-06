import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthService } from './auth.service';
import { UserModel } from './user.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from '../configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './srategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
	TypegooseModule.forFeature([
		{
			typegooseClass: UserModel,
			schemaOptions: {
				collection: 'User'
			}
		}
	]),
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig
		}),
		PassportModule
  ],
  providers: [AuthService, JwtStrategy]
})

export class AuthModule {}
