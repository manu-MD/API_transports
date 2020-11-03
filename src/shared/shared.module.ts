import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Couleurs } from './couleurs/couleurs.entity';
import { CouleursService } from './couleurs/couleurs.service';
import { MarquesCategories } from './marques/marques-categories.entity';
import { MarquesCategoriesService } from './marques/marques-categories.service';
import { Marques } from './marques/marques.entity';
import { MarquesService } from './marques/marques.service';
import { TypesCategories } from './types/types-categories.entity';
import { TypesCategoriesService } from './types/types-categories.service';
import { Types } from './types/types.entity';
import { TypesService } from './types/types.service';
import { MarquesController } from './marques/marques.controller';
import { Connection } from 'typeorm';
import { TypeController } from './types/types.controller';
import { CouleurController } from './couleurs/couleurs.controller';
import { CouleursCategories } from './couleurs/couleurs-categories.entity';

@Module({
  controllers: [
    MarquesController,
    TypeController,
    CouleurController
  ],
  imports: [
    TypeOrmModule.forFeature([
      Couleurs, 
      Marques, 
      Types,
      MarquesCategories, 
      TypesCategories,
      CouleursCategories     
    ])
  ],
  providers: [
    CouleursService, 
    MarquesService, 
    TypesService,
    MarquesCategoriesService,
    TypesCategoriesService,
    TypeOrmModule,
    CouleursCategories
  ],
  exports: [
    MarquesCategoriesService,
    TypesCategoriesService,
    CouleursCategories
  ]
})
export class SharedModule {
  
  constructor(
    private connection: Connection
  ) {
  }

  async onModuleInit() {
    try {
      await this.createTypesCategories();
      await this.createTypes();
      await this.createMarques();
      await this.createCouleurs();
    } catch(e) {
      console.log('err', e);
    }
  }

  async createTypesCategories() {
    const arrayCategories = [
      {
        name: 'Voiture'
      },
      { 
        name: 'Moto'
      },
      {
        name: 'Bateau'
      },
      {
        name: 'Camion'
      }
    ];
    for (const c of arrayCategories) {
      const exists = await this.connection.getRepository(TypesCategories).findOne({
        where: {
          name: c.name
        }
      });
      if (!exists) {
        const categoryObj = this.connection.getRepository(TypesCategories).create(c);
        await this.connection.getRepository(TypesCategories).save(categoryObj);
      }
    }
  }

  async createTypes() {
    const arrayTypes = [
      {
        type: 'Citadine',
        categoryName: 'Voiture'
      },
      {
        type: 'Berline',
        categoryName: 'Voiture'
      },
      {
        type: 'Break',
        categoryName: 'Voiture'
      },
      {
        type: 'Monospace',
        categoryName: 'Voiture'
      },
      {
        type: 'SUV',
        categoryName: 'Voiture'
      },
      {
        type: 'Coupé',
        categoryName: 'Voiture'
      },
      {
        type: 'Roadster',
        categoryName: 'Moto'
      },
      {
        type: 'Sportive',
        categoryName: 'Moto'
      },
      {
        type: 'Trail',
        categoryName: 'Moto'
      },
      {
        type: 'Custom',
        categoryName: 'Moto'
      },
    ];
    for (const t of arrayTypes) {
      const exists = await this.connection.getRepository(Types).findOne({
        where: {
          type: t.type
        }
      });
    if (!exists) {
      const category = await this.connection.getRepository(TypesCategories).findOne({
        where: {
          name: t.categoryName
        }
    });
        const tObj = this.connection.getRepository(Types).create({
          type: t.type,
          category,
        });
        await this.connection.getRepository(Types).save(tObj);
      }
    }
  }
  
  async createMarques() {
    const arrayMarques = [
      {
      name: 'Peugeot',
      categoryName: 'Voiture'
      },
      {
      name: 'Renault',
      categoryName: 'Voiture'
      },
      {
      name: 'Citroen',
      categoryName: 'Voiture'
      },
      {
      name: 'Audi',
      categoryName: 'Voiture'
      },
      {
      name: 'Volkswagen',
      categoryName: 'Voiture'
      },
      {
      name: 'Toyota',
      categoryName: 'Voiture'
      },
      {
      name: 'Honda',
      categoryName: 'Moto'
      },
      {
      name: 'Yamaha',
      categoryName: 'Moto'
      },
      {
      name: 'Suzuki',
      categoryName: 'Moto'
      },
      {
      name: 'Kawasaki',
      categoryName: 'Moto'
      },
      {
      name: 'Ktm',
      categoryName: 'Moto'
      },
      {
      name: 'Harley Davidson',
      categoryName: 'Moto'
      },
      {
      name: 'Beneteau',
      categoryName: 'Bateau'
      },
      {
      name: 'Jeanneau',
      categoryName: 'Bateau'
      },
      {
      name: 'Dufour',
      categoryName: 'Bateau'
      },
      {
      name: 'Zodiac',
      categoryName: 'Bateau'
      },
      {
      name: 'Scania',
      categoryName: 'Camion'
      },
      {
      name: 'Volvo',
      categoryName: 'Camion'
      },
      {
      name: 'Man',
      categoryName: 'Camion'
      },
      {
      name: 'Mercedes',
      categoryName: 'Camion'
      },
    ];
    for (const m of arrayMarques) {
      const exists = await this.connection.getRepository(Marques).findOne({
        where: {
          name: m.name
        }
      });
      if (!exists) {
        const category = await this.connection.getRepository(TypesCategories).findOne({
          where: {
            name: m.categoryName
          }
        });
        const tObj = this.connection.getRepository(Marques).create({
          name: m.name,
          category,
        });
        await this.connection.getRepository(Marques).save(tObj);
      }
    }
  }

  async createCouleurs() {
    const arrayCategories = [
      {
        couleur: 'Noir'
      },
      { 
        couleur: 'Gris'
      },
      {
        couleur: 'Blanc'
      },
      {
        couleur: 'Bleu'
      },
      {
        couleur: 'Vert'
      },
      { 
        couleur: 'Rouge'
      },
      {
        couleur: 'Orange'
      },
      {
        couleur: 'Jaune'
      }
    ];
    for (const c of arrayCategories) {
      const exists = await this.connection.getRepository(Couleurs).findOne({
        where: {
          couleur: c.couleur
        }
      });
      if (!exists) {
        const categoryObj = this.connection.getRepository(Couleurs).create(c);
        await this.connection.getRepository(Couleurs).save(categoryObj);
      }
    }
  }
}
