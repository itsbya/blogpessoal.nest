import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_temas"}) // CREATE TABLE tb_postagens
export class Tema{

    @PrimaryGeneratedColumn()
    @ApiProperty()  // PRIMARY KEY(id) AUTO INCREMENT
    id: number;
    
   @IsNotEmpty() //Força digitação
   @Column({length: 255, nullable: false}) // VARCHAR(100) NOT NULL
   @ApiProperty() 
   descricao: string;
   


    //Relacionamento com postagem
    @ApiProperty() 
    @OneToMany(() => Postagem, (postagem)=> postagem.tema)
    postagem: Postagem[];
   
}