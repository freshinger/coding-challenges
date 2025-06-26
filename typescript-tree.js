"use strict";
function drawTree(height) {
    let tree = "";
    for (let level = 1; level <= height; level++) {
        for (let j = 0; j < height - level; j++) {
            tree += " ";
        }
        for (let j = 0; j < 1 + (level - 1) * 2; j++) {
            tree += "*";
        }
        tree = tree + "\n";
    }
    return tree;
}
console.log(drawTree(5));
