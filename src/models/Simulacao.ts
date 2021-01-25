import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import User from './UserModel';

@Entity('simulacao')
export default class Simulacao{
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   valor_inicial: number;

   @Column()
   valor_mensal: number;

   @Column()
   meses_investimento: number;

   @Column()
   total_investido: number;

   @Column()
   total_rendimento_cdb: number;

   @Column()
   taxa_percentual_CDI: number;

   @Column()
   taxa_DI: number;

   @Column()
   total_rendimento_poupanca: number;

   @Column()
   taxa_poupanca: number;

   @Column()
   taxa_selid: number;

   @Column()
   user_id: string;

   @ManyToOne(() => User, user => user.simulacao)
   @JoinColumn({name: 'user_id'})
   user: User;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}