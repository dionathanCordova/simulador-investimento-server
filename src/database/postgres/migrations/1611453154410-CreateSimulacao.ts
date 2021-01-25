import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateSimulacao1611453154410 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'simulacao',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'
               },
               {
                  name: 'valor_inicial',
                  type: 'varchar'
               },
               {
                  name: 'valor_mensal',
                  type: 'varchar'
               },
               {
                  name: 'meses_investimento',
                  type: 'varchar'
               },
               {
                  name: 'total_investido',
                  type: 'varchar'
               },
               {
                  name: 'total_rendimento_cdb',
                  type: 'varchar'
               },
               {
                  name: 'taxa_percentual_CDI',
                  type: 'varchar'
               },
               {
                  name: 'taxa_DI',
                  type: 'varchar'
               },
               {
                  name: 'total_rendimento_poupanca',
                  type: 'varchar'
               },
               {
                  name: 'taxa_poupanca',
                  type: 'varchar'
               },
               {
                  name: 'taxa_selid',
                  type: 'varchar'
               },
               {
                  name: 'user_id',
                  type: 'uuid'
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
               {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ],
            foreignKeys: [
               {
                  name: 'UserFK',
                  referencedTableName: 'users',
                  referencedColumnNames: ['id'],
                  columnNames: ['user_id'],
                  onDelete: 'CASCADE',
                  onUpdate: 'CASCADE'
               }
            ]
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('simulacao');
   }
}











