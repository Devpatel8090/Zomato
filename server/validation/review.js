import joi from "joi";

export const ValidateReview = (reviewData) => {
    
    const Schema = joi.object({
      rating: joi.number().required(),
      reviewText: joi.string().required()

    });

    return Schema.validateAsync(reviewData);

};

export const ValidateReviewId = (reviewId) => {
    
    const Schema = joi.object({
      _id: joi.string().required()

    });

    return Schema.validateAsync(reviewId);

};