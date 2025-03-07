import { check } from "express-validator";

export const usersPostValidation = [
  check("publicAddress", "Please include a valid ETH public wallet address")
    .notEmpty()
    .matches(/^0x[a-fA-F0-9]{40}$/g),
];

export const reviewPostValidationRequest = [
  check("rating", "Please include a valid rating").isInt({ min: 1, max: 5 }),
  check("comment", "Please include a valid comment").isString().notEmpty(),
];

export const ticketPostValidationRequest = [
  check("message", "Please include a valid message").isString().notEmpty(),
];

export const userUpdateContactInfo = [
  check("firstName", "Please include a valid first name").not().isEmpty(),
  check("lastName", "Please include a valid last name").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("age", "Age has to be between 20 and 90").isInt({ min: 20, max: 90 }),
];
export const reserveValidationRequest = [
  check("checkIn", "Please include a check in date").not().isEmpty().isDate(),
  check("checkOut", "Please include a check out date").not().isEmpty().isDate(),
];
export const reservationCompleteRequest = [
  check("hash", "Please include a valid ETH transaction hash")
    .isString()
    .not()
    .isEmpty()
    .isLength({ min: 66, max: 66 }),
];

export const addPropertyValidation = [
  check("name", "Property has to have a name").not().isEmpty(),
  check("description", "Property has to have a description").not().isEmpty(),
  check("type", "Property has to have a type").not().isEmpty(),
  check("size", "Property has to have a sizing")
    .isObject()
    .custom((sizeProp) => {
      if (!sizeProp.beds || !sizeProp.bathrooms || !sizeProp.guests) {
        throw new Error(
          "Property sizing should contain beds, bathrooms, guests"
        );
      }
      return true;
    }),
  check("location", "Property has to have a location")
    .isObject()
    .custom((locationProp) => {
      if (
        !locationProp.country ||
        !locationProp.city ||
        !locationProp.address
      ) {
        throw new Error(
          "Property location should contain country, city, address"
        );
      }
      return true;
    }),
  check("price", "Property has to have a price in a number format")
    .isDecimal()
    .not()
    .isEmpty(),
  check("amenities", "Property has to have amenities").isArray(),
  check("safety_amenities", "Property has to have safety amenities").isArray(),
  check("booking_status", "Property has to have a booking status")
    .isBoolean()
    .not()
    .isEmpty(),
];
