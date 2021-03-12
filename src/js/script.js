import './modules/nojs.js';
import './modules/home-slider.js';
import './modules/works-slider.js';
import {Nav} from './modules/nav.js';
import {ModelViewer} from './modules/model-viewer.js';

const nav = new Nav('nav');
nav.init();

const modelViewer = new ModelViewer('model');
modelViewer.init();
