const Joi = require("joi");

const GROUP_NAME = 'orders';

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      return {};
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, h) => {
      return {};
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
      validate: {
        params: {
          orderId: Joi.string().required(),
        },
        payload: {
          id: Joi.number().required().description('the user id')
        },
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).unknown(),
      }
    },
  },
];
