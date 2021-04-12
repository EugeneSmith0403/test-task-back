import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../../user/user.service';
import { Observable } from 'rxjs';
export declare class RolesGuard implements CanActivate {
    private userService;
    constructor(userService: UsersService);
    canActivate(context: ExecutionContext): Observable<boolean>;
}
