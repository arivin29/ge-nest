import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomFieldValueService } from './custom_field_value.service';
import { CustomFieldValueController } from './custom_field_value.controller';
import { CustomFieldValue } from './entities/custom_field_value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomFieldValue])],
  controllers: [CustomFieldValueController],
  providers: [CustomFieldValueService],
})
export class CustomFieldValueModule {}
