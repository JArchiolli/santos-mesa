import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) { }

  create(createLocationDto: CreateLocationDto) {
    return this.prisma.location.create({
      data: {
        address: createLocationDto.address,
        city: createLocationDto.city,
        number: createLocationDto.number,
        state: createLocationDto.state,
        restaurantId: createLocationDto.restaurantId
      },
      select: {
        restaurant: true
      }
    })
  }

  async findAll() {
    return this.prisma.location.findMany();
  }

  async findOne(id: number) {
    return this.prisma.location.findUnique({ where: { id } });
  }

  async update(id: number, updateLocation: UpdateLocationDto) {
    return this.prisma.location.update({
      where: { id },
      data: updateLocation,
    });
  }

  async remove(id: number) {
    return this.prisma.location.delete({ where: { id } });
  }

}
