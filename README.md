# Cs405_Project3
Solar System Simulation - Computer Graphics Project
Project Overview
This project implements a 3D solar system visualization using WebGL, featuring hierarchical scene graphs and realistic lighting effects. The simulation includes the Sun, Earth, Moon, and Mars, each with proper scaling, rotation, and orbital relationships.
Features

Hierarchical scene graph implementation
Phong lighting model (ambient, diffuse, and specular)
Realistic planetary textures
Dynamic rotation and orbital movements
Proper transformation inheritance between celestial bodies

Implementation Details
Task 1: Scene Graph

Implemented hierarchical transformation system
Developed matrix multiplication for proper coordinate space conversion
Created parent-child relationships between celestial bodies
Managed transformation propagation through the scene hierarchy

Task 2: Lighting System

Implemented Phong lighting model
Added diffuse lighting calculations
Integrated specular highlights
Applied proper normal transformations
Enhanced visual realism through light-surface interactions

Task 3: Mars Integration

Added Mars to the solar system
Implemented proper scaling (0.35x)
Positioned at -6 units on X-axis from Sun
Configured rotation speed (1.5x Sun's rotation)
Applied Mars-specific texture mapping

Technologies Used

WebGL
JavaScript
GLSL (OpenGL Shading Language)
Setup and Running

Clone the repository
Ensure you have Python installed
Start a local server:
bashCopypython -m http.server 8000

Open your browser and navigate to http://localhost:8000
Credits

Textures sourced from proper astronomical images
Sun texture: https://i.imgur.com/gl8zBLI.jpg
Earth texture: https://i.imgur.com/eCpD7bM.jpg
Moon texture: https://i.imgur.com/oLiU4fm.jpg
Mars texture: https://i.imgur.com/Mwsa16j.jpeg
