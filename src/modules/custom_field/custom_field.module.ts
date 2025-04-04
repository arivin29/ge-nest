import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomFieldService } from './custom_field.service';
import { CustomFieldController } from './custom_field.controller';
import { CustomField } from './entities/custom_field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomField])],
  controllers: [CustomFieldController],
  providers: [CustomFieldService],
})
export class CustomFieldModule {}
