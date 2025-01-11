import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int)
  offset: number;

  @Field(() => Int)
  limit: number;
}
