import joi from "joi";

export const ValidateRestaurantCity = (restaurantObj) => {
    
    const Schema = joi.object({
        city: joi.string().required()
        
    });

    return Schema.validateAsync(restaurantObj);
};



export const ValidateRestaurantSerchString = (restaurantObj) => {
    
    const Schema = joi.object({
       
        serch: joi.string().required()
       
    });

    return Schema.validateAsync(restaurantObj);
};

