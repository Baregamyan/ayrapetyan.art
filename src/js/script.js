import './modules/nojs.js';
import './modules/home-slider.js';
import './modules/works-slider.js';
import './modules/modelZoom.js';

import {Nav} from './modules/nav.js';
import { ModelZoom } from './modules/modelZoom.js';

const nav = new Nav('nav');
nav.init();

const modelZoom = new ModelZoom('model');
modelZoom.init();
