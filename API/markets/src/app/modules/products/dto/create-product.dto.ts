import { ApiProperty } from '@nestjs/swagger';


export class CreateProductDto
{

	@ApiProperty()
	readonly VDR_ID: number;

	@ApiProperty()
	readonly PDT_NAME: string;

	@ApiProperty()
	readonly PDT_PRICE: number;

	@ApiProperty()
	readonly PDT_QUANTITY: number;

	@ApiProperty()
	readonly PDT_UNIT: string;

	@ApiProperty()
	readonly PDT_IMAGE: string;
}
