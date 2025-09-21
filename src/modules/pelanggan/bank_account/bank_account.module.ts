import { BankAccountWidgetController } from './bank_account_widget.controller';
import { BankAccountWidgetService } from './bank_account_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountService } from './bank_account.service';
import { BankAccountController } from './bank_account.controller';
import { PelangganBankAccount } from 'src/entities/pelanggan';
import { BankAccountReportController } from './bank_account_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganBankAccount],'pelanggan')],
  controllers: [BankAccountController, BankAccountReportController, BankAccountWidgetController],
  providers: [BankAccountService, BankAccountWidgetService],
})
export class BankAccountModule {}
