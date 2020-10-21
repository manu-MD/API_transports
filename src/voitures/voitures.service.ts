import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VoitureCreateDto from './dto/voiture-create.dto';
import { Voitures } from './voitures.entity';

@Injectable()
export class VoituresService {
  constructor(
    @InjectRepository(Voitures)
    private readonly voituresRepository: Repository<Voitures>,
  ){
    
  }

  async create(voitureCreateDto: VoitureCreateDto): Promise<Voitures> {
    return this.voituresRepository.save(voitureCreateDto);
  }

  async findAll(): Promise<Voitures[]> {
    return this.voituresRepository.find();   
  }
}
