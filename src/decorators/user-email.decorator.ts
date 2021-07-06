import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ExecException } from 'child_process';

export const UserEmail = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		return request.user;
	}
)