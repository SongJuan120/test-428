const parentChildPairs = [
    [5, 6], [1, 3], [2, 3], [3, 6], [15, 12],
    [5, 7], [4, 5], [4, 9], [9, 12], [30, 16]
];
function getCollections(parent_child_pairs) {
    const m = new Map();
    let all = [];
    for (const el of parent_child_pairs) {
        const t = m.get(el[1]);
        if (t) {
            t.push(el[0]);
            m.set(el[1], t);
        } else {
            m.set(el[1], [el[0]]);
        }
        all.push(el[0]);
        all.push(el[1]);
    }
    const setAll = new Set(all.sort((a, b) => a - b));
    let collection1 = [];
    let collection2 = [];
    setAll.forEach((item) => {
        const t = m.get(item);
        if (t) {
            if (t.length == 1) {
                collection2.push(item);
            }
        } else {
            collection1.push(item);
        }
    });
    console.log(collection1);
    console.log(collection2)
}
getCollections(parentChildPairs);