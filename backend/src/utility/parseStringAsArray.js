module.exports = (arrayAsString) => { 
    return arrayAsString.split(',').map(each => each.trim());
}