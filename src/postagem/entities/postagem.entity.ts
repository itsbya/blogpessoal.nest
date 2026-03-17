
import { Transform, TransformFnParams} from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagens"}) // CREATE TABLE tb_postagens
export class Postagem{
   
   @ApiProperty() 
   @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
   id: number;


   @ApiProperty() 
   @Transform(({value} : TransformFnParams) => value?.trim()) // Remover espaços em branco 
   @IsNotEmpty() //Força digitação
   @Column({length: 100, nullable: false})// VARCHAR(100) NOT NULL
    titulo: string;


   @ApiProperty() 
   @Transform(({value} : TransformFnParams) => value?.trim()) // Remover espaços em branco 
   @IsNotEmpty() //Força digitação
   @Column({length: 1000, nullable: false})// VARCHAR(1000) NOT NULL
    texto: string;


    @ApiProperty() 
    @UpdateDateColumn()
    data: Date;


    //Relacionamento com tema
    @ApiProperty({ type: () => Tema }) 
    @ManyToOne(() => Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema;


      //Relacionamento com usuario
    @ApiProperty({ type: () => Usuario })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;

}