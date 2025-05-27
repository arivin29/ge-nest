import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibUploadService } from './lib_upload.service';
import { LibUploadController } from './lib_upload.controller';
import { AmimsLibUpload } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLibUpload],'amims')],
  controllers: [LibUploadController],
  providers: [LibUploadService],
})
export class LibUploadModule {}
