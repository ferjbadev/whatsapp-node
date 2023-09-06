const {body ,validationResult} = require('express-validator');

const validation = (req, res, next) => {
  const rules = [
    body('countryCode').notEmpty().withMessage('Country Code is require').isLength({min: 2, max: 3}).withMessage('Invalid Country Code, must have at least 2 numbers'),
    body('numberPhone').notEmpty().withMessage('Phone number is require')
    .isMobilePhone('any', {strictMode: false}).isLength({min: 8}).withMessage('Invalid phone number, must have at least 10 numbers'),
    body('message').optional().isString().withMessage('The message must be a text string')
  ];

  Promise.all(rules.map(rule => rule.run(req))).then(()=>{
    const error = validationResult(req);

    if(!error.isEmpty()){
      return res.status(400).json({error: error.array()});
    }
    next();
  });
};

module.exports = validation;