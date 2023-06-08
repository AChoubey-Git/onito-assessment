import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Request } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService
  ) { }

  @Post("/signup")
  async create(@Body() user: any, @Res() res) {
    try {
      const data = await this.userService.create(user);
      res.send({
        status: true,
        body: data
      })
    } catch (error) {
      let message = error.message;
      if(error.code === "ER_DUP_ENTRY"){
        message = "Email_id already exists"; 
      }
      res.send({
        status: false,
        message: message ?? ' Failed to signup',
      })

      
    }

  }

  @Post("login")
  async login(@Body() body, @Res() res) {
    const user = await this.userService.findOne(body);
    console.log((user))
    if (user) {
      const token = await this.authService.login(user);
      res.send({
        status: true,
        token,
        username: user.name
      })
    } else {
      res.send({
        status: false,
        message: 'Incorrect email and password'
      })
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
