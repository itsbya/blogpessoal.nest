import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Tema } from "../entities/tema.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class TemaService{
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>,
    ){}

    async findAll(): Promise<Tema[]>{
        // SELECT * FROM tb_temas
        return this.temaRepository.find({
            relations:{
                postagem:true
            } 
          })
    }

    async findById(id: number): Promise<Tema>{
        // Select * FROM tb_temas WHERE id = ?;
        const tema = await this.temaRepository.findOne({
              where: {
                id
            }, 
            relations:{
                postagem:true
            } 
        } )

        if(!tema)
            throw new HttpException('Tema não encontrada!', HttpStatus.NOT_FOUND);

        return tema;
}

       async findAllByDescricao(descricao: string): Promise<Tema[]>{
    // SELECT * FROM tb_temas WHERE decrição LIKE '%?%';
    return this.temaRepository.find({
      where:{
        descricao: ILike(`%${descricao}%`)
      }, 
      relations:{
                postagem:true
            } 
    })
  }

  async create(tema: Tema): Promise<Tema>{
    
    return this.temaRepository.save(tema);
  }

  async update(tema: Tema): Promise<Tema>{

    if (!tema.id || tema.id <= 0)
      throw new HttpException("O ID da tema é inválido!", HttpStatus.BAD_REQUEST);

    await this.findById(tema.id);

  
    return this.temaRepository.save(tema);
  }

  async delete(id: number): Promise<DeleteResult>{
    
    await this.findById(id);

    // DELETE tb_temas FROM id = ?;
    return this.temaRepository.delete(id);
    
  }
}
