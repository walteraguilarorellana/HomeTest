
import { Controller, Get } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developer')
    export class DeveloperController {
    constructor(private  DeveloperService: DeveloperService) {}

    @Get()
    public Developer (): any {
        return this.DeveloperService.Developer;
    }
}
