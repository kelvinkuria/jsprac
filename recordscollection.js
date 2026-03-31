// ============================================================================
// PART 1: THE DATABASE (OBJECT)
// ============================================================================

// We create a variable named 'recordCollection'.
// This is an OBJECT, not an Array. 
// Why? Because we want to look up albums by their specific ID number (like a library catalog),
// rather than by their position (1st, 2nd, 3rd).
const recordCollection = {
    
    // KEY: 2568 (The ID). VALUE: An Object containing album details.
    // Note: In JavaScript, object keys are always treated as strings ("2568"), even if you write numbers.
    2568:{
        albumTitle:'Slippery when Wet',
        artist:'Bon Jovi',
        // 'tracks' is special: It is an ARRAY (list) inside the object.
        tracks:['Let it Rock','You Give Love a Bad Name']
    },
    
    // KEY: 2468. Another Album Card.
    2468:{
        albumTitle:'1999',
        artist:'Prince',
        tracks:['1999','Little Red Corvette']
    },
    
    // KEY: 1245. Notice this one has NO 'albumTitle'.
    // Objects don't require every card to have the same properties.
    1245:{
        artist:'Robert Palmer',
        tracks:[] // Empty list of tracks.
    },
    
    // KEY: 5439. Notice this one has NO 'tracks' list at all.
    5439:{
        albumTitle:'ABBA Gold'
        // 'tracks' property is missing entirely.
    }
}

// ============================================================================
// PART 2: THE LIBRARIAN TOOL (FUNCTION)
// ============================================================================

// We define a function named 'updateRecords'.
// It needs 4 ingredients to do its job:
// 1. 'records': The whole filing cabinet (the object above).
// 2. 'id': The specific folder ID we want to change (e.g., 2568).
// 3. 'prop': The property name we want to change (e.g., "artist", "tracks", or "albumTitle").
// 4. 'value': The new information we want to put there.
function updateRecords(records, id, prop, value){

    // RULE 1: The Eraser
    // If the 'value' provided is an empty string "", it means the user wants to DELETE this information.
    if (value === ""){
        
        // 'delete' is a special JavaScript command that removes a property from an object entirely.
        // records[id] finds the album object (e.g., Bon Jovi).
        // [prop] finds the specific field (e.g., "artist").
        // Together, it erases that field from that album.
        delete records[id][prop]
    
    // RULE 2: The Track List Manager
    // 'else if' checks if the property we are editing is specifically "tracks".
    // Tracks are special because they are a list (Array), not just a single text string.
    }else if(prop === "tracks"){
        
        // This line is tricky but powerful. Let's break it down:
        // 1. records[id][prop]: Look at the current tracks list.
        // 2. || : This is the Logical OR operator. It means "If the left side is empty/undefined, use the right side".
        // 3. [] : An empty array.
        // MEANING: If the album already has a tracks list, keep it. If it doesn't (like ABBA Gold), create a new empty list [].
        records[id][prop] = records[id][prop] || [];
        
        // '.push(value)' adds the new song title to the end of the tracks list.
        // We are updating the list in place.
        records[id][prop].push(value)
    
    // RULE 3: The Standard Updater
    // 'else' catches everything else (like updating 'artist' or 'albumTitle').
    }else{
        // Simply set the property to the new value.
        // If 'prop' is "artist", this sets records[id]["artist"] = value.
        records[id][prop] = value;
    };

    // Return the updated filing cabinet.
    // NOTE: Because objects are "passed by reference", the original 'recordCollection' 
    // is actually modified directly even before this return statement.
    // But returning it allows us to chain functions or see the result immediately.
    return records;
}