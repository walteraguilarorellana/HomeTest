import { Injectable } from '@nestjs/common';

@Injectable()
export class DeveloperService {
    public Developer = [
        {
            name: 'Walter Aguilar', 
            username: 'walteraguilarorellana', 
            email: 'walteraguilarorellana@gmail.com',
            repo: 'HomeTest'
        }
    ];
}
