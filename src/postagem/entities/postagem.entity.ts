
import { Transform, TransformFnParams} from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_postagens"}) // CREATE TABLE tb_postagens
export class Postagem{

   @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
   id: number;

   @Transform(({value} : TransformFnParams) => value?.trim()) // Remover espaços em branco 
   @IsNotEmpty() //Força digitação
   @Column({length: 100, nullable: false})// VARCHAR(100) NOT NULL
    titulo: string;

   @Transform(({value} : TransformFnParams) => value?.trim()) // Remover espaços em branco 
   @IsNotEmpty() //Força digitação
   @Column({length: 1000, nullable: false})// VARCHAR(1000) NOT NULL
    texto: string;
   
    @UpdateDateColumn()
    data: Date;


    //Relacionamento com tema
    @ManyToOne(() => Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema;


      //Relacionamento com usuario
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;

}