import { Module } from '@nestjs/common';

// Config
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

// Mongoose
import { MongooseModule } from '@nestjs/mongoose';

// GraphQL
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

// Path
import { join } from 'path';

import { FilmsResolver } from './films/films.resolver';

import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
        emitTypenameField: true,
      },
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (cfg: ConfigurationService) => ({
        uri: cfg.dbUri,
      }),
      inject: [ConfigurationService],
    }),
    ConfigurationModule,
  ],
  providers: [FilmsResolver],
})
export class AppModule {}
