import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Role } from '../enums/roles.enum';
import { UsersService } from '../../user/user.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  canActivate(context: ExecutionContext): Observable<boolean> {
    const { authorization } = context.switchToHttp().getRequest()?.headers;
    const token = authorization.replace('Bearer ', '');
    return from(this.userService.findUserByQuery({ token })).pipe(
      map((user: any) => {
        return user?.ruleGroups[0]?.name === Role.Admin;
      }),
    );
  }
}
