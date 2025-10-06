import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TenantService } from './database/tenant/tenant.service';
import { APP_GUARD, ModuleRef, RouterModule } from '@nestjs/core';
import { routerConfig } from './router.config';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { UserTokensModule } from './modules/acl/user_tokens/user_tokens.module';
import { UsersModule } from './modules/acl/users/users.module';
import { DatabaseProviders } from './config/database.providers';
import { getDataSourceToken } from '@nestjs/typeorm';
import { dataSourceMap } from './config/data-source-map'; 
import { WorkflowModule } from './modules/tools/workflow/workflow.module';
import { WorkflowStepModule } from './modules/tools/workflow_step/workflow_step.module';
import { WorkflowLogModule } from './modules/tools/workflow_log/workflow_log.module'; 
import { UserGroupModule } from './modules/acl/user_group/user_group.module'; 
import { WorkflowAggregatorModule } from './modules/tools/workflow_aggregator/workflow_aggregator.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CustomFieldGroupModule } from './modules/tools/custom_field_group/custom_field_group.module';
import { CustomFieldModule } from './modules/tools/custom_field/custom_field.module';
import { CustomFieldValueModule } from './modules/tools/custom_field_value/custom_field_value.module';
import { ModuleModule } from './modules/acl/module/module.module';
import { DocumentModule } from './modules/document/document/document.module'; 
import { DocumentNumberingModule } from './modules/tools/document_numbering/document_numbering.module';
import { DocumentNumberingCounterModule } from './modules/tools/document_numbering_counter/document_numbering_counter.module';
import { RedisModule } from './common/redis/redis.module';
import { RedisDocumentNumberingWorkerService } from './common/redis/penomoram/document-numbering.worker';


