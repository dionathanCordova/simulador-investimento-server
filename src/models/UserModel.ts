import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   UpdateDateColumn,
   CreateDateColumn,
   OneToMany,
} from 'typeorm';

import Simulacao from './Simulacao';

@Entity('users')
export default class User {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   email: string;

   @Column()
   whatsapp: string;

   @Column({ default: () => 0 })
   qtd_simulacoes: number;

   @OneToMany(() => Simulacao, simulacao => simulacao.user)
   simulacao: Simulacao[];

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}