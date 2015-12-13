// bootstrap and load main app module
import '../styles.css';
import * as angular from 'angular';
import { bootstrap } from 'ng-metadata/ng-metadata';
import { TodoAppModule } from './app';

bootstrap( TodoAppModule );
