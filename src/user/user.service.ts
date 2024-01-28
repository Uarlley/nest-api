import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

	constructor(private readonly prisma : PrismaService) {}

		async create(createUserDto: CreateUserDto) {
		try{
			return this.prisma.user.create({
			data: createUserDto,
			});
		}catch(error){
			throw error;
		}
		}

		async findAll() {
		return this.prisma.user.findMany();
	}

	async findOne(id: number) {

		const user = await this.prisma.user.findUnique({
			where: { 
			id: id
			},
		});

		if (user === null) {
			throw new NotFoundException(`User #${id} not found`);
		}

		return user;
	}

	async updatePartial(id: number, updateUserDto: UpdateUserDto) {

		try{
			return this.prisma.user.update({
			where: { id: id },
			data: {
				...updateUserDto,
				updatedAt: new Date(),
			},
			});
		}catch(error){
			throw new NotFoundException(`User #${id} not found`);
		}

	}

	async update(id: number, updateUserDto: CreateUserDto) {

		try{
			return this.prisma.user.update({
			where: { id: id },
			data: {
				email: updateUserDto.email,
				name: updateUserDto.name,
				password: updateUserDto.password,
				role: updateUserDto.role? updateUserDto.role : null,
				updatedAt: new Date(),
			},
			});
		}catch(error){
			throw new NotFoundException(`User #${id} not found`);
		}
	}

	async remove(id: number) {

		try {
			await this.prisma.user.delete({
			where: { id: id },
			});
		} catch (error) {
			throw new NotFoundException(`User #${id} not found`);
		}

	}
}
