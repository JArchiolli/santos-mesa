import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { OAuth2Client } from 'google-auth-library';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  private client: OAuth2Client;

  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'default_secret'});

    this.client = new OAuth2Client();
  }

  async validate(payload: any) {
    if (payload.sub) {
      return { id: payload.sub, email: payload.email, role: payload.role };
    }

    if (payload.googleToken) {
      try {
        const ticket = await this.client.verifyIdToken({
          idToken: payload.googleToken,
          audience: this.configService.get<string>('GOOGLE_CLIENT_ID') || '',
        });

        const googleUser = ticket.getPayload();
        if (!googleUser) throw new UnauthorizedException();

        return {
          id: googleUser.sub,
          email: googleUser.email,
          role: 'user',
        };
      } catch (error) {
        throw new UnauthorizedException('Token do Google inválido');
      }
    }

    throw new UnauthorizedException();
  }
}
