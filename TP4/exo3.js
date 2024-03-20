function zip_v(v) {
    // Base case: if the vector is empty, return an empty array
    if (v.length === 0) {
        return [];
    }
    
    // Recursive case: zip the rest of the vector and the first element
    var compressed = zip_v(v.slice(1));
    
    // If the first element is not in the compressed vector, add it
    if (!compressed.includes(v[0])) {
        compressed.unshift(v[0]);
    }
    
    return compressed;
}

// Example usage:
var vector = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];
var compressedVector = zip_v(vector);
console.log(compressedVector); // Output: [1, 2, 3, 4, 5, 6, 7]
