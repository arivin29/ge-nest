import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { McurrencyService } from './mcurrency.service';
import { McurrencyController } from './mcurrency.controller';
import { AmimsMcurrency } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMcurrency],'amims')],
  controllers: [McurrencyController],
  providers: [McurrencyService],
})
export class McurrencyModule {}
