import React, { Component } from 'react';
import Three from './dependencies/three';
import Renderer from './dependencies/CSS3DRenderer';
import Trackball from './dependencies/TrackballControls';
import Tween from './dependencies/tween.min';
import './dependencies/three.css';

class ThreeComp extends Component {
    render() {
        return (
            <div>
                <div id="container"></div>
                <div id="info">
                        <a href="http://threejs.org" target="_blank" rel="noopener">three.js css3d</a> - periodic table. <a href="https://plus.google.com/113862800338869870683/posts/QcFk5HrWran" target="_blank" rel="noopener">info</a>.
                </div>
                <div id="menu">
                    <button id="table">TABLE</button>
                    <button id="sphere">SPHERE</button>
                    <button id="helix">HELIX</button>
                    <button id="grid">GRID</button>
                </div>
            </div>
        );
    }
}

export default ThreeComp;