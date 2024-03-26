export const convert_object_to_local_language = (obj: { [key: string]: string | null } | null, field: string): string | null => {
    const language: string = localStorage.getItem("language") || "en";

    if (!obj || typeof obj !== 'object') {
        console.error('Invalid object provided.');
        return null;
    }

    return obj[field + '_' + language] ?? null;
};


const fakeArray: any[] = [
    { local: "en", name: 'Apple', name_fr: 'Pomme', description: 'A fruit' },
    { local: "ar", name: 'Banana', name_fr: 'Banane', description: 'Another fruit' },
];

export const convert_language_array_to_local = (array: any[], field: string , lang?:string): string => {
    const language: string = lang ? lang: (localStorage.getItem("language") || "en");

    
    if(!Array.isArray(array)){
        return ""
    }
    if((array.length == 0)){

        return "" 
    }
      
        
    const object = array?.find(item => item.locale === language)

    if(!object){
        return  ""
    }


    return object[field]
       
}


export const convert_language_array_to_field = (array: any[], field: string, language: string): string[] => {
    // Check if array is defined and is an array
    
    if (!Array.isArray(array)) {
        console.error('Invalid input: array is not an array.');
        return [];
    }

    // Filter and map only if array is valid
    return array
        .filter(item => typeof item === 'object' && item.local === language) // Only objects with the 'local' property matching the specified language
        .map(item => {
            const value = item[field];
            return value !== undefined ? value : null;
        });
}
