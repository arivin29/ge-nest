import { PaymentWidgetController } from './payment_widget.controller';
import { PaymentWidgetService } from './payment_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PelangganPayment } from 'src/entities/pelanggan';
import { PaymentReportController } from './payment_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPayment],'pelanggan')],
  controllers: [PaymentController, PaymentReportController, PaymentWidgetController],
  providers: [PaymentService, PaymentWidgetService],
})
export class PaymentModule {}
