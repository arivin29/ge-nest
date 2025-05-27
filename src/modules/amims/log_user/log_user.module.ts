import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogUserService } from './log_user.service';
import { LogUserController } from './log_user.controller';
import { AmimsLogUser } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLogUser],'amims')],
  controllers: [LogUserController],
  providers: [LogUserService],
})
export class LogUserModule {}
