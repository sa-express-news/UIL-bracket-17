export const everyObjectHasOwnProperty = (objects: object[], property: string): boolean => {
    const propertyTest = (object: object): boolean => {
        return object.hasOwnProperty(property);
    }

    return objects.every(propertyTest);
}

export const everyObjectHasUniquePropertyValue = (objects: object[], property: string): boolean => {
    const properties = new Set(objects.map(object => object[property]));

    return properties.size === objects.length;
}