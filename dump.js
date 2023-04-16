function customLayout0(nodes) {
    const levelRadius = [150, 300, 450, 600];
    const positions = {};

    const levelNodeCounts = [0, 0, 0, 0];

    nodes.forEach((node) => {
        const level = node.data.level - 1;
        const nodeIndex = levelNodeCounts[level];
        levelNodeCounts[level]++;

        const angleStep = 2 * Math.PI / nodes.length;
        const nodeAngle = nodeIndex * angleStep;

        const x = Math.cos(nodeAngle) * levelRadius[level];
        const y = Math.sin(nodeAngle) * levelRadius[level];

        positions[node.data.id] = {
            x: x,
            y: y,
        };
    });

    return positions;
}


  function customLayout1(nodes) {
    const levelRadius = [150, 300, 450, 600];
    const categorySpacing = 10;
  
    const categoryCounts = new Map();
    const categoryNodeCounts = new Map();
  
    nodes.forEach((node) => {
      const category = node.data.category;
      if (!categoryCounts.has(category)) {
        categoryCounts.set(category, 0);
        categoryNodeCounts.set(category, 0);
      }
      categoryCounts.set(category, categoryCounts.get(category) + 1);
    });
  
    const categoryAngles = new Map();
    const totalCategoryCounts = Array.from(categoryCounts.values());
    const totalNodes = totalCategoryCounts.reduce((a, b) => a + b, 0);
    const angleStep = 2 * Math.PI / totalNodes;
    let currentAngle = 0;
    for (const [category, count] of categoryCounts) {
      categoryAngles.set(category, currentAngle);
      currentAngle += angleStep * count;
    }
  
    const positions = {};
    nodes.forEach((node) => {
      const level = node.data.level;
      const radius = levelRadius[level];
      const categoryAngle = categoryAngles.get(node.data.category);
      const nodeIndex = categoryNodeCounts.get(node.data.category);
      const nodeAngle = nodeIndex * angleStep + categorySpacing;
      categoryNodeCounts.set(node.data.category, nodeIndex + 1);
  
      const x = Math.cos(categoryAngle + nodeAngle) * radius;
      const y = Math.sin(categoryAngle + nodeAngle) * radius;
      
      positions[node.data.id] = {
      x: x,
      y: y,
      };
      });
      
      return positions;
  }
  

  function customLayout2(nodes) {
    const levelRadius = [0, 250, 500, 750];
    const categorySpacing = 100;
  
    const categoryCounts = new Map();
    const categoryNodeCounts = new Map();
  
    nodes.forEach((node) => {
      const category = node.data.category;
      if (!categoryCounts.has(category)) {
        categoryCounts.set(category, 0);
        categoryNodeCounts.set(category, 0);
      }
      categoryCounts.set(category, categoryCounts.get(category) + 1);
    });
  
    const categoryAngles = new Map();
    const totalCategoryCounts = Array.from(categoryCounts.values());
    const totalNodes = totalCategoryCounts.reduce((a, b) => a + b, 0);
    //console.log(totalNodes);
    console.log(categoryCounts);
    const angleStep = 2 * Math.PI / totalNodes;
    let currentAngle = 0;
    for (const [category, count] of categoryCounts) {
      categoryAngles.set(category, currentAngle);
      currentAngle += angleStep * count;
    }
  
    const positions = {};
    console.log("nodes len:"+nodes.length);
    nodes.forEach((node) => {
      const level = node.data.level-1;
      const radius = levelRadius[level];
      const categoryAngle = categoryAngles.get(node.data.category);
      const nodeIndex = categoryNodeCounts.get(node.data.category);
      const nodeAngle = nodeIndex * angleStep + categorySpacing;
      // console.log("Node id:", node.data.id);
      // console.log("Level:", level);
      // console.log("Radius:", radius);
      // console.log("Category angle:", categoryAngle);
      // console.log("Node index:", nodeIndex);
      // console.log("Node angle:", nodeAngle);
      categoryNodeCounts.set(node.data.category, nodeIndex + 1);
  
      const x = Math.cos(categoryAngle + nodeAngle) * radius;
      const y = Math.sin(categoryAngle + nodeAngle) * radius;
  
      positions[node.data.id] = {
        x: x,
        y: y,
      };
    });
    console.log(positions);
    return positions;
  }

  function addCategoryLabels() {
    const categories = Object.keys(categoryColors);
    categories.forEach((category) => {
    const nodesInCategory = cy.nodes(`[category="${category}"]`);
    if (nodesInCategory.length > 0) {
        const groupBoundingBox = nodesInCategory.boundingBox();
        cy.add({
        group: "nodes",
        data: {
            id: ` ${category}`,
            category: "label",
        },
        position: {
            x: groupBoundingBox.x1 + (groupBoundingBox.w / 2),
            y: groupBoundingBox.y1 - 40,
        },
        });
    }
    });
  }
  //cy.ready(addCategoryLabels);