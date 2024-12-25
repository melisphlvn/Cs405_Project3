/**
 * @class SceneNode
 * @desc A SceneNode is a node in the scene graph.
 * @property {MeshDrawer} meshDrawer - The MeshDrawer object to draw
 * @property {TRS} trs - The TRS object to transform the MeshDrawer
 * @property {SceneNode} parent - The parent node
 * @property {Array} children - The children nodes
 */

class SceneNode {
    constructor(meshDrawer, trs, parent = null) {
        this.meshDrawer = meshDrawer;
        this.trs = trs;
        this.parent = parent;
        this.children = [];

        if (parent) {
            this.parent.__addChild(this);
        }
    }

    __addChild(node) {
        this.children.push(node);
    }

    draw(mvp, modelView, normalMatrix, modelMatrix) {
        /**
         * @Task1 : Implement the draw function for the SceneNode class.
         */
        
        // Obtain node's transformation state
        let localTransform = this.trs.getTransformationMatrix();
        
        // Calculate world space transformations
        let worldModel = MatrixMult(modelMatrix, localTransform);
        let worldView = MatrixMult(modelView, localTransform);
        let worldProjection = MatrixMult(mvp, localTransform);
        
        // Update normal transformation
        let worldNormal = MatrixMult(normalMatrix, localTransform);
    
        // Render geometry if available
        if (this.meshDrawer) {
            this.meshDrawer.draw(worldProjection, worldView, worldNormal, worldModel);
        }
    
        // Propagate transforms to child elements
        this.children.forEach(node => {
            node.draw(worldProjection, worldView, worldNormal, worldModel);
        });
    }
     

}