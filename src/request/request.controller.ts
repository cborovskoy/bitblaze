import {Controller, Post, Body} from '@nestjs/common';

@Controller('api/v1')
export class RequestController {
    @Post('request')
    async create(@Body() body: any) {
        const {wait, answer} = body;
        if (wait < 0 || answer.length < 3) {
            throw new Error('Invalid parameters');
        }
        await new Promise(resolve => setTimeout(resolve, wait * 1000));
        return {answer};
    }
}