import { ActypeModule } from './modules/amims/actype/actype.module';
import { AircraftModule } from './modules/amims/aircraft/aircraft.module';
import { AircraftDetailModule } from './modules/amims/aircraft_detail/aircraft_detail.module';
import { AtaModule } from './modules/amims/ata/ata.module';
import { BinModule } from './modules/amims/bin/bin.module';
import { CompanyModule } from './modules/amims/company/company.module';
import { ConditionMonitoringModule } from './modules/amims/condition_monitoring/condition_monitoring.module';
import { CurrencyModule } from './modules/amims/currency/currency.module';
import { DoctypeModule } from './modules/amims/doctype/doctype.module'; 
import { DueListOutputModule } from './modules/amims/due_list_output/due_list_output.module';
import { EngineerPmtrModule } from './modules/amims/engineer_pmtr/engineer_pmtr.module';
import { EngineerPmtrItemModule } from './modules/amims/engineer_pmtr_item/engineer_pmtr_item.module';
import { EngineerPrisModule } from './modules/amims/engineer_pris/engineer_pris.module';
import { EngineerPrisItemModule } from './modules/amims/engineer_pris_item/engineer_pris_item.module';
import { EngineerPrisReturnModule } from './modules/amims/engineer_pris_return/engineer_pris_return.module';
import { EngineerPrisReturnItemModule } from './modules/amims/engineer_pris_return_item/engineer_pris_return_item.module';
import { EngineerRtiModule } from './modules/amims/engineer_rti/engineer_rti.module';
import { EngineerRtiIdentifyModule } from './modules/amims/engineer_rti_identify/engineer_rti_identify.module';
import { EngineerRtiPartModule } from './modules/amims/engineer_rti_part/engineer_rti_part.module';
import { FigureIndexModule } from './modules/amims/figure_index/figure_index.module';
import { InspectionModule } from './modules/amims/inspection/inspection.module';
import { InternalGrnModule } from './modules/amims/internal_grn/internal_grn.module';
import { InternalGrnItemModule } from './modules/amims/internal_grn_item/internal_grn_item.module';
import { LastMaintenanceModule } from './modules/amims/last_maintenance/last_maintenance.module'; 
import { LibUploadModule } from './modules/amims/lib_upload/lib_upload.module';
import { LifeTimeLimitModule } from './modules/amims/life_time_limit/life_time_limit.module';
import { LocationFlightModule } from './modules/amims/location_flight/location_flight.module';
import { LogProcessModule } from './modules/amims/log_process/log_process.module';
import { LogSpModule } from './modules/amims/log_sp/log_sp.module';
import { LogTransferModule } from './modules/amims/log_transfer/log_transfer.module';
import { LogTsnTsoModule } from './modules/amims/log_tsn_tso/log_tsn_tso.module';
import { LogUserModule } from './modules/amims/log_user/log_user.module';
import { MaintenanceModule } from './modules/amims/maintenance/maintenance.module';
import { MaintenanceCodeModule } from './modules/amims/maintenance_code/maintenance_code.module'; 
import { MelModule } from './modules/amims/mel/mel.module';
import { MpcGseModule } from './modules/amims/mpc_gse/mpc_gse.module'; 
import { MpcPiroModule } from './modules/amims/mpc_piro/mpc_piro.module';
import { MpcPiroItemModule } from './modules/amims/mpc_piro_item/mpc_piro_item.module';
import { MpcSelfMaintenanceModule } from './modules/amims/mpc_self_maintenance/mpc_self_maintenance.module'; 
import { PartModule } from './modules/amims/part/part.module';
import { PartActypeModule } from './modules/amims/part_actype/part_actype.module';
import { PartAlternativeModule } from './modules/amims/part_alternative/part_alternative.module';
import { PartAtaModule } from './modules/amims/part_ata/part_ata.module';
import { PartCategoryModule } from './modules/amims/part_category/part_category.module';
import { PartConditionModule } from './modules/amims/part_condition/part_condition.module';
import { PartFigureIndexModule } from './modules/amims/part_figure_index/part_figure_index.module';
import { PartInstallModule } from './modules/amims/part_install/part_install.module';
import { PartInstallOldModule } from './modules/amims/part_install_old/part_install_old.module';
import { PartLogModule } from './modules/amims/part_log/part_log.module';
import { PartidModule } from './modules/amims/partid/partid.module';
import { PilotModule } from './modules/amims/pilot/pilot.module';
import { PositionModule } from './modules/amims/position/position.module';
import { PurGrnModule } from './modules/amims/pur_grn/pur_grn.module';
import { PurGrnItemModule } from './modules/amims/pur_grn_item/pur_grn_item.module';
import { PurPoModule } from './modules/amims/pur_po/pur_po.module';
import { PurPoItemModule } from './modules/amims/pur_po_item/pur_po_item.module';
import { PurPrModule } from './modules/amims/pur_pr/pur_pr.module';
import { PurPrItemModule } from './modules/amims/pur_pr_item/pur_pr_item.module';
import { PurPrclModule } from './modules/amims/pur_prcl/pur_prcl.module';
import { PurReturnModule } from './modules/amims/pur_return/pur_return.module';
import { PurReturnItemModule } from './modules/amims/pur_return_item/pur_return_item.module';
import { PurVendorModule } from './modules/amims/pur_vendor/pur_vendor.module';
import { PurVendorContactModule } from './modules/amims/pur_vendor_contact/pur_vendor_contact.module';
import { PurVendorItemModule } from './modules/amims/pur_vendor_item/pur_vendor_item.module';
import { QaRpdModule } from './modules/amims/qa_rpd/qa_rpd.module';
import { QaRpdDispotitionModule } from './modules/amims/qa_rpd_dispotition/qa_rpd_dispotition.module';
import { QaTransferModule } from './modules/amims/qa_transfer/qa_transfer.module';
import { QaTransferItemModule } from './modules/amims/qa_transfer_item/qa_transfer_item.module';
import { RotaryFactorModule } from './modules/amims/rotary_factor/rotary_factor.module';
import { ShippingModule } from './modules/amims/shipping/shipping.module';
import { SiteModule } from './modules/amims/site/site.module';
import { StoreDestroyModule } from './modules/amims/store_destroy/store_destroy.module';
import { StoreTransferModule } from './modules/amims/store_transfer/store_transfer.module';
import { StoreTransferItemModule } from './modules/amims/store_transfer_item/store_transfer_item.module';
import { TdModule } from './modules/amims/td/td.module';
import { TdDetailModule } from './modules/amims/td_detail/td_detail.module';
import { TdDetailAcModule } from './modules/amims/td_detail_ac/td_detail_ac.module';
import { TdRefModule } from './modules/amims/td_ref/td_ref.module';
import { TdTypeModule } from './modules/amims/td_type/td_type.module';
import { TechDefectModule } from './modules/amims/tech_defect/tech_defect.module';
import { TechDiscrepanciesModule } from './modules/amims/tech_discrepancies/tech_discrepancies.module';
import { TechLogModule } from './modules/amims/tech_log/tech_log.module';
import { TechLogEngineModule } from './modules/amims/tech_log_engine/tech_log_engine.module';
import { TechLogEngineCheckModule } from './modules/amims/tech_log_engine_check/tech_log_engine_check.module';
import { TechLogItemModule } from './modules/amims/tech_log_item/tech_log_item.module';
import { TechLogJoModule } from './modules/amims/tech_log_jo/tech_log_jo.module';
import { TypeOfworkModule } from './modules/amims/type_ofwork/type_ofwork.module';
import { WarrantyModule } from './modules/amims/warranty/warranty.module';
import { MpartModule } from './modules/amims/mpart/mpart.module';
import { McurrencyModule } from './modules/amims/mcurrency/mcurrency.module';
import { StockModule } from './modules/amims/stock/stock.module';
import { VDueListOutputModule } from './modules/amims/v_due_list_output/v_due_list_output.module';
import { UnscheduleMaintenanceModule } from './modules/amims/unschedule_maintenance/unschedule_maintenance.module';
import { MaintenanceDocumentModule } from './modules/amims/maintenance_document/maintenance_document.module';
import { MaintenanceMaterialModule } from './modules/amims/maintenance_material/maintenance_material.module';
import { MaintenanceProgramModule } from './modules/amims/maintenance_program/maintenance_program.module';
import { MaintenanceProgramDocumentModule } from './modules/amims/maintenance_program_document/maintenance_program_document.module';
import { MaintenanceProgramMaterialModule } from './modules/amims/maintenance_program_material/maintenance_program_material.module';
import { MaintenanceProgramTaskModule } from './modules/amims/maintenance_program_task/maintenance_program_task.module';
import { WpJoModule } from './modules/amims/wp_jo/wp_jo.module';
import { WpModule } from './modules/amims/wp/wp.module';
import { WorkCompletedModule } from './modules/amims/work_completed/work_completed.module';
const COM = [
  ActypeModule,
  AircraftModule,
  AircraftDetailModule,
  AtaModule,
  BinModule,
  CompanyModule,
  ConditionMonitoringModule,
  CurrencyModule,
  DoctypeModule,
  DueListOutputModule,
  EngineerPmtrModule,
  EngineerPmtrItemModule,
  EngineerPrisModule,
  EngineerPrisItemModule,
  EngineerPrisReturnModule,
  EngineerPrisReturnItemModule,
  EngineerRtiModule,
  EngineerRtiIdentifyModule,
  EngineerRtiPartModule,
  FigureIndexModule,
  InspectionModule,
  InternalGrnModule,
  InternalGrnItemModule,
  LastMaintenanceModule,
  LibUploadModule,
  LifeTimeLimitModule,
  LocationFlightModule,
  LogProcessModule,
  LogSpModule,
  LogTransferModule,
  LogTsnTsoModule,
  LogUserModule,
  MaintenanceModule,
  MaintenanceCodeModule,
  MelModule,
  MpcGseModule,
  MpcPiroModule,
  MpcPiroItemModule,
  MpcSelfMaintenanceModule,
  PartModule,
  PartActypeModule,
  PartAlternativeModule,
  PartAtaModule,
  PartCategoryModule,
  PartConditionModule,
  PartFigureIndexModule,
  PartInstallModule,
  PartInstallOldModule,
  PartLogModule,
  PartidModule,
  PilotModule,
  PositionModule,
  PurGrnModule,
  PurGrnItemModule,
  PurPoModule,
  PurPoItemModule,
  PurPrModule,
  PurPrItemModule,
  PurPrclModule,
  PurReturnModule,
  PurReturnItemModule,
  PurVendorModule,
  PurVendorContactModule,
  PurVendorItemModule,
  QaRpdModule,
  QaRpdDispotitionModule,
  QaTransferModule,
  QaTransferItemModule,
  RotaryFactorModule,
  ShippingModule,
  SiteModule,
  StoreDestroyModule,
  StoreTransferModule,
  StoreTransferItemModule,
  TdModule,
  TdDetailModule,
  TdDetailAcModule,
  TdRefModule,
  TdTypeModule,
  TechDefectModule,
  TechDiscrepanciesModule,
  TechLogModule,
  TechLogEngineModule,
  TechLogEngineCheckModule,
  TechLogItemModule,
  TechLogJoModule,
  TypeOfworkModule,
  WarrantyModule,
  MpartModule,
  McurrencyModule,
  StockModule,
  VDueListOutputModule,
  UnscheduleMaintenanceModule,
  MaintenanceDocumentModule,
  MaintenanceMaterialModule,
  MaintenanceProgramModule,
  MaintenanceProgramDocumentModule,
  MaintenanceProgramMaterialModule,
  MaintenanceProgramTaskModule,
  WpJoModule,
  WpModule,
  WorkCompletedModule
];

