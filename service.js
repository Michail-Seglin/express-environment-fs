const fs = require('fs');

const path = './storage/environment.json';

function getAllEnvironment() {
    const arr = JSON.parse(fs.readFileSync(path));
    return arr
}

function getEnvironmentById(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((el) => el.id == id)
    return filtered;
}

function createEnvironment(label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    const item = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }

    arr.push(item);

    fs.writeFileSync(path, JSON.stringify(arr));
    return arr;
}

function updateEnvironment(id, label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((el) => el.id != id);
    if (filtered.length == arr.length) return 'error'
    const item = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }
    filtered.push(item);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered
}


function deleteEvironment(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const deleted = arr.filter(el => el.id = id);
    if (arr.length == deleted.length) return 'your ID not found';
    fs.writeFileSync(path, JSON.stringify(deleted));
    return deleted
}
module.exports = {
    getAllEnvironment,
    getEnvironmentById,
    createEnvironment,
    updateEnvironment,
    deleteEvironment
};