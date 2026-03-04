import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({name: "tb_temas"}) // CREATE TABLE tb_postagens
export class Tema{

    @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
    id: number;
    
   @IsNotEmpty() //Força digitação
   @Column({length: 255, nullable: false})// VARCHAR(100) NOT NULL
   descricao: string;
   


    //Relacionamento com postagem
    @OneToMany(() => Postagem, (postagem)=> postagem.tema)
    postagem: Postagem[];
   
}