@Module({
    imports: [JwtModule.registerAsync({
        useFactory: () => ({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
        }),
    }),
        AppConfigModule,

    JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
            secret: config.get('JWT_SECRET'),
            signOptions: { expiresIn: '6h' },
        }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ...DatabaseProviders,
    RouterModule.register(routerConfig),
        AuthModule, AuthProtectedModule,
        UserTokensModule, UsersModule,   DocumentModule,
        WorkflowModule, WorkflowLogModule, WorkflowStepModule,  UserGroupModule, 
        WorkflowAggregatorModule, ModuleModule,
        CustomFieldGroupModule, CustomFieldModule, CustomFieldValueModule,
        DocumentNumberingModule, DocumentNumberingCounterModule,
        PassportModule,
        RedisModule,
        ...COM
    ],
    controllers: [AppController],
    providers: [
        AppService, TenantService, JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard
        },
        RedisDocumentNumberingWorkerService
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes('auth');
    }
    constructor(private moduleRef: ModuleRef) { }

    async onModuleInit() {
        const dbNames = ['acl', 'document', 'pelanggan', 'tools','amims'];

        for (const db of dbNames) {
            const ds = await this.moduleRef.get(getDataSourceToken(db), { strict: false });
            dataSourceMap[db] = ds;
        }

        console.log('✅ DataSourceMap is ready:', Object.keys(dataSourceMap));
    }
}
