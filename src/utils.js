////////////////////////////////////////////////////////////////////////////////////////
//
//  Utils
//
////////////////////////////////////////////////////////////////////////////////////////

/** prefix function */
export function prefixAniObj(ani) {
    if (!ani.name) ani.name = 'play';
}

export function cloneArray(arr1, arr2) {
    arr1.length = 0;

    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    return arr1;
